
import React, { useCallback, useEffect, useState, useMemo } from 'react'

import { Timestamp } from '@firebase/firestore'
import { DownloadIcon } from '@heroicons/react/solid'
import { Grid, makeStyles } from '@material-ui/core'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useField } from 'formik'
import { Form, Formik } from 'formik'
import { parse } from 'papaparse'
import { FileError, FileRejection, useDropzone } from 'react-dropzone'
import { v4 as uuidv4 } from 'uuid'
import * as Yup from 'yup'

import {
  checkIfLeadAlreadyExists,
  checkIfUnitAlreadyExists,
  createPhaseAssets,
  getAllProjects,
  steamUsersListByRole,
} from 'src/context/dbQueryFirebase'
import { useAuth } from 'src/context/firebase-auth-context'
import { storage } from 'src/context/firebaseConfig'
import { TextField } from 'src/util/formFields/TextField'

import { LAddLeadTable } from '../LAddLeadTable'
import LfileUploadTableHome from '../LfileUploadTableHome'
import Loader from '../Loader/Loader'

import { SingleFileUploadWithProgress } from './SingleFileUploadWithProgress'
import { UploadError } from './UploadError'

let currentId = 0

function getNewId() {

  return ++currentId
}

export interface UploadableFile {

  id: number
  file: File
  errors: FileError[]
  url?: string
}

const useStyles = makeStyles((theme) => ({
  dropzone: {
    border: `2px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.background.default,
    height: theme.spacing(10),
    outline: 'none',
  },
}))

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  lineHeight: '70px',


}

const focusedStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
}

export function MultipleFileUploadField({
  name,
  title,
  pId,
  myPhase,
  myBlock,
  source,
}) {
  const { user } = useAuth()

  const { orgId } = user
  const [_, __, helpers] = useField(name)
  const classes = useStyles()

  const [files, setFiles] = useState<UploadableFile[]>([])
  const [fileRecords, setfileRecords] = useState([])
  const [fileName, setFileName] = useState('')
  const [projectList, setprojectList] = useState([])
  const [salesTeamList, setSalesTeamList] = useState([])

  const [uploadedUrl, setUploadedUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [formMessage, setFormMessage] = useState('')

  useEffect(() => {

    if (title === 'Import Leads') {
      getAllProjects(
        orgId,
        async (querySnapshot) => {
          const usersListA = await querySnapshot.docs.map((docSnapshot) =>
            docSnapshot.data()
          )
          await setprojectList(usersListA)
          await console.log('fetched users list is', usersListA, projectList)
        },
        (error) => setprojectList([])
      )
      steamUsersListByRole(
        orgId,
        (querySnapshot) => {
          const usersListA = querySnapshot.docs.map((docSnapshot) =>
            docSnapshot.data()
          )
          usersListA.map((user) => {
            user.label = user.displayName || user.name
            user.value = user.uid
          })
          console.log('fetched users list is', usersListA)

          setSalesTeamList(usersListA)
        },
        (error) => setSalesTeamList([])
      )
    }
  }, [])

  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({
      file,
      errors: [],
      id: getNewId(),
    }))
    const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }))
    setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej])
  }, [])

  useEffect(() => {
    helpers.setValue(files)

  }, [files])

  function uploadFile(file: File) {
    console.log('cloud it 1 ')
    setLoading(true)
    if (!file) return
    try {
      const uid = uuidv4()
      const storageRef = ref(storage, `/${orgId}_files/_${uid}`)
      const uploadTask = uploadBytesResumable(storageRef, file)
      return uploadTask.on(
        'state_changed',
        (snapshot) => {
          const prog =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100


        },
        (err) => console.log(err),
        async () => {
          const { projectId, uid } = myPhase || {}
          const url = await getDownloadURL(uploadTask.snapshot.ref)
          let type
          switch (title) {
            case 'Plan Diagram':
              type = 'plan_diagram'
              break
            case 'Brouchers':
              type = 'broucher'
              break
            case 'Approvals':
              type = 'approval'
              break

            default:
              break
          }

          createPhaseAssets(
            orgId,
            url,
            'nithe.nithesh@gmail.com',
            fileName || file.name,
            pId,
            uid,
            type,
            'pdf'
          )

          setLoading(false)
          setFormMessage('Uploaded Successfully..!')
          await console.log('file url i s', url, myPhase)
          return url

        }
      )
    } catch (error) {
      console.log('upload error is ', error)
    }
  }
  function onUpload(file: File, url: string) {
    console.log('field uploaded successfully', file, url, uploadedUrl)

    parse(file, {
      header: true,

      complete: async function (input) {
        const records = input.data

        if (['Import Units', 'Import Project Units'].includes(title)) {
          console.log('import stuff is ', records)
          const clean1 = records.filter((row) => row['unit_no'] != '')


          const serialData = await Promise.all(
            clean1.map(async (dRow) => {
              console.log('input date is ', dRow)
              const foundLength = await checkIfUnitAlreadyExists(
                `${orgId}_units`,
                pId,
                myPhase?.uid || '',
                myBlock?.uid || '',
                dRow['unit_no']
              )
              dRow['mode'] = await makeMode(foundLength)
              await console.log(
                'foundLength is',
                foundLength,
                dRow,
                foundLength,
                dRow['Mobile']
              )
              return await dRow
            })
          )

          await setfileRecords(serialData)


          await console.log('Finished: records', serialData, fileRecords)
        } else if (['Plan Diagram', 'Brouchers', 'Approvals'].includes(title)) {
          console.log('data os jere', records)

        } else {
          const clean1 = records.filter((row) => row['Date'] != '')


          const serialData = await Promise.all(
            clean1.map(async (dRow) => {
              console.log('found row is ', dRow)
              const foundLength = await checkIfLeadAlreadyExists(
                `${orgId}_leads`,
                dRow['Mobile']
              )

              const date = new Date(dRow['Date'])
              const milliseconds = date.getTime() + 21600000
              console.log('milliseconds is', milliseconds)

              dRow['Date'] = milliseconds
              dRow['Status'] = dRow['Status']?.toLowerCase() || ''
              dRow['Source'] = dRow['Source']?.toLowerCase() || ''
              dRow['mode'] = await makeMode(foundLength)
              if (dRow['mode'] === 'valid' && dRow['EmpId'] != '') {
                console.log('found row is 1', dRow)

                const MatchedValA = await salesTeamList.filter((data) => {
                  return data.empId == dRow['EmpId']
                })
                if (MatchedValA.length === 1) {
                  console.log('found row is 2', dRow)
                  const { offPh } = MatchedValA[0]
                  dRow['assignedTo'] = MatchedValA[0]['uid']
                  dRow['assignedToObj'] = {
                    empId: MatchedValA[0]['empId'],
                    label: MatchedValA[0]['name'],
                    name: MatchedValA[0]['name'],
                    offPh: offPh || 0,
                  }
                }
              }

              if (dRow['Status'] == '' || dRow['Status'] === undefined) {
                dRow['Status'] = 'unassigned'
              }

              if (dRow['Project'] != '') {
                console.log('found row is 3', dRow, projectList)
                const projectFilA = projectList.filter((data) => {
                  console.log('found row is 3.1', data)
                  return data.projectName == dRow['Project']
                })
                if (projectFilA.length >= 1) {
                  console.log('found row is 4', dRow)
                  dRow['ProjectId'] = projectFilA[0]['uid']
                }
              }

              dRow['CT'] = Timestamp.now().toMillis()
              console.log('found row is 5', dRow)
              await console.log(
                'foundLength is',
                foundLength,
                dRow,
                foundLength,
                dRow['Mobile']
              )
              return await dRow
            })
          )

          await setfileRecords(serialData)

          await console.log('Finished: records', serialData, fileRecords)
        }
      },
    })
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url }
        }
        return fw
      })
    )
  }

  function makeMode(foundLength) {
    console.log('foundder is ', foundLength)
    if (foundLength == undefined || foundLength?.length === 0) {
      console.log('foundLength is==> ', foundLength)
      return 'valid'
    } else {
      return 'duplicate'
    }
  }

  function onDelete(file: File) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file))
  }

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      accept: [
        'Plan Diagram',
        'Brouchers',
        'Approvals',
        'upload_legal_docs',
      ].includes(title)
        ? '.pdf'
        : '.csv, text/csv, .xlsx',
      maxSize: 40000 * 1024,
    })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  )

  const resetter = () => {
    setSelected({})
    setFormMessage('')
  }

  const validate = Yup.object({
    file_name: Yup.string()

      .required('file_name is Required'),
  })

  const handleSubmit = (file) => {
    uploadFile(file)
  }
  const clearUploadDocs = () => {
    setFiles([])
  }
  return (
    <React.Fragment>
      {files.length === 0 && (
        <div className="mx-3" {...getRootProps({ style })}>
          {title === 'Import Leads' && (
            <div className="w-full flex flex-row justify-between ">
              <span></span>
              <a
                download="leadTemplate.csv"
                target="_blank"
                href="/leadTemplate.csv"
              >
                <span className="text-xs text-blue-500">
                  <DownloadIcon className="h-3 w-3 mr-1 mb-1 inline-block" />
                  Sample Template
                </span>
              </a>
            </div>
          )}
          {title === 'Import Project Units' && (
            <div className="w-full flex flex-row justify-between ">
              <span></span>
              <a
                download="unitTemplate.csv"
                target="_blank"
                href="/unitTemplate.csv"
              >
                <span className="text-xs text-blue-500">
                  <DownloadIcon className="h-3 w-3 mr-1 mb-1 inline-block" />
                  Sample Unit Template
                </span>
              </a>
            </div>
          )}
          <input {...getInputProps()} />

          <div className="pt-2 pb-8 px-8 flex flex-col items-center">
            <div className="font-md font-medium text-xs mb-4 text-gray-800 items-center">
              <img
                className="w-[200px] h-[200px] inline"
                alt=""
                src="/empty-dashboard.svg"
              />
            </div>
            <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              Drag & drop
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              or
              <span className="text-blue-600"> pick from local computer </span>
              {[
                'Plan Diagram',
                'Brouchers',
                'Approvals',
                'upload_legal_docs',
              ].includes(title)
                ? '*.pdf'
                : '*.csv'}


            </time>
          </div>

        </div>
      )}
      {files.length >= 1 && (
        <div className="flex flex-row justify-between">
          <span></span>
          <span
            onClick={() => {
              clearUploadDocs()
            }}
            className="text-blue-500"
          >
            Clear
          </span>
        </div>
      )}

      {files.length >= 1 &&
        files.map((fileWrapper, inx) => (
          <div className="mt-6 p-6 bg-white border border-gray-100" key={inx}>
            {fileWrapper.errors.length ? (
              <UploadError
                file={fileWrapper.file}
                errors={fileWrapper.errors}
                onDelete={onDelete}
              />
            ) : (
              <section>
                <SingleFileUploadWithProgress
                  onDelete={onDelete}
                  onUpload={onUpload}
                  file={fileWrapper.file}
                />
                {['Plan Diagram', 'Brouchers', 'Approvals'].includes(title) && (
                  <Formik
                    initialValues={{
                      file_name: '',
                    }}

                    onSubmit={(values, { resetForm }) => {
                      console.log('ami submitted', values)
                      uploadFile(fileWrapper.file)

                    }}
                  >
                    {(formik) => (
                      <Form>

                        <div className="md:flex flex-row md:space-x-4 w-full text-xs mt-1">
                          <div className="mb-3 space-y-2 w-full text-xs mt-4">
                            <TextField
                              label="File Name*"
                              name="file_name"
                              value={fileName}
                              type="text"
                              onChange={(e) => {
                                setFileName(e.target.value)
                              }}
                            />
                          </div>
                        </div>
                        <div className="mb-8">
                          <p className="text-xs text-red-400 text-right my-3">
                            <abbr title="Required field">*</abbr> fields are
                            mandatory
                          </p>
                          {formMessage === 'Saved Successfully..!' ||
                            (formMessage === 'Uploaded Successfully..!' && (
                              <p className=" flex text-md text-slate-800 text-right my-3">
                                <img
                                  className="w-[40px] h-[40px] inline mr-2"
                                  alt=""
                                  src="/ok.gif"
                                />
                                <span className="mt-2">{formMessage}</span>
                              </p>
                            ))}
                          {formMessage === 'Unit Already Exists' && (
                            <p className=" flex text-md text-pink-800 text-right my-3">
                              <img
                                className="w-[40px] h-[40px] inline mr-2"
                                alt=""
                                src="/error.gif"
                              />
                              <span className="mt-2">{formMessage}</span>
                            </p>
                          )}
                          <div className="mt-5 mt-8 text-right md:space-x-3 md:block flex flex-col-reverse">
                            <button
                              className="mb-4 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-sm hover:shadow-lg hover:bg-gray-100"
                              type="reset"
                              onClick={() => resetter()}
                            >
                              Reset
                            </button>

                            <button
                              className="mb-2 md:mb-0 bg-green-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white  rounded-sm hover:shadow-lg hover:bg-green-500"
                              type="reset"
                              onClick={() => handleSubmit(fileWrapper.file)}
                              disabled={loading}
                            >
                              {loading && <Loader />}
                              Add
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                )}



                {!['Plan Diagram', 'Brouchers', 'Approvals'].includes(
                  title
                ) && (
                  <div className="mt-2 p-6 bg-white border border-gray-100">
                    <LfileUploadTableHome
                      fileRecords={fileRecords}
                      title={title}
                      pId={pId}
                      myBlock={myBlock}
                    />
                  </div>
                )}
              </section>
            )}
          </div>
        ))}

      
    </React.Fragment>
  )
}

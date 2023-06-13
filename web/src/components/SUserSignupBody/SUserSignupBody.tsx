/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import * as Yup from 'yup'
import {
  addUserLog,
  checkIfUserAlreadyExists,
  createEnsarUser,
  createUser,
  createUserToWorkReport,
  updateUserRole,
} from 'src/context/dbQueryFirebase'
import { useAuth } from 'src/context/firebase-auth-context'
import { useForm } from 'react-hook-form'
import { Form, Formik } from 'formik'
import { TextField } from 'src/util/formFields/TextField'
import { CustomSelect } from 'src/util/formFields/selectBoxField'
import axios from 'axios'
import Loader from '../Loader/Loader'
import { DEPARTMENT_LIST, ROLES_LIST, QUALIFICATION_LIST, EXPERIENCE_LIST } from 'src/constants/userRoles'
import { PhoneNoField } from 'src/util/formFields/phNoField'

const SUserSignupBody = ({ title, dialogOpen, empData }) => {
  const { register, user } = useAuth()
  const { orgId, orgName } = user

  const formMethods = useForm()
  const [formMessage, setFormMessage] = useState({
    color: 'green',
    message: '',
  })
  const [roles, setroles] = useState([])
  const [editMode, seteditMode] = useState(false)
  const [deptIs, setdeptIs] = useState('')
  const [isdeptEmpty, setisdeptEmpty] = useState(false)
  const [loading, setLoading] = useState(false)
  const {
    empId,
    offPh,
    perPh,
    name,
    email,
    department,
    uid,
    roles: rolees,
  } = empData
  console.log('empData is ', empData)

  useEffect(() => {
    if (name) {
      seteditMode(true)
    }
  }, [])
  useEffect(() => {
    const { department, roles } = empData
    const x = {}

    if (department) {
      x['value'] = department[0]
      changed(x)
    }
  }, [empData])


  const changed = async (data) => {
    console.log('i was changed', data, data)
    setdeptIs(data.value)
    if (data.value != '') {
      setisdeptEmpty(false)
    }
    const filRoles = ROLES_LIST.filter((item) => item.dept === data.value)
    setroles(filRoles)
  }
  const onSubmit = async (data) => {
    console.log('check fo this ', data)
    setLoading(true)
    const { empId, email, myRole, deptVal, name, offPh, perPh } = data

    if (editMode) {
      updateUserRole(
        empId,
        orgName,
        orgId,
        uid,
        deptVal,
        myRole,
        email,
        offPh,
        perPh,
        'nitheshreddy.email@gmail.com'
      )
      setLoading(false)
      addUserLog(orgId, {
        s: 's',
        type: 'updateRole',
        subtype: 'updateRole',
        txt: `${email} as ${myRole}`,
        by: 'nitheshreddy.email@gmail.com',
      })

      setFormMessage({
        color: 'green',
        message: `Role is updated Successfully`,
      })
    } else {
      const data = {
        empId: empId,
        email: email,
        name: name,
        password: 'ensarspace@123',
        dept: deptVal,
        role: myRole,
        orgName: orgName,
        orgId: orgId,
        userStatus: 'active',
        orgStatus: 'active',
        offPh: offPh,
        perPh: perPh,
      }

      const config = {
        method: 'post',
        url: 'https://ensarspace-usersignup.azurewebsites.net/api/usersignup',
        headers: {
          'Content-Type': 'text/plain',
        },
        data,
      }
      axios(config)
        .then(async function (response) {
          if (response.data) {
            setLoading(false)
            const { success, msg, payload, uId } = await response['data']
            console.log('user payload is ', response)

            if (success) {
              const docDetailsIs = await checkIfUserAlreadyExists(
                'users',
                email
              )

              let addedUserDocR = await createEnsarUser({
                empId: empId,
                uid: uId,
                orgName: orgName,
                orgId: orgId,
                department: deptVal,
                roles: myRole,
                name: name,
                email: email,
                offPh: offPh,
                perPh: perPh
              })

              console.log('docDetailsIs', docDetailsIs, docDetailsIs)
              // updateUserRole(
              //   empId,
              //   orgName,
              //   orgId,
              //   docDetailsIs[0]['uid'],
              //   deptVal,
              //   myRole,
              //   email,
              //   offPh,
              //   perPh,
              //   'nitheshreddy.email@gmail.com'
              // )
              const x = {
                name,
                empId,
                email,
                uid: docDetailsIs[0]['uid'],
                userStatus: 'active',
                orgStatus: 'active',
              }
              createUserToWorkReport(`${orgId}_W_Reports`, x)
              createUserToWorkReport(`${orgId}_W_AReports`, x)
              addUserLog(orgId, {
                s: 's',
                type: 'addUser',
                subtype: 'addUser',
                txt: `${email} as ${myRole}`,
                by: 'nitheshreddy.email@gmail.com',
              })
            }
            await formMethods.reset()
            setFormMessage({
              color: success ? 'green' : 'red',
              message: success
                ? `Email ${email} is added with password redefine@123`
                : `${email} already in Use`,
            })
          }
        })
        .catch(function (error) {
          console.log('error is ', error)
          setLoading(false)
          setFormMessage({
            color: 'red',
            message: error?.msg || 'Error in creation',
          })
        })
    }
  }
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validate = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    deptVal: Yup.string()
      .required('Req Dept'),
    myRole: Yup.string()
      .required('Required Role'),
  })
  return (
    <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
      <div className="px-4 sm:px-6">
        <Dialog.Title className=" font-semibold text-lg mr-auto ml-3">
          {editMode ? 'Edit Employee Details' : 'Create Employee'}
        </Dialog.Title>
      </div>
      {formMessage.message && (
        <div className=" w-full bg-[#E9F6ED] ml-9 mr-9 ">
          <p
            className={`text-lg text-${formMessage.color}-500 text-left px-6 my-3`}
          >
            {formMessage.message}
          </p>
        </div>
      )}

      <div className="grid gap-8 grid-cols-1 mx-10 flex flex-col">
        <Formik
          initialValues={{
            name: name,
            email: email,
            deptVal: department != undefined ? department[0] : '',
            myRole: rolees != undefined ? rolees[0] : '',
            empId: empId,
            perPh: perPh,
            offPh: offPh,
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            console.log('ami submitted', values)
            onSubmit(values)
          }}
        >
          {(formik) => (
            <div className="mt-16">
              <Form>
                <TextField
                  label="Employee Id*"
                  name="empId"
                  type="text"
                  disabled={editMode}
                />
                <TextField
                  label="User Name*"
                  name="name"
                  type="text"
                  disabled={editMode}
                />
                <TextField
                  label="Email Id*"
                  name="email"
                  type="email"
                  disabled={editMode}
                />

                <PhoneNoField
                  name="offPh"
                  label="Official Phone Number*"
                  className="input"
                  value={formik.values.offPh}
                  onChange={(value) => {
                    formik.setFieldValue('offPh', value.value)
                  }}
                />
                <PhoneNoField
                  name="perPh"
                  label="Personal Phone Number*"
                  className="input"
                  value={formik.values.perPh}
                  onChange={(value) => {
                    formik.setFieldValue('perPh', value.value)
                  }}
                />

                <CustomSelect
                  name="deptName"
                  label="Department"
                  className="input mt-3"
                  onChange={(value) => {
                    changed(value)
                    formik.setFieldValue('deptVal', value.value)
                    formik.setFieldValue('myRole', '')
                  }}
                  value={formik.values.deptVal}
                  options={DEPARTMENT_LIST}
                />
                {formik.errors.deptVal ? (
                  <div className="error-message text-red-700 text-xs p-2">
                    {formik.errors.deptVal}
                  </div>
                ) : null}
                <CustomSelect
                  name="roleName"
                  label="Role"
                  className="input mt-3"
                  onChange={(value) =>
                    formik.setFieldValue('myRole', value.value)
                  }
                  value={formik.values.myRole || ''}
                  options={roles}
                />
                {formik.errors.myRole ? (
                  <div className="error-message text-red-700 text-xs p-2">
                    {formik.errors.myRole}
                    {formik.values.myRole}
                  </div>
                ) : null}


                <CustomSelect
                  name="qualName"
                  label="Qualification"
                  className="input mt-3"
                  onChange={(value) => {

                    formik.setFieldValue('qualVal', value.value)

                  }}
                  value={formik.values.qualVal}
                  options={QUALIFICATION_LIST}
                />
                {formik.errors.qualVal ? (
                  <div className="error-message text-red-700 text-xs p-2">
                    {formik.errors.qualVal}
                  </div>
                ) : null}

                <CustomSelect
                  name="expName"
                  label="Experience"
                  className="input mt-3"
                  onChange={(value) => {
                    //  changed(value)
                    formik.setFieldValue('expVal', value.value)
                    //  formik.setFieldValue('myRole', '')
                  }}
                  value={formik.values.expVal}
                  options={EXPERIENCE_LIST}
                />
                {formik.errors.expVal ? (
                  <div className="error-message text-red-700 text-xs p-2">
                    {formik.errors.expVal}
                  </div>
                ) : null}

                {/*  */}

                <div className="md:flex md:flex-row md:space-x-4 w-full text-xs mt-5">
                  <div className="w-full flex flex-col mb-3">
                    <TextField
                      label="Aadhar No"
                      name="aadharNo"
                      type="text"
                      disabled={editMode}
                    />
                  </div>
                  <div className="w-full flex flex-col mb-3">
                    <TextField
                      label="Date of Birth"
                      name="dob"
                      type="text"
                      disabled={editMode}
                    />
                  </div>
                </div>

                <p className="text-xs text-red-500 text-right my-3">
                  Required fields are marked with an asterisk{' '}
                  <abbr title="Required field">*</abbr>
                </p>
                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <button
                    className="mb-4 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-sm hover:shadow-lg hover:bg-gray-100"
                    type="reset"
                  >
                    Reset
                  </button>
                  <button
                    className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white  rounded-sm hover:shadow-lg hover:bg-green-500"
                    type="submit"
                    disabled={loading}
                  >
                    {loading && <Loader />}
                    {editMode ? 'Edit Employee' : 'Add Employee'}
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default SUserSignupBody

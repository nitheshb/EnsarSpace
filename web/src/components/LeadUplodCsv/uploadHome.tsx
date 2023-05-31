import { Dialog } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardContent, Grid } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { array, object, string } from 'yup'
import { MultipleFileUploadField } from './MultipleFileUploadField'
import { parse } from 'papaparse'
import csv from 'csvtojson'

export default function LeadsDropHomes({
  title,
  dialogOpen,
  pId,
  myPhase,
  myBlock,
}) {
  const [existingCols, setexistingCols] = useState([])

  const parseExcel = async (values) => {
    if (values.files) {
      let x
      try {
        x = values.files[0].file
      } catch (error) {
        console.log('error ', error)
      }

      parse(x, {
        header: true,

        complete: async function (input) {

          await setexistingCols((existing) => [...existing, ...input.data])


          console.log('Finished:', existingCols)
        },
      })
    } else {
      ;('hello')
    }
  }
  return (
    <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
      <div className="px-4 sm:px-6  z-10">
        <Dialog.Title className=" font-semibold text-xl mr-auto ml-3 text-[#053219]">
          {title}
        </Dialog.Title>
      </div>
      <div className="grid  gap-8 grid-cols-1">
        {title === 'import Unit' && (
          <div className="flex flex-col  my-10 rounded-lg  px-4 m-4 mt-12">
            Block:{' '}
          </div>
        )}
        <div className="flex flex-col  my-10 rounded-lg  px-4 m-4 mt-12">
          <Formik
            initialValues={{ files: null }}

            onSubmit={async (values) => {
              console.log('ehcek1', {
                fileName: values.files[0].file.name,
                type: values.files[0].type,
                size: `${values.files[0].size} bytes`,
              })

              if (title === 'Plan Diagram') {
              } else {
                try {
                  const jsonArray = await csv().fromFile(
                    values.files[0].file.path
                  )

                  await console.log('jsonArray is ', jsonArray)
                } catch (error) {
                  console.log('error at jsonArray', error)
                }

                parse(values.files[0].file, {
                  header: true,

                  complete: async function (input) {
                    const records = input.data
                    await setexistingCols((existing) => [
                      ...existing,
                      ...input.data,
                    ])

                    console.log('Finished:', existingCols)
                  },
                })
              }


              return new Promise((res) => setTimeout(res, 2000))
            }}
          >
            {({ values, errors, isValid, isSubmitting, validateOnChange }) => (

              <Form>
                <Grid container spacing={2} direction="column">
                  <MultipleFileUploadField
                    name="files"
                    title={title}
                    pId={pId}
                    myPhase={myPhase}
                    myBlock={myBlock}                  />

                </Grid>
                
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

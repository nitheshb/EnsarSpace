import React, { useState } from 'react'

import { Dialog } from '@headlessui/react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import {
  options,
  options1,
  options2,
  options3,
  options4,
  options5,
} from 'src/constants/userRoles'
import { storeAssetDetails } from 'src/context/dbQueryFirebase'
import { useAuth } from 'src/context/firebase-auth-context'
import { CustomSelect } from 'src/util/formFields/selectBoxField'

import Loader from '../Loader/Loader'

const validate = Yup.object().shape({
  Product: Yup.string().required('Product is required'),
  Processor: Yup.string().required('Processor is required'),
  Ram: Yup.string().required('Ram is required'),
  SerialNumber: Yup.string().required('SerialNumber is required'),
  AllocationStatus: Yup.string().required('AllocationStatus is required'),
  WorkingStatus: Yup.string().required('Working Status is required'),
})

// const options = [
//   { value: 'Laptop', label: 'Laptop' },
//   { value: 'Phone windows', label: 'Phone windows' },
//   { value: 'Phone android', label: 'Phone android' },
//   { value: 'Sim', label: 'Sim' },
// ]

// const options1 = [
//   { value: 'amoled', label: 'Amoled' },
//   { value: 'lcd', label: 'Lcd' },
//   { value: 'hd', label: 'Hd' },
// ]

// const options2 = [
//   { value: 'acclerometer', label: 'Acclerometer' },
//   { value: 'gyroscope', label: 'Gyroscope' },
//   { value: 'proximity', label: 'Proximity' },
//   { value: 'fingerprint', label: 'Fingerprint' },
// ]

// const options3 = [
//   { value: 'yes', label: 'Yes' },
//   { value: 'no', label: 'No' },
// ]

// const options4 = [
//   { value: 'gorilla', label: 'Gorilla' },
//   { value: 'diamondglass', label: 'Diamond glass' },
//   { value: 'temperglass', label: 'Temperglass' },
// ]

// const options5 = [
//   { value: 'microusb ', label: 'Micro USB' },
//   { value: 'type-c', label: 'Type-c' },
//   { value: 'usb type-a', label: 'Usb type-a' },
// ]

// const options6 = [
//   { value: 'virtual keypad', label: 'Virtual keypad' },
//   { value: 'gboard', label: 'Gboard' },
//   { value: 'swiftkey', label: 'Swiftkwy' },
// ]

const OnBoardAssertBody = () => {
  const [formMessage, setFormMessage] = useState({
    color: 'green',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const { user } = useAuth()
  const handleSubmit = async (values) => {
    console.log('Submitted', values)
    try {
      setLoading(true)

      await storeAssetDetails(user.orgId, values)

      setLoading(false)
    } catch (error) {
      console.log(error)
    }

    console.log('Form Values:', values)
  }

  return (
    <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
      <div className="px-4 sm:px-6">
        <Dialog.Title className="font-semibold text-lg mr-auto ml-3">
          Add Assets
        </Dialog.Title>
      </div>
      {formMessage.message && (
        <div className="w-full bg-[#E9F6ED] ml-2 mt-3 mb-5 p-3 text-green-700">
          {formMessage.message}
        </div>
      )}
      <div className="px-4 sm:px-6 mt-4">
        <div className="mt-1">
          <Formik
            initialValues={{
              Product: '',
              Processor: '',
              Ram: '',
              SerialNumber: '',
              AllocationStatus: '',
              WorkingStaus: '',
            }}
            validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form className="space-y-6">

                   <div>
                  <label
                    htmlFor="SerialNumber"
                    className="block text-sm font-medium bold-black-700"
                  >
                    Serial Number
                  </label>
                  <Field
                    as={CustomSelect}
                    name="SerialNumber"
                    options={options3}
                    placeholder="Select SerialNumber"
                    className="mt-1"
                    onChange={(option) =>
                      setFieldValue('SerialNumber', option.value)
                    }
                  />
                  <ErrorMessage
                    name="SerialNumber"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>


                <div>
                  <label
                    htmlFor="Product"
                    className="block text-sm font-medium bold-black-700"
                  >
                    Product
                  </label>
                  <Field
                    as={CustomSelect}
                    name="Product"
                    options={options}
                    placeholder="Select a product"
                    className="mt-1"
                    onChange={(option) =>
                      setFieldValue('Product', option.value)
                    }
                  />
                  <ErrorMessage
                    name="Product"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Processor"
                    className="block text-sm font-medium bold-black-700"
                  >
                    Processor
                  </label>
                  <Field
                    as={CustomSelect}
                    name="Processor"
                    options={options1}
                    placeholder="Select touchscreen option"
                    className="mt-1"
                    onChange={(option) =>
                      setFieldValue('Processor', option.value)
                    }
                  />
                  <ErrorMessage
                    name="Processor"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Ram"
                    className="block text-sm font-medium bold-black-700"
                  >
                    Ram
                  </label>
                  <Field
                    as={CustomSelect}
                    name="Ram"
                    options={options2}
                    placeholder="Select Ram"
                    className="mt-1"
                    onChange={(option) => setFieldValue('Ram', option.value)}
                  />
                  <ErrorMessage
                    name="Ram"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>


                <div>
                  <label
                    htmlFor="AllocationStatus"
                    className="block text-sm font-medium bold-black-700"
                  >
                    Allocation Status
                  </label>
                  <Field
                    as={CustomSelect}
                    name="AllocationStatus"
                    options={options4}
                    placeholder="Select Allocation Status"
                    className="mt-1"
                    onChange={(option) =>
                      setFieldValue('AllocationStatus', option.value)
                    }
                  />
                  <ErrorMessage
                    name="AllocationStatus"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="WorkingStatus"
                    className="block text-sm font-medium bold-black-700"
                  >
                    Working Status
                  </label>
                  <Field
                    as={CustomSelect}
                    name="WorkingStatus"
                    options={options5}
                    placeholder="Select Working Status"
                    className="mt-1"
                    onChange={(option) =>
                      setFieldValue('WorkingStatus', option.value)
                    }
                  />
                  <ErrorMessage
                    name="WorkingStatus"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    {loading ? <Loader texColor={undefined} size={undefined} /> : 'Submit'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default OnBoardAssertBody

import React, { useState } from 'react'

import { Dialog } from '@headlessui/react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { CustomSelect } from 'src/util/formFields/selectBoxField'

import Loader from '../Loader/Loader'

const validate = Yup.object().shape({
  Name: Yup.string().required('Name is required'),
  ProductName: Yup.string().required('Product name is required'),
  Date: Yup.string().required('Date is required'),
  Time: Yup.string().required('Time is required'),
  Version: Yup.string().required('Version is required'),
})

const ProductName = [
  { label: 'Select the product', value: '' },
  { value: 'Laptop', label: 'Laptop' },
  { value: 'phone android', label: 'Phone android' },
  { value: 'Phone windows', label: 'phone windows' },
  { value: 'Sim', label: 'Sim Card' },
]

const Version = [
  { label: 'Select the Version', value: '' },
  { value: 'updated 11.0', label: 'updated 11.0' },
  { value: 'WW 12.0', label: 'WW 12.0' },
  { value: 'Touch 15', label: 'Touch 15' },
  { value: ' andriod 1 Above', label: '1_10' },
  { value: 'android 10 Above', label: '_10' },
]

const OnBoardAssertBody = () => {
  const [formMessage, setFormMessage] = useState({
    color: 'green',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = (values) => {
    console.log('Submitted', values)
    // Handle form submission

    // Example: Simulating form submission delay
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setFormMessage({
        color: 'green',
        message: 'Product added successfully!',
      })
    }, 2000)

    // Display form values in the console
    console.log('Form Values:', values)
  }

  return (
    <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
      <div className="px-4 sm:px-6">
        <Dialog.Title className="font-semibold text-lg mr-auto ml-3">
          Add Products
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
              Name: '',
              ProductName: '',
              Date: '',
              Time: '',
              Version: '',
            }}
            validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium bold-black-700"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    name="Name"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                  <ErrorMessage
                    name="Name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="ProductName"
                    className="block text-sm font-medium bold-black-700"
                  >
                    Product Name
                  </label>
                  <Field
                    as={CustomSelect}
                    name="ProductName"
                    options={ProductName}
                    placeholder="Select a product"
                    className="mt-1"
                    onChange={(option) =>
                      setFieldValue('ProductName', option.value)
                    }
                  />
                  <ErrorMessage
                    name="ProductName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Date"
                    className="block text-sm font-medium bold-black-700"
                  >
                    Date
                  </label>
                  <Field
                    type="Date"
                    name="Date"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                  <ErrorMessage
                    name="Date"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Time"
                    className="block text-sm font-medium bold-black-700"
                  >
                    Time
                  </label>
                  <Field
                    type="text"
                    name="Time"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                  <ErrorMessage
                    name="Time"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Version"
                    className="block text-sm font-medium bold-black-700"
                  >
                    Version
                  </label>
                  <Field
                    as={CustomSelect}
                    name="Version"
                    options={Version}
                    placeholder="Select a version"
                    className="mt-1"
                    onChange={(option) =>
                      setFieldValue('Version', option.value)
                    }
                  />
                  <ErrorMessage
                    name="Version"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    {loading ? <Loader /> : 'Submit'}
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

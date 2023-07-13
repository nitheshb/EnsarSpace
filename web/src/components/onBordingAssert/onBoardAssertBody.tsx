import React, { useEffect, useState } from 'react'

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
import {
  steamUsersList,
  storeAssetDetails,
  getAssetdetails,
} from 'src/context/dbQueryFirebase'
import { useAuth } from 'src/context/firebase-auth-context'
import { CustomSelect } from 'src/util/formFields/selectBoxField'

import Loader from '../Loader/Loader'

const validate = Yup.object().shape({
  Product: Yup.string().required('Product is required'),
  Processor: Yup.string().required('Processor is required'),
  Ram: Yup.string().required('Ram is required'),
  ProductId: Yup.string().required('Product id is required'),
  AllocationStatus: Yup.string().required('AllocationStatus is required'),
  WorkingStatus: Yup.string().required('Working Status is required'),
})

const OnBoardAssertBody = () => {
  const [formMessage, setFormMessage] = useState({
    color: 'green',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [leadsFetchedData, setLeadsFetchedData] = useState([])
  const [selectedProduct, setSelectedProduct] = useState('')
  const [processorOptions, setProcessorOptions] = useState(options1)
  const [companyOptions, setCompanyOptions] = useState([])
  // const [selectedEmployee, setSelectedEmployee] = useState(null);

  const { user } = useAuth()
  const handleSubmit = async (values) => {
    try {
      setLoading(true)

      // Check if the ID already exists in the database
      const idExists = await checkIdExists(values.ProductId)

      if (idExists) {
        // Display a form message indicating that the ID already exists
        setFormMessage({
          color: 'red',
          message: 'ID already exists',
        })
      } else {
        // Store the form details in the database
        await storeAssetDetails(user.orgId, user.uid, values)

        // Display a success message or perform any other necessary actions
        setFormMessage({
          color: 'green',
          message: 'Form submitted successfully',
        })
      }

      setLoading(false)
    } catch (error) {
      console.log(error)
    }

    console.log('Form Values:', values)
  }

  const checkIdExists = async (id) => {
    try {
      const assetDetails = await getAssetdetails(user.orgId)

      // Check if the provided ID exists in the asset details
      return assetDetails.some((asset) => asset.ProductId === id)
    } catch (error) {
      console.log('Error checking ID existence:', error)
      return false // Return false in case of any error or exception
    }
  }

  useEffect(() => {
    getLeadsDataFun()
  }, [])

  useEffect(() => {
    if (selectedProduct === 'Laptop') {
      setProcessorOptions([
        { label: 'Select the Processor', value: '' },
        { label: 'Ryzen', value: 'Ryzen' },
        { label: 'Intel', value: 'Intel' },
      ])

      setCompanyOptions([
        { label: 'Select the Company', value: '' },
        { label: 'HP', value: 'hp' },
        { label: 'Dell', value: 'dell' },
      ])
    } else if (selectedProduct === 'Phone android') {
      setProcessorOptions([
        { label: 'Select the Processor', value: '' },
        { label: 'Snapdragon', value: 'Snapdragon' },
        { label: 'Mediatek', value: 'Mediatek' },
      ])

      setCompanyOptions([
        { label: 'Select the Product Company', value: '' },
        { label: 'Realme', value: 'realme' },
        { label: 'Redmi', value: 'redmi' },
      ])
    } else if (selectedProduct === 'Sim') {
      setProcessorOptions([
        { label: 'Select the Processor', value: '' },
        { label: 'jio', value: 'jio' },
        { label: 'VI', value: 'VI' },
      ])

      setCompanyOptions([
        { label: 'Select the Processor', value: '' },
        { label: 'Jio', value: 'jio' },
        { label: 'VI', value: 'vi' },
      ])
    } else {
      setProcessorOptions(options1)
      setCompanyOptions([])
    }
  }, [selectedProduct])

  const getLeadsDataFun = async () => {
    const unsubscribe = steamUsersList(
      user.orgId,
      (querySnapshot) => {
        const usersListA = querySnapshot.docs.map((docSnapshot) =>
          docSnapshot.data()
        )
        setLeadsFetchedData(usersListA)
      },
      () => setLeadsFetchedData([])
    )
    return unsubscribe
  }

  return (
    <div className="h-full flex flex-col py-6 bg-gray-100 shadow-xl overflow-y-scroll">
      <div className="px-4 sm:px-6">
        <Dialog.Title className="font-semibold text-lg mr-auto ml-3 text-green-500">
          Add Assets
        </Dialog.Title>
      </div>
      {formMessage.message && (
        <div
          className={`w-full bg-${formMessage.color}-200 ml-2 mt-3 mb-5 p-3 text-green-700`}
        >
          {formMessage.message}
        </div>
      )}

      <div className="px-4 sm:px-6 mt-4">
        <div className="mt-1">
          <Formik
            initialValues={{
              Product: '',
              ProductCompany: '',
              Processor: '',
              Ram: '',
              ProductId: '',
              AllocationStatus: '',
              WorkingStaus: '',
              AssignTo: '',
            }}
            validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="ProductId"
                    className="block text-sm font-medium bold-black-700"
                  >
                    Product Id
                  </label>
                  <Field
                    as={CustomSelect}
                    name="ProductId"
                    options={options3}
                    placeholder="Select ProductId"
                    className="mt-1"
                    onChange={(option) =>
                      setFieldValue('ProductId', option.value)
                    }
                  />
                  <ErrorMessage
                    name="ProductId"
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
                    onChange={(option) => {
                      setFieldValue('Product', option.value)
                      setSelectedProduct(option.value)
                      setFieldValue('ProductCompany', '') // Reset Product Company when Product changes
                    }}
                  />
                  <ErrorMessage
                    name="Product"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="ProductCompany"
                    className="block text-sm font-medium bold-black-700"
                  >
                    Product Company
                  </label>
                  <Field
                    as={CustomSelect}
                    name="ProductCompany"
                    options={companyOptions}
                    placeholder="Select the product company"
                    className="mt-1"
                    disabled={!selectedProduct} // Disable the field when no product is selected
                    onChange={(option) =>
                      setFieldValue('ProductCompany', option.value)
                    }
                  />
                  <ErrorMessage
                    name="ProductCompany"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {selectedProduct !== 'Sim' && (
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
                      options={processorOptions}
                      placeholder="Select processor option"
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
                )}
                {selectedProduct !== 'Sim' && (
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
                )}
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

                <div>
                  <div>
                    <label
                      htmlFor="AssignTo"
                      className="block text-sm font-medium bold-black-700"
                    >
                      AssignTo :
                    </label>
                    <Field
                      as="select"
                      name="AssignTo"
                      className="ml-auto bg-white border border-gray-700 rounded-md py-2 px-4 text-sm"
                    >
                      <option value="">Employees</option>
                      {leadsFetchedData.map((employee) => (
                        <option key={employee.name} value={employee.name}>
                          {employee.name}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>

                {/* <div>
                  <label
                    htmlFor="AssignTo"
                    className="block text-sm font-medium bold-black-700"
                  >
                    AssignTo :
                  </label>
                  <Field
                    as="select"
                    name="AssignTo"
                    className="ml-auto bg-white border border-gray-700 rounded-md py-2 px-4 text-sm"
                    onChange={(event) => {
                      setFieldValue('AssignTo', event.target.value)
                    }}
                  >
                    <option value="">Employees</option>
                    {leadsFetchedData.map((employee) => (
                      <option key={employee.name} value={employee.email}>
                        {employee.name} ({employee.email})
                      </option>
                    ))}
                  </Field>
                </div> */}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    {loading ? (
                      <Loader texColor={undefined} size={undefined} />
                    ) : (
                      'Submit'
                    )}
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
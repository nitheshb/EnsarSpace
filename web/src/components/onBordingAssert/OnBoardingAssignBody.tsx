import React, { useEffect, useState } from 'react'

import { Dialog } from '@headlessui/react'

import { Form, Formik, Field, ErrorMessage } from 'formik'

import * as Yup from 'yup'

import {
  steamUsersList,
  storeAssignDetails,
  updateAssetDetails,
} from 'src/context/dbQueryFirebase'

import { useAuth } from 'src/context/firebase-auth-context'

import { CustomSelect } from 'src/util/formFields/selectBoxField'

import Loader from '../Loader/Loader'

import OnBoardingAssign from './OnBoardingAssign'

import {
  options,
  options1,
  options2,
  options3,
  options4,
  options5,
} from 'src/constants/userRoles'

const validate = Yup.object().shape({
  Name: Yup.string().required('Name is required'),

  ProductName: Yup.string().required('Product name is required'),

  Date: Yup.string().required('Date is required'),

  Time: Yup.string().required('Time is required'),

  Version: Yup.string().required('Version is required'),

  Model: Yup.string().required('Model is required'),
})

const OnBoardingAssignBody = ({ assetPayload }) => {
  const [formMessage, setFormMessage] = useState({
    color: 'green',

    message: '',
  })

  const [loading, setLoading] = useState(false)

  const [leadsFetchedData, setLeadsFetchedData] = useState([])

  const [showEditAssetform, setShowEditAssetForm] = useState(false)

  const { user } = useAuth()

  useEffect(() => {
    getLeadsDataFun()
  }, [])

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

  const handleSubmit = async (values) => {
    console.log('Submitted', values)

    try {
      setLoading(true)

      await storeAssignDetails(user.orgId, user.uid)

      setLoading(false)
    } catch (error) {
      console.log(error)
    }

    console.log('Form Values:', values)
  }

  const handleUpdate = async (values) => {
    console.log('Updated Form Values:', values)

    try {
      setLoading(true)

      setShowEditAssetForm(!showEditAssetform)

      await updateAssetDetails(user.orgId, values)

      setLoading(false)

      console.log('Updated Form Values:', assetPayload)
    } catch (error) {
      console.log(error)
    }
  }

  const onBoardAssertBody = () => {
    setShowEditAssetForm(!showEditAssetform)
  }

  return (
    <div className="h-full flex flex-col py-6 bg-gray-100 shadow-xl overflow-y-scroll">
      <div className="px-4 sm:px-6">
        <Dialog.Title className="font-semibold text-lg mr-auto ml-3 text-green-500">
          Asset details
        </Dialog.Title>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold"></h1>

        <div className="flex space-x-2">
          <button
            className="flex items-center justify-center h-10 px-4 border font-medium focus:outline-none bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
            onClick={onBoardAssertBody}
          >
            {showEditAssetform ? 'Cancel' : 'Edit Asset'}
          </button>
        </div>
      </div>

      {formMessage.message && (
        <div className="w-full bg-[#E9F6ED] ml-2 mt-3 mb-5 p-3 text-green-700">
          {formMessage.message}
        </div>
      )}

      <div className="px-4 sm:px-6 mt-4">
        <div className="mt-1">
          {showEditAssetform ? (
            <Formik
              initialValues={{
                uid: assetPayload?.uid || 0,

                requestId: assetPayload?.requestId || '',

                ProductId: assetPayload?.ProductId || '',

                Processor: assetPayload?.Processor || '',

                Product: assetPayload?.Product || '',

                Ram: assetPayload?.Ram || '',

                WorkingStatus: assetPayload?.WorkingStatus || '',

                AllocationStatus: assetPayload?.AllocationStatus || '',

                AssignTo: assetPayload?.AssignTo || '',
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
                      ProductId
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

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      // onClick={handleUpdate}

                      onClick={() => handleUpdate(values)}
                    >
                      {loading ? (
                        <Loader texColor={undefined} size={undefined} />
                      ) : (
                        'Update'
                      )}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          ) : (
            <Formik
              initialValues={{
                uid: assetPayload?.uid || 0,

                ProductId: assetPayload?.ProductId || '',

                Processor: assetPayload?.Processor || '',

                Product: assetPayload?.Product || '',

                Ram: assetPayload?.Ram || '',

                WorkingStatus: assetPayload?.WorkingStatus || '',

                AllocationStatus: assetPayload?.AllocationStatus || '',

                AssignTo: assetPayload?.AssignTo || '',
              }}
              validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {({ values, setFieldValue }) => (
                <Form className="space-y-6">
                  {/* <div className=" m-1">
                    <div className=" border-[#E5EAF2] rounded-xl border w-100 h-80 bg-white px-8 py-5"> */}
                           <div className="  flex item-center justify-center m-1 bg-gray-200">
                  <div className=" flex item-center justify-center  rounded-xl w-100 h-80 px-8 py-5 ">
                      <section>
                        {assetPayload?.Product === 'Laptop' && (
                          <div className="flex item-center justify-between">
                            <svg
                              width="80px"
                              height="140px"
                              viewBox="0 0 43 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M38.5153 9.55307C38.5153 8.23331 37.9568 6.9676 36.9626 6.03439C35.9683 5.10118 34.6199 4.5769 33.2139 4.5769H9.35756C7.95154 4.5769 6.60311 5.10118 5.6089 6.03439C4.61469 6.9676 4.05615 8.23331 4.05615 9.55307V21.9935H38.5153V9.55307Z"
                                fill="#EEE5FF"
                              ></path>

                              <path
                                d="M4.05615 21.9937V24.4817C4.05615 25.8015 4.61469 27.0672 5.6089 28.0004C6.60311 28.9336 7.95154 29.4579 9.35756 29.4579H33.2139C34.6199 29.4579 35.9683 28.9336 36.9626 28.0004C37.9568 27.0672 38.5153 25.8015 38.5153 24.4817V21.9937H4.05615ZM17.3097 36.9222L18.635 29.4579H23.9497L25.2618 36.9222H17.3097Z"
                                fill="#D1C3FC"
                              ></path>

                              <path
                                d="M33.214 30.7019H9.35772C7.60019 30.7019 5.91465 30.0466 4.67189 28.8801C3.42913 27.7136 2.73096 26.1314 2.73096 24.4817V9.55322C2.73096 7.90352 3.42913 6.32138 4.67189 5.15487C5.91465 3.98835 7.60019 3.33301 9.35772 3.33301H33.214C34.9716 3.33301 36.6571 3.98835 37.8999 5.15487C39.1426 6.32138 39.8408 7.90352 39.8408 9.55322V24.4817C39.8408 25.2986 39.6694 26.1074 39.3364 26.8621C39.0033 27.6168 38.5152 28.3025 37.8999 28.8801C37.2845 29.4577 36.554 29.9158 35.75 30.2284C34.946 30.541 34.0843 30.7019 33.214 30.7019ZM9.35772 5.82109C8.3032 5.82109 7.29188 6.2143 6.54622 6.91421C5.80057 7.61412 5.38166 8.5634 5.38166 9.55322V24.4817C5.38166 25.4715 5.80057 26.4208 6.54622 27.1207C7.29188 27.8206 8.3032 28.2138 9.35772 28.2138H33.214C34.2686 28.2138 35.2799 27.8206 36.0255 27.1207C36.7712 26.4208 37.1901 25.4715 37.1901 24.4817V9.55322C37.1901 8.5634 36.7712 7.61412 36.0255 6.91421C35.2799 6.2143 34.2686 5.82109 33.214 5.82109H9.35772Z"
                                fill="#2B3145"
                              ></path>

                              <path
                                d="M33.214 23.2376H4.05631C3.7048 23.2376 3.3677 23.1065 3.11914 22.8732C2.87059 22.6399 2.73096 22.3235 2.73096 21.9936C2.73096 21.6636 2.87059 21.3472 3.11914 21.1139C3.3677 20.8806 3.7048 20.7495 4.05631 20.7495H33.214C33.5656 20.7495 33.9027 20.8806 34.1512 21.1139C34.3998 21.3472 34.5394 21.6636 34.5394 21.9936C34.5394 22.3235 34.3998 22.6399 34.1512 22.8732C33.9027 23.1065 33.5656 23.2376 33.214 23.2376ZM27.9126 38.1661H14.6591C14.3076 38.1661 13.9705 38.035 13.722 37.8017C13.4734 37.5684 13.3338 37.252 13.3338 36.9221C13.3338 36.5921 13.4734 36.2757 13.722 36.0424C13.9705 35.8091 14.3076 35.678 14.6591 35.678H27.9126C28.2641 35.678 28.6013 35.8091 28.8498 36.0424C29.0984 36.2757 29.238 36.5921 29.238 36.9221C29.238 37.252 29.0984 37.5684 28.8498 37.8017C28.6013 38.035 28.2641 38.1661 27.9126 38.1661Z"
                                fill="#2B3145"
                              ></path>

                              <path
                                d="M17.3096 38.1662H17.0976C16.9225 38.142 16.7544 38.0852 16.6032 37.9992C16.4519 37.9131 16.3205 37.7995 16.2167 37.665C16.113 37.5305 16.039 37.3778 15.999 37.2161C15.9591 37.0543 15.9541 36.8867 15.9843 36.7231L17.3096 29.2588C17.3375 29.0954 17.3993 28.9388 17.4917 28.7979C17.584 28.657 17.705 28.5345 17.8478 28.4374C17.9905 28.3404 18.1522 28.2707 18.3237 28.2323C18.4952 28.194 18.673 28.1877 18.847 28.2138C19.0211 28.24 19.1879 28.298 19.3381 28.3847C19.4882 28.4714 19.6187 28.5849 19.7221 28.7189C19.8255 28.8529 19.8997 29.0047 19.9406 29.1657C19.9815 29.3266 19.9882 29.4935 19.9603 29.6569L18.635 37.1212C18.5842 37.4155 18.4224 37.683 18.1791 37.8748C17.9359 38.0666 17.6273 38.17 17.3096 38.1662ZM25.2617 38.1662C24.9441 38.17 24.6355 38.0666 24.3922 37.8748C24.149 37.683 23.9872 37.4155 23.9364 37.1212L22.611 29.6569C22.5832 29.4935 22.5899 29.3266 22.6308 29.1657C22.6716 29.0047 22.7459 28.8529 22.8493 28.7189C22.9527 28.5849 23.0831 28.4714 23.2333 28.3847C23.3834 28.298 23.5503 28.24 23.7243 28.2138C23.8984 28.1877 24.0762 28.194 24.2477 28.2323C24.4191 28.2707 24.5808 28.3404 24.7236 28.4374C24.8664 28.5345 24.9874 28.657 25.0797 28.7979C25.172 28.9388 25.2339 29.0954 25.2617 29.2588L26.5871 36.7231C26.6173 36.8867 26.6123 37.0543 26.5723 37.2161C26.5324 37.3778 26.4584 37.5305 26.3546 37.665C26.2509 37.7995 26.1195 37.9131 25.9682 37.9992C25.8169 38.0852 25.6488 38.142 25.4738 38.1662H25.2617Z"
                                fill="#2B3145"
                              ></path>

                              <path
                                d="M21.2858 26.9698C22.0178 26.9698 22.6112 26.4128 22.6112 25.7257C22.6112 25.0387 22.0178 24.4817 21.2858 24.4817C20.5538 24.4817 19.9604 25.0387 19.9604 25.7257C19.9604 26.4128 20.5538 26.9698 21.2858 26.9698Z"
                                fill="#8B50FF"
                              ></path>
                            </svg>

                            {/* <span style={{

                            position:'absolute',

                            height:'2px',

                            bottom:'0',

                            transition:'all 300ms',

                            backgroundColor:'#00AB55',

                            left:'0px',

                            width:'48px',

                          }}>

                            </span> */}
                          </div>
                        )}

                        {assetPayload?.Product === 'Phone android' && (
                          <div className="flex item-center justify-between">
                            <svg
                              width="80px"
                              height="140px"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="c"
                            >
                              <g clip-path="url(#clip0_77_21456)">
                                <path
                                  d="M16.967 28.3334C17.8366 28.3416 18.6968 28.1536 19.4837 27.7834C19.7006 27.638 19.9558 27.5603 20.217 27.5603C20.4782 27.5603 20.7334 27.638 20.9503 27.7834C21.7357 28.1599 22.5961 28.3537 23.467 28.3501C25.3837 28.3501 27.4337 25.4334 28.2837 22.6167C28.3185 22.5015 28.328 22.3801 28.3114 22.2609C28.2948 22.1416 28.2526 22.0274 28.1877 21.926C28.1228 21.8246 28.0366 21.7385 27.9352 21.6737C27.8338 21.6088 27.7196 21.5666 27.6003 21.5501C27.0385 21.4861 26.5185 21.2218 26.1358 20.8054C25.7531 20.3891 25.5334 19.8487 25.517 19.2834C25.523 18.7886 25.6884 18.309 25.9886 17.9156C26.2889 17.5223 26.708 17.2363 27.1837 17.1001C27.3065 17.0617 27.4188 16.9954 27.5117 16.9064C27.6047 16.8173 27.6757 16.708 27.7193 16.5869C27.7629 16.4658 27.7778 16.3363 27.763 16.2084C27.7481 16.0806 27.7039 15.9579 27.6337 15.8501C27.2399 15.1741 26.6978 14.5963 26.0482 14.1603C25.3986 13.7244 24.6585 13.4416 23.8837 13.3334C23.1248 13.3716 22.3768 13.5291 21.667 13.8001C21.218 13.9724 20.7465 14.0791 20.267 14.1167C19.7875 14.0791 19.316 13.9724 18.867 13.8001C18.1308 13.5204 17.354 13.3627 16.567 13.3334C14.617 13.3334 11.667 15.8501 11.667 19.6501C11.667 23.4501 14.417 28.3334 16.967 28.3334ZM20.8337 11.6667C21.3808 11.6667 21.9227 11.559 22.4282 11.3496C22.9337 11.1402 23.393 10.8333 23.7799 10.4464C24.1668 10.0594 24.4738 9.60012 24.6832 9.0946C24.8926 8.58907 25.0003 8.04726 25.0003 7.50008C25.0003 7.27907 24.9125 7.06711 24.7562 6.91083C24.6 6.75455 24.388 6.66675 24.167 6.66675C23.0619 6.66675 22.0021 7.10573 21.2207 7.88714C20.4393 8.66854 20.0003 9.72835 20.0003 10.8334C20.0003 11.0544 20.0881 11.2664 20.2444 11.4227C20.4007 11.579 20.6126 11.6667 20.8337 11.6667Z"
                                  fill="#8B50FF"
                                ></path>

                                <path
                                  d="M30.0003 0H10.0003C9.11627 0 8.26842 0.35119 7.6433 0.976311C7.01818 1.60143 6.66699 2.44928 6.66699 3.33333V36.6667C6.66699 37.5507 7.01818 38.3986 7.6433 39.0237C8.26842 39.6488 9.11627 40 10.0003 40H30.0003C30.8844 40 31.7322 39.6488 32.3573 39.0237C32.9825 38.3986 33.3337 37.5507 33.3337 36.6667V3.33333C33.3337 2.44928 32.9825 1.60143 32.3573 0.976311C31.7322 0.35119 30.8844 0 30.0003 0ZM20.0003 37.5C19.6707 37.5 19.3485 37.4023 19.0744 37.2191C18.8003 37.036 18.5867 36.7757 18.4605 36.4711C18.3344 36.1666 18.3014 35.8315 18.3657 35.5082C18.43 35.1849 18.5887 34.8879 18.8218 34.6548C19.0549 34.4217 19.3519 34.263 19.6752 34.1987C19.9985 34.1344 20.3336 34.1674 20.6381 34.2935C20.9427 34.4197 21.203 34.6333 21.3861 34.9074C21.5692 35.1815 21.667 35.5037 21.667 35.8333C21.667 36.2754 21.4914 36.6993 21.1788 37.0118C20.8663 37.3244 20.4424 37.5 20.0003 37.5ZM30.0003 31.6667H10.0003V3.33333H30.0003V31.6667Z"
                                  fill="#303C42"
                                ></path>
                              </g>

                              <defs>
                                <clipPath id="clip0_77_21456">
                                  <rect
                                    width="40"
                                    height="40"
                                    fill="white"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        )}

                        {assetPayload?.Product === 'Sim' && (
                          <div className="flex item-center justify-between">
                            <svg
                              width="80px"
                              height="140px"
                              viewBox="0 0 38 38"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M24.2846 2.24878H8.7877C8.20879 2.24878 7.74121 2.71636 7.74121 3.29526V34.7121C7.74121 35.291 8.20879 35.7585 8.7877 35.7585H29.2053C29.7842 35.7585 30.2518 35.291 30.2518 34.7121V8.21597C30.2518 7.93394 30.1404 7.67417 29.9475 7.47378L25.0193 2.54565C24.8264 2.35269 24.5666 2.24878 24.2846 2.24878Z"
                                fill="white"
                              ></path>

                              <path
                                d="M23.8543 4.3418H9.8418V5.65547H12.6102C13.1891 5.65547 13.6566 6.12305 13.6566 6.70195C13.6566 7.28086 13.1891 7.74844 12.6102 7.74844H9.8418V10.3238H10.5098C11.0887 10.3238 11.5562 10.7914 11.5562 11.3703C11.5562 11.9492 11.0887 12.4168 10.5098 12.4168H9.8418V33.6656H28.1664V8.65391L23.8543 4.3418Z"
                                fill="#D1C3FC"
                              ></path>

                              <path
                                d="M31.432 5.98955L26.5039 1.06143C25.9102 0.467676 25.1234 0.141113 24.2848 0.141113H8.78789C7.05859 0.148535 5.64844 1.55869 5.64844 3.28799V34.7048C5.64844 36.4341 7.05859 37.8442 8.78789 37.8442H29.2055C30.9348 37.8442 32.3449 36.4341 32.3449 34.7048V8.20869C32.3523 7.37744 32.0258 6.5833 31.432 5.98955ZM30.2594 34.7122C30.2594 35.2911 29.7918 35.7587 29.2129 35.7587H8.78789C8.20898 35.7587 7.74141 35.2911 7.74141 34.7122V3.28799C7.74141 2.70908 8.20898 2.2415 8.78789 2.2415H24.2848C24.5668 2.2415 24.8266 2.35283 25.027 2.5458L29.9551 7.47393C30.1555 7.67432 30.2594 7.93408 30.2594 8.21611V34.7122Z"
                                fill="#194F82"
                              ></path>

                              <path
                                d="M24.2842 16.6548H13.7154C12.1346 16.6548 10.8506 17.9388 10.8506 19.5196V30.0884C10.8506 31.6692 12.1346 32.9532 13.7154 32.9532H24.2842C25.865 32.9532 27.149 31.6692 27.149 30.0884V19.5196C27.149 17.9388 25.865 16.6548 24.2842 16.6548ZM18.0424 31.0384H13.7154C13.1885 31.0384 12.758 30.6079 12.758 30.081V25.754H18.0424V31.0384ZM18.0424 23.8466H12.7654V19.5196C12.7654 18.9927 13.1959 18.5622 13.7229 18.5622H18.0498V23.8466H18.0424ZM25.2342 30.0884C25.2342 30.6153 24.8037 31.0458 24.2768 31.0458H19.9498V28.3071H25.2342V30.0884ZM25.2342 26.3923H19.9498V23.2083H25.2342V26.3923ZM25.2342 21.3009H19.9498V18.5622H24.2768C24.8037 18.5622 25.2342 18.9927 25.2342 19.5196V21.3009Z"
                                fill="#194F82"
                              ></path>

                              <path
                                d="M19.9574 23.2155H25.2418V26.3995H19.9574V23.2155ZM24.2324 18.562H19.9574V21.3007H25.2344V19.5417C25.2047 19.0073 24.7668 18.5843 24.2324 18.562ZM18.0426 31.0382V25.7538H12.7656V30.0659C12.7953 30.5409 13.1367 30.9269 13.5895 31.0233C13.634 31.0308 13.6785 31.0382 13.723 31.0382H18.0426ZM12.7656 19.5417V23.8464H18.05V18.562H13.775C13.2332 18.5843 12.7953 19.0073 12.7656 19.5417ZM25.2344 30.0733V28.3069H19.95V31.0456H24.277C24.3215 31.0456 24.366 31.0382 24.4105 31.0308C24.8633 30.9343 25.2047 30.5409 25.2344 30.0733Z"
                                fill="#FFC10D"
                              ></path>
                            </svg>
                          </div>
                        )}

                        <div
                          style={{
                            color: 'black',
                          }}
                        >
                          <label
                            htmlFor="ProductId"
                            className="block text-sm font-medium bold-black-700"
                          >
                            ProductId: {assetPayload?.ProductId}
                          </label>
                        </div>

                        <div
                          style={{
                            color: 'black',
                          }}
                        >
                          <label
                            htmlFor="Processor"
                            className="block text-sm font-medium bold-black-700"
                          >
                            Processor : {assetPayload?.Processor}
                          </label>
                        </div>

                        <div
                          style={{
                            color: 'black',
                          }}
                        >
                          <label
                            htmlFor="Product"
                            className="block text-sm font-medium bold-black-700"
                          >
                            Product : {assetPayload?.Product}
                          </label>
                        </div>

                        <div
                          style={{
                            color: 'black',
                          }}
                        >
                          <label
                            htmlFor="Ram"
                            className="block text-sm font-medium bold-black-700"
                          >
                            Ram : {assetPayload?.Ram}
                          </label>
                        </div>

                        {/* <div

                        style={{

                          color: 'black',

                        }}

                      >

                        <label

                          htmlFor="WorkingStatus"

                          className="block text-sm font-medium color-blue bold-green-700"

                        >

                          WorkingStatus : {assetPayload?.WorkingStatus}

                        </label>

                      </div> */}

                        <div
                          style={{
                            color: 'black',
                          }}
                        >
                          <label
                            htmlFor="Version"
                            className="block text-sm font-medium bold-black-700"
                          >
                            AllocationStatus : {assetPayload?.AllocationStatus}
                          </label>
                        </div>

                        {/* <div>

                        <label

                          htmlFor="AssignTo"

                          className="block text-sm font-medium bold-black-700"

                        >

                          AssignTo : {assetPayload?.AssignTo}

                        </label>

                      </div> */}
                      </section>
                    </div>
                  </div>

                  <div style={{ color: 'black' }}>
                    <label
                      htmlFor="WorkingStatus"
                      className="block text-sm font-medium color-blue bold-black-700"
                    >
                      WorkingStatus :
                    </label>

                    <select
                      id="WorkingStatus"
                      name="WorkingStatus"
                      className="block mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={assetPayload?.WorkingStatus}
                      onChange={(e) => {
                        // Handle the selection change here

                        console.log(e.target.value) // Example: Log the selected value to the console
                      }}
                      disabled
                    >
                      {/* Render options based on assetPayload values */}

                      {Object.keys(assetPayload).map((key) => (
                        <option key={key} value={assetPayload[key]}>
                          {assetPayload[key]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={{ color: 'black' }}>
                    <label
                      htmlFor="AssignTo"
                      className="block text-sm font-medium color-blue bold-black-700"
                    >
                      AssignTo :
                    </label>

                    <select
                      id="AssignTo"
                      name="AssignTo"
                      className="block mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={assetPayload?.AssignTo}
                      onChange={(e) => {
                        // Handle the selection change here

                        console.log(e.target.value) // Example: Log the selected value to the console
                      }}
                      disabled
                    >
                      {/* Render options based on assetPayload values */}

                      {Object.keys(assetPayload).map((key) => (
                        <option key={key} value={assetPayload[key]}>
                          {assetPayload[key]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-end">
                    {/* <button

                    type="Edit"

                    className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"

                  >

                    {loading ? <Loader /> : 'Edit'}

                  </button> */}
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  )
}

export default OnBoardingAssignBody

{
  /* function getLeadsDataFun() {

  throw new Error('Function not implemented.')

} */
}

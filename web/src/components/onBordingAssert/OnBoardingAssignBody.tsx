// import React, { useState } from 'react'

// import { Dialog } from '@headlessui/react'
// import { Form, Formik, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup'

// // import {
// //   options,
// //   options1,
// //   options2,
// //   options3,
// //   options4,
// //   options5,
// //   options6,
// // } from 'src/constants/userRoles'
// import { CustomSelect } from 'src/util/formFields/selectBoxField'

// import Loader from '../Loader/Loader'

// const validate = Yup.object().shape({
//   Product: Yup.string().required('Product is required'),
//   Touchscreen: Yup.string().required('Touchscreen is required'),
//   Sensors: Yup.string().required('Sensors is required'),
//   NFC: Yup.string().required('NFC is required'),
//   Display: Yup.string().required('Display is required'),
//   PhoneConnector: Yup.string().required('Phone connector is required'),
//   Keypad: Yup.string().required('Keypad is required'),
// })

// const options = [
//   { value: 'apple iphone', label: 'Apple iphone' },
//   { value: 'realme gt', label: 'Realme gt' },
//   { value: 'oppo', label: 'Oppo' },
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

// const OnBoardAssertBody = () => {
//   const [formMessage, setFormMessage] = useState({
//     color: 'green',
//     message: '',
//   })

//   const [loading, setLoading] = useState(false)

//   const handleSubmit = (values) => {
//     console.log('Submitted', values)
//     // Handle form submission

//     // Example: Simulating form submission delay
//     setLoading(true)
//     setTimeout(() => {
//       setLoading(false)
//       setFormMessage({
//         color: 'green',
//         message: 'Product added successfully!',
//       })
//     }, 2000)

//     // Display form values in the console
//     console.log('Form Values:', values)
//   }

//   return (
//     <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
//       <div className="px-4 sm:px-6">
//         <Dialog.Title className="font-semibold text-lg mr-auto ml-3">
//           Add Products
//         </Dialog.Title>
//       </div>
//       {formMessage.message && (
//         <div className="w-full bg-[#E9F6ED] ml-2 mt-3 mb-5 p-3 text-green-700">
//           {formMessage.message}
//         </div>
//       )}
//       <div className="px-4 sm:px-6 mt-4">
//         <div className="mt-1">
//           <Formik
//             initialValues={{
//               Product: '',
//               Touchscreen: '',
//               Sensors: '',
//               NFC: '',
//               Display: '',
//               PhoneConnector: '',
//               Keypad: '',
//             }}
//             validationSchema={validate}
//             onSubmit={handleSubmit}
//           >
//             {({ values, setFieldValue }) => (
//               <Form className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="Product"
//                     className="block text-sm font-medium bold-black-700"
//                   >
//                     Product
//                   </label>
//                   <Field
//                     as={CustomSelect}
//                     name="Product"
//                     options={options}
//                     placeholder="Select a product"
//                     className="mt-1"
//                     onChange={(option) =>
//                       setFieldValue('Product', option.value)
//                     }
//                   />
//                   <ErrorMessage
//                     name="Product"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="Touchscreen"
//                     className="block text-sm font-medium bold-black-700"
//                   >
//                     Touchscreen
//                   </label>
//                   <Field
//                     as={CustomSelect}
//                     name="Touchscreen"
//                     options={options1}
//                     placeholder="Select touchscreen option"
//                     className="mt-1"
//                     onChange={(option) =>
//                       setFieldValue('Touchscreen', option.value)
//                     }
//                   />
//                   <ErrorMessage
//                     name="Touchscreen"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="Sensors"
//                     className="block text-sm font-medium bold-black-700"
//                   >
//                     Sensors
//                   </label>
//                   <Field
//                     as={CustomSelect}
//                     name="Sensors"
//                     options={options2}
//                     placeholder="Select sensor"
//                     className="mt-1"
//                     onChange={(option) =>
//                       setFieldValue('Sensors', option.value)
//                     }
//                   />
//                   <ErrorMessage
//                     name="Sensors"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="NFC"
//                     className="block text-sm font-medium bold-black-700"
//                   >
//                     NFC
//                   </label>
//                   <Field
//                     as={CustomSelect}
//                     name="NFC"
//                     options={options3}
//                     placeholder="Select NFC option"
//                     className="mt-1"
//                     onChange={(option) => setFieldValue('NFC', option.value)}
//                   />
//                   <ErrorMessage
//                     name="NFC"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="Display"
//                     className="block text-sm font-medium bold-black-700"
//                   >
//                     Display
//                   </label>
//                   <Field
//                     as={CustomSelect}
//                     name="Display"
//                     options={options4}
//                     placeholder="Select display type"
//                     className="mt-1"
//                     onChange={(option) =>
//                       setFieldValue('Display', option.value)
//                     }
//                   />
//                   <ErrorMessage
//                     name="Display"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="PhoneConnector"
//                     className="block text-sm font-medium bold-black-700"
//                   >
//                     Phone Connector
//                   </label>
//                   <Field
//                     as={CustomSelect}
//                     name="PhoneConnector"
//                     options={options5}
//                     placeholder="Select phone connector"
//                     className="mt-1"
//                     onChange={(option) =>
//                       setFieldValue('PhoneConnector', option.value)
//                     }
//                   />
//                   <ErrorMessage
//                     name="PhoneConnector"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="Keypad"
//                     className="block text-sm font-medium bold-black-700"
//                   >
//                     Keypad
//                   </label>
//                   <Field
//                     as={CustomSelect}
//                     name="Keypad"
//                     options={options6}
//                     placeholder="Select keypad"
//                     className="mt-1"
//                     onChange={(option) => setFieldValue('Keypad', option.value)}
//                   />
//                   <ErrorMessage
//                     name="Keypad"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>

//                 <div className="flex justify-end">
//                   <button
//                     type="submit"
//                     className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                   >
//                     {loading ? <Loader /> : 'Submit'}
//                   </button>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default OnBoardAssertBody

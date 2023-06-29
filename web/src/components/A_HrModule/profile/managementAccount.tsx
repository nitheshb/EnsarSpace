// import React, { useState } from 'react';
// import { setDoc, doc } from 'firebase/firestore';
// import { db } from 'web/src/context/firebaseConfig'; // Replace with the correct path to your Firebase initialization file

// const ManagementAccount = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     jobTitle: '',
//     organization: '',
//     department: '',
//     location: '',
//   });

//   const handleButtonClick = () => {
//     setShowForm(true);
//   };

//   const handleInputChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Store form data in Firebase Firestore
//       await setDoc(doc(db, 'profiles', 'userId'), formData);
//       console.log('Form data stored successfully:', formData);
//       setFormSubmitted(true);
//       resetForm();
//     } catch (error) {
//       console.log('Error storing form data:', error);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       jobTitle: '',
//       organization: '',
//       department: '',
//       location: '',
//     });
//   };

//   return (
//     <div>
//       {formSubmitted && <p className="text-black mt-4">Form submitted successfully!</p>}

//       <button
//         className="flex-grow mt-[20%] mb-6 flex flex-col items-center justify-center bg-gray-300 rounded-md border border-black w-full p-2 rounded-xl"
//         onClick={handleButtonClick}
//       >
//         Manage Your Account
//       </button>

//       {showForm && (
//         <div className="mt-4">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="jobTitle" className="block font-bold">
//                 Your Job Title:
//               </label>
//               <input
//                 type="text"
//                 id="jobTitle"
//                 name="jobTitle"
//                 className="border border-gray-400 p-2 rounded-md w-full"
//                 value={formData.jobTitle}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="organization" className="block font-bold">
//                 Your Organization:
//               </label>
//               <input
//                 type="text"
//                 id="organization"
//                 name="organization"
//                 className="border border-gray-400 p-2 rounded-md w-full"
//                 value={formData.organization}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="department" className="block font-bold">
//                 Your Department:
//               </label>
//               <input
//                 type="text"
//                 id="department"
//                 name="department"
//                 className="border border-gray-400 p-2 rounded-md w-full"
//                 value={formData.department}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="location" className="block font-bold">
//                 Your Location:
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 className="border border-gray-400 p-2 rounded-md w-full"
//                 value={formData.location}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="flex space-x-4">
//               <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
//                 Submit
//               </button>
//               <button
//                 type="button"
//                 className="bg-gray-500 text-white px-4 py-2 rounded-md"
//                 onClick={resetForm}
//               >
//                 Reset
//               </button>
//             </div>
//           </form>
//         {/* </div> */}
//       )}
//     </div>
//   );
// };

// export default ManagementAccount;

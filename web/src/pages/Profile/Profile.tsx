import { title } from 'process'

import React, { ChangeEvent } from 'react'

import { DownloadIcon } from '@heroicons/react/outline'
import { Height } from '@mui/icons-material'
import { Hidden, TextField } from '@mui/material'
import { Form, Formik } from 'formik'

import { Link } from '@redwoodjs/router/dist/links'

import Account from 'src/components/A_HrModule/profile/account'
import CheckBox from 'src/components/A_HrModule/profile/checkBox'
import LeaveManagement from 'src/components/A_HrModule/profile/LeaveManagement'
import PersonalDetails from 'src/components/A_HrModule/profile/personalDetails'
import ProfileHeaderPage from 'src/components/A_HrModule/profile/ProfileHeaderPage'
import ProfileAssetManagement from 'src/components/A_HrModule/ProfileAssetManagement'
import HeadSideBarDetailView from 'src/components/HeadDetailSideBar'
import HeadNavBar from 'src/components/HeadNavBar/HeadNavBar'
import HeadSideBar from 'src/components/HeadSideBar/HeadSideBar'
import { SingleFileUploadWithProgress } from 'src/components/LeadUplodCsv/SingleFileUploadWithProgress'
import { UploadError } from 'src/components/LeadUplodCsv/UploadError'
import LfileUploadTableHome from 'src/components/LfileUploadTableHome'
import Loader from 'src/components/Loader/Loader'
import TimeOff from 'src/components/TableComp/TimeOff'
import TimeOffTable from 'src/components/TableComp/TimeOffTable'
import { useAuth } from 'src/context/firebase-auth-context'

import bg from '../../../public/Group7.png'

const Profile = () => {
  const { user } = useAuth()
  console.log('user detailsssssssss', user)

  function handleFileInputChange(event: ChangeEvent<HTMLInputElement>): void {}
  // const { user } = useAuth()
  // console.log("user detailsssssssss", user)

  function handleFileInputChange(event: ChangeEvent<HTMLInputElement>): void {}
  function getRootProps(arg0: {
    style: any
  }): JSX.IntrinsicAttributes &
    globalThis.React.ClassAttributes<HTMLDivElement> &
    globalThis.React.HTMLAttributes<HTMLDivElement> {
    throw new Error('Function not implemented.')
  }
  function getInputProps(): JSX.IntrinsicAttributes &
    globalThis.React.ClassAttributes<HTMLInputElement> &
    globalThis.React.InputHTMLAttributes<HTMLInputElement> {
    throw new Error('Function not implemented.')
  }
  function clearUploadDocs() {
    throw new Error('Function not implemented.')
  }
  function onDelete(file: File): void {
    throw new Error('Function not implemented.')
  }
  function onUpload(file: File, url: string): void {
    throw new Error('Function not implemented.')
  }
  function uploadFile(file: any) {
    throw new Error('Function not implemented.')
  }
  function setFileName(value: string) {
    throw new Error('Function not implemented.')
  }
  function resetter(): void {
    throw new Error('Function not implemented.')
  }
  function handleSubmit(file: any): void {
    throw new Error('Function not implemented.')
  }
  // function handleClick(event: MouseEvent<HTMLHeadingElement, MouseEvent>): void {
  //   throw new Error('Function not implemented.')
  // }
  return (
    <>
      <ProfileHeaderPage />
      <div>
        <div className="white-bg">
          <div className="flex flex-col text-gray-700 bg-white">
            <div className="flex flex-row relative ml-[22vw] w-full">
              <div className="mb-10">
                <div
                  style={{ overflow: 'hidden' }}
                  className="md:flex md:flex-row md:gap-x-8 w-full"
                >
                  <div className="flex flex-col">
                    <div
                      style={{ position: 'relative' }}
                      className="md:w-[12vw] flex flex-col justify-between items-center md:h-[10vh] rounded-md"
                    >
                      <div className=" justify-center items-end mt-20 mb-16 ml-10">
                        <h1 className="text-center text-xl font-bold blink">
                          {user?.displayName}
                        </h1>
                      </div>
                    </div>
                    {/* <button className="flex-grow mt-[20%] mb-6 flex flex-col items-center justify-center bg-gray-300 rounded-md border border-black w-full p-2 rounded-xl">
                      ManageYourAccount
                    </button> */}
                    <div className="border border-black hover:text-grey-800 p-8 mx-auto max-w-md font-sans">
                      <ul className="space-y-1">
                        <li>
                          <Link
                            to="/about"
                            className="text-black hover:text-grey font-medium font-bold"
                          >
                            ABOUT
                          </Link>
                        </li>
                        <div className="relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="absolute top-3 left-3 black"
                          >
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                          </svg>
                          <input
                            type="text"
                            className="border-b border-black py-2 pl-10 pr-4 w-full border-none bg-transparent rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:white"
                            placeholder={
                              user?.role[0]
                                ? user.role[0].charAt(0).toUpperCase() +
                                  user.role[0].slice(1)
                                : ''
                            }
                            readOnly
                          />
                        </div>
                        <div className="relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="absolute top-3 left-3 text-black"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                            />
                          </svg>
                          <input
                            type="text"
                            placeholder={
                              user?.department[0]
                                ? user.department[0].charAt(0).toUpperCase() +
                                  user.department[0].slice(1)
                                : ''
                            }
                            readOnly
                            className="border-b border-black py-2 pl-10 pr-4 w-full border-none bg-transparent rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:white"
                          />
                        </div>
                        <div className="relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="absolute top-3 left-3 text-gray-500"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                            />{' '}
                            <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                          </svg>
                          <input
                            type="text"
                            placeholder={user?.orgName}
                            readOnly
                            className="border-b border-black py-2 pl-10 pr-4 w-full border-none bg-transparent rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:white  "
                          />
                        </div>
                        <div className="relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            width="24"
                            height="24"
                            className="absolute top-3 left-3 text-gray-500"
                          >
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                          </svg>
                          <input
                            type="text"
                            placeholder="Hyderabad"
                            className="border-b border-black py-2 pl-10 pr-4 w-full border-none bg-transparent rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:white  "
                          />
                        </div>
                      </ul>
                      <div className="mt-3">
                        <h2 className="text-black font-medium mb-2">CONTACT</h2>
                        <div className="relative flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="ml-2"
                          >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                          </svg>
                          <p className="text-black mb-2.5">
                            <span className="mr-2">{user?.email}</span>
                          </p>
                        </div>
                        <div className="relative flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="grey"
                            height="1em"
                            viewBox="0 0 512 512"
                            className="ml-2"
                          >
                            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                          </svg>
                          <p className="text-black mb-2.5">
                            {/* <span className="mr-2">{user?.perPh}</span> */}
                            <input
                              type="text"
                              placeholder={user?.perPh}
                              readOnly
                              className="border-b border-black py-2 pl-10 pr-4 w-full border-none bg-transparent rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:white  "
                            />
                          </p>
                        </div>
                        <h2 className="text-black font-medium mt-3 ">TEAMS</h2>
                        <div className="flex items-center mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="24"
                            height="24"
                            className="ml-2 mt-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                            />
                          </svg>
                          <Link
                            to="/about/create-team"
                            className="text-black hover:text-gray-800 "
                          >
                            Create team
                          </Link>
                        </div>
                        <Link
                          to="/about/privacy-policy"
                          className="text-gray-600 hover:text-gray-800 font-medium font-bold block mb-4"
                        >
                          <small> View privacy policy</small>
                        </Link>
                      </div>
                    </div>
                    <button className="flex-grow mt-[20%] mb-6 flex flex-col items-center justify-center bg-gray-300 rounded-md border border-black w-full p-2 rounded-xl">
                      ManageYourAccount
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col gap-3 absolute top-0 right-10 mt-10 mr-6"
                style={{ right: '15rem' }}
              >
                <PersonalDetails />
                <ProfileAssetManagement />

                <CheckBox />
                <Account />
                <TimeOffTable />
                <TimeOff />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile

// import React, { ChangeEvent } from 'react'

// import HeadSideBarDetailView from 'src/components/HeadDetailSideBar'

// import HeadNavBar from 'src/components/HeadNavBar/HeadNavBar'

// import HeadSideBar from 'src/components/HeadSideBar/HeadSideBar'

// import Account from 'src/components/profile/account'

// import CheckBox from 'src/components/profile/checkBox'

// import PersonalDetails from 'src/components/profile/personalDetails'

// import bg from '../../../public/Group7.png'

// import { Link } from '@redwoodjs/router/dist/links'

// import LfileUploadTableHome from 'src/components/LfileUploadTableHome'

// import { Form, Formik } from 'formik'

// import Loader from 'src/components/Loader/Loader'

// import { DownloadIcon } from '@heroicons/react/outline'

// import { Hidden, TextField } from '@mui/material'

// import { title } from 'process'

// import { SingleFileUploadWithProgress } from 'src/components/LeadUplodCsv/SingleFileUploadWithProgress'

// import { UploadError } from 'src/components/LeadUplodCsv/UploadError'

// import { Height } from '@mui/icons-material'

// import ProfileHeader from './ProfileHeader'

// const Profile = () => {

//   function handleFileInputChange(event: ChangeEvent<HTMLInputElement>): void {

//   }

//   function getRootProps(arg0: {

//     style: any

//   }): JSX.IntrinsicAttributes &

//     globalThis.React.ClassAttributes<HTMLDivElement> &

//     globalThis.React.HTMLAttributes<HTMLDivElement> {

//     throw new Error('Function not implemented.')

//   }

//   function getInputProps(): JSX.IntrinsicAttributes &

//     globalThis.React.ClassAttributes<HTMLInputElement> &

//     globalThis.React.InputHTMLAttributes<HTMLInputElement> {

//     throw new Error('Function not implemented.')

//   }

//   function clearUploadDocs() {

//     throw new Error('Function not implemented.')

//   }

//   function onDelete(file: File): void {

//     throw new Error('Function not implemented.')

//   }

//   function onUpload(file: File, url: string): void {

//     throw new Error('Function not implemented.')

//   }

//   function uploadFile(file: any) {

//     throw new Error('Function not implemented.')

//   }

//   function setFileName(value: string) {

//     throw new Error('Function not implemented.')

//   }

//   function resetter(): void {

//     throw new Error('Function not implemented.')

//   }

//   function handleSubmit(file: any): void {

//     throw new Error('Function not implemented.')

//   }

//   function handleClick(event: MouseEvent<HTMLHeadingElement, MouseEvent>): void {

//     throw new Error('Function not implemented.')

//   }

//   return (

//     <>

//       <ProfileHeader />

//       <div >

//         <div className="white-bg">

//           <div className="flex flex-col text-gray-700 bg-white">

//             <div className="flex flex-row relative ml-[22vw] w-full">

//               <div className="mb-10">

//                 <div style={{ overflow: 'hidden' }} className="md:flex md:flex-row md:gap-x-8 w-full">

//                   <div className="flex flex-col">

//                     <div style={{ position: 'relative' }} className="md:w-[12vw] flex flex-col justify-between items-center md:h-[10vh] rounded-md">

//                       <div className=" justify-center items-end mt-20 mb-16 ml-10">

//                         <h1 className="text-center text-xl font-bold blink">

//                           Deepthi Rani

//                         </h1>

//                       </div>

//                     </div>

//                     <button className="flex-grow mt-[20%] mb-6 flex flex-col items-center justify-center bg-gray-300 rounded-md border border-black w-full p-2 rounded-xl">

//                       ManageYourAccount

//                     </button>

//                     <div className="border border-black hover:text-grey-800 p-3 mx-auto max-w-md font-sans">

//                       <ul className="space-y-1">

//                         <li>

//                           <Link

//                             to="/about"

//                             className="text-black hover:text-grey font-medium font-bold"

//                           >

//                             ABOUT

//                           </Link>

//                         </li>

//                         <div className="relative">

//                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="absolute top-3 left-3 black">

//                             <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />

//                           </svg>

//                           <input

//                             type="text"

//                             className="border-b border-black py-2 pl-10 pr-4 w-full border-none bg-transparent rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:white  "

//                             placeholder="Your Job Title"

//                           />

//                         </div>

//                         <div className="relative">

//                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="absolute top-3 left-3 text-black">

//                             <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />

//                           </svg>

//                           <input

//                             type="text"

//                             placeholder="Your Department"

//                             className="border-b border-black py-2 pl-10 pr-4 w-full border-none bg-transparent rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:white  "

//                           />

//                         </div>

//                         <div className="relative">

//                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="absolute top-3 left-3 text-gray-500">

//                             <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" /> <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />

//                           </svg>

//                           <input

//                             type="text"

//                             placeholder="Your Organization"

//                             className="border-b border-black py-2 pl-10 pr-4 w-full border-none bg-transparent rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:white  "

//                           />

//                         </div>

//                         <div className="relative">

//                           <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="24" height="24" className="absolute top-3 left-3 text-gray-500">

//                             <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />

//                           </svg>

//                           <input

//                             type="text"

//                             placeholder="Your Location"

//                             className="border-b border-black py-2 pl-10 pr-4 w-full border-none bg-transparent rounded-lg focus:border-black focus:outline-none focus:ring-1 focus:white  "

//                           />

//                         </div>

//                       </ul>

//                       <div className="mt-3">

//                         <h2 className="text-black font-medium mb-2">CONTACT</h2>

//                         <div className="relative flex items-center">

//                           <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 24 24" width="24" height="24" className="ml-2">

//                             <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />

//                           </svg>

//                           <p className="text-black mb-2.5">

//                             <span className="mr-2">deepthi@ensarsolutions.com</span>

//                           </p>

//                         </div>

//                         <h2 className="text-black font-medium mt-3 ">

//                           TEAMS

//                         </h2>

//                         <div className="flex items-center mb-4">

//                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='currentColor' width="24" height="24" className="ml-2 mt-2">

//                             <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />

//                           </svg>

//                           <Link to="/about/create-team" className="text-black hover:text-gray-800 ">

//                             Create team

//                           </Link>

//                         </div>

//                         <Link

//                           to="/about/privacy-policy"

//                           className="text-gray-600 hover:text-gray-800 font-medium font-bold block mb-4"

//                         >

//                           <small>  View privacy policy</small>

//                         </Link>

//                       </div>

//                     </div>

//                   </div>

//                 </div>

//               </div>

//               <div className="flex flex-col gap-3 absolute top-0 right-10 mt-10 mr-6" style={{ right: "35rem" }}>

//                 <PersonalDetails />

//                 <CheckBox />

//                 <Account />

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </>

//   )

// }

// export default Profile

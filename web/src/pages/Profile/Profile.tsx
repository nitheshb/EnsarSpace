import React, { ChangeEvent } from 'react'

import HeadSideBarDetailView from 'src/components/HeadDetailSideBar'
import HeadNavBar from 'src/components/HeadNavBar/HeadNavBar'
import HeadSideBar from 'src/components/HeadSideBar/HeadSideBar'
import Account from 'src/components/profile/account'
import CheckBox from 'src/components/profile/checkBox'
import PersonalDetails from 'src/components/profile/personalDetails'

import bg from '../../../public/Group7.png'
import { Link } from '@redwoodjs/router/dist/links'
import LfileUploadTableHome from 'src/components/LfileUploadTableHome'
import { Form, Formik } from 'formik'
import Loader from 'src/components/Loader/Loader'
import { DownloadIcon } from '@heroicons/react/outline'
import { Hidden, TextField } from '@mui/material'
import { title } from 'process'
import { SingleFileUploadWithProgress } from 'src/components/LeadUplodCsv/SingleFileUploadWithProgress'
import { UploadError } from 'src/components/LeadUplodCsv/UploadError'

const Profile = () => {
  function handleFileInputChange(event: ChangeEvent<HTMLInputElement>): void {
    // Handle file input change here
  }
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

  return (
    <div>
      {/* <HeadNavBar /> */}

      <div className="flex flex-row overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
        <HeadSideBar />
         <div className="flex flex-col relative ml-[10%] my-[5%] w-full">



          <div className="mb-10">
            <h1 className="text-5xl text-[#2B2A35] ">My Profile</h1>
            <p className="text-lg my-4">It’s awesome to have you with us.</p>
            <div style={{ overflow: 'hidden' }} className="md:flex md:flex-row md:gap-x-8 w-full">




                <div className="flex flex-col">
                <div style={{ position: 'relative' }} className="md:w-[20vw] flex flex-col justify-between items-center md:h-[50vh] rounded-md bg-gray-100">
                  <img className="w-full relative mt-4" src={bg} alt="bg profile" />
                  <div className="w-32 h-32 absolute mt-4 bg-gray-400 rounded-full">
                    <input
                      id="file-input"
                      type="file"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: 0,
                        width: '100%',
                        height: '100%',
                        cursor: 'pointer',
                      }}
                    />
                    <img
                      className="w-[200px] h-[200px] inline"
                      alt=""
                      src="/empty-dashboard.svg"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-2xl text-center">Deepthi</p>
                    <small className="font-medium text-gray-500">
                      deepthi@ensarsolutions.com
                    </small>
                  </div>
                  <p className="mb-4 font-medium text-gary-600">
                    Redefine user since sept 2021
                  </p>
                </div>

                <h1 className="flex-grow mt-[10%] flex flex-col items-center justify-center bg-white rounded-md border border-white w-full">
                    ManageYourAccount
                  </h1>

                {/* <div className="border border-black rounded-lg p-2"> */}
                {/* <div className="flex-grow mt-[10%]" style={{}}> */}
                <div className="flex-grow mt-[10%] flex flex-col items-center justify-center bg-white rounded-md">
                  {/* <h1 className="text-lg font-bold text-gray-800">
                    ManageYourAccount
                  </h1> */}
                  <div className="border rounded-lg p-8">
                  {/* <label className="block border border-black rounded-lg p-2"> */}

                  <ul className="space-y-1">

                <li style={{ borderBottomWidth: '2px', paddingBottom: '10px' }}>

                   <Link
                    to="/about"
                    className="text-gray-600 hover:text-gray-800 font-medium font-bold"
                    >
                    ABOUT
                  </Link>

                 </li>


              <div className="relative">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute top-3 left-3 text-gray-500">
             <path d="M9.5 17H7v-1.5c0-1.379 1.121-2.5 2.5-2.5s2.5 1.121 2.5 2.5V17h-2.5zm2.5-8.5c1.93 0 3.5 1.57 3.5 3.5V13h-7v-1.5c0-1.93 1.57-3.5 3.5-3.5zm-6.09 6.44c-.2-.2-.31-.47-.31-.75 0-.28.11-.55.31-.75a.996.996 0 011.41 0l1.08 1.08 3.09-3.09a.996.996 0 011.41 0c.39.39.39 1.02 0 1.41l-3.5 3.5a.996.996 0 01-1.41 0l-1.5-1.5z" />
             </svg>
              <input
               type="text"
               placeholder="Your Job Title"
               className="py-3 pl-10 pr-4 w-full border-none bg-transparent rounded-lg focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>



            <div className="relative">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-3 left-3 text-gray-500">
            <path d="M20 12H4"></path>
            <path d="M20 6H4"></path>
            <path d="M20 18H4"></path>
             </svg>
             <input
              type="text"
             placeholder="Your Department"
            className="py-3 pl-10 pr-4 w-full border-none bg-transparent rounded-lg focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
            </div>



              <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute top-3 left-3 text-gray-500">
     <path fill="none" d="M0 0h24v24H0z"/>
    <path d="M19 8v10H5V8h14m1-2H4c-.55 0-1 .45-1 1v12a1 1 0 001 1h16a1 1 0 001-1V7c0-.55-.45-1-1-1z"/>
   </svg>
   <input
     type="text"
    placeholder="YourOrganization"
     className="py-3 pl-10 pr-4 w-full border-none bg-transparent rounded-lg focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
   />
 </div>


 <div className="relative">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute top-3 left-3 text-gray-500">
     <path fill="none" d="M0 0h24v24H0z" />
     <path d="M12 22a9 9 0 019-9c0-3.86-2.88-7.04-6.6-8.86a1.5 1.5 0 00-1.8 0C9.88 5.96 7 9.14 7 13a9 9 0 019 9zm0-2a7 7 0 10-7-7 7 7 0 007 7z" />
   </svg>
   <input
     type="text"
    placeholder="Your Location"
     className="py-3 pl-10 pr-4 w-full border-none bg-transparent rounded-lg focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
   />
 </div>


               </ul>

               <div className="mt-8">
                 <h2 className="text-gray-600 font-medium mb-4" style={{ borderBottomWidth: '2px',paddingBottom: '10px' }}>CONTACT</h2>
                   {/* <p className="text-gray-800 mb-4">deepthi@ensarsolutions.com</p> */}

                   <div className="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="ml-2">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 6.13V18a2 2 0 01-2 2H5a2 2 0 01-2-2V6.13l8 4.57 8-4.57zm0-2.1L12 7.87 2 3.03V2h18v1.03z" />
  </svg>
  <p className="text-gray-800 mb-4 flex items-center">
    <span className="mr-2">deepthi@ensarsolutions.com</span>
  </p>
</div>





              {/* <h2 className="text-gray-600 font-medium mb-4" style={{ borderBottomWidth: '2px' }}>TEAMS</h2> */}
              <h2 className="text-gray-600 font-medium mb-4" style={{ borderBottomWidth: '2px', paddingBottom: '10px' }}>
                TEAMS
                </h2>



{/* <div className="flex items-center">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-2">
     <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 11v2h-2v-2H8v-2h3V7h2v2h3v2h-3zM3 3v18h18V3H3zm16 16H5V5h14v14z" />
  </svg>
   <Link to="/about/create-team" className="text-gray-600 hover:text-gray-800 font-medium block mb-4">
     Create team
             </Link>
              </div> */}


<div className="flex items-center mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-2">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 11v2h-2v-2H8v-2h3V7h2v2h3v2h-3zM3 3v18h18V3H3zm16 16H5V5h14v14z" />
  </svg>
  <Link to="/about/create-team" className="text-gray-600 hover:text-gray-800 font-medium block">
    Create team
  </Link>
</div>




            <Link
             to="/about/privacy-policy"
             className="text-gray-600 hover:text-gray-800 font-medium font-bold block mb-4"
             >
          <small>  View privacy policy</small>
              </Link>


               </div>
              </div>
             </div>





                </div>
              </div>

                {/* <div className="flex flex-col gap- ml-[20%] flex-grow"> */}

      {/* <div className="flex flex-col gap-1 absolute top-0 left-0 right-0 mt-10 "> */}
      {/* <div className="flex flex-col gap-3 absolute top-0 right-0 mt-10 mr-6"> */}

      <div className="flex flex-col gap-3 absolute top-0 right-10 mt-10 mr-6" style={{right:"20rem"}}>



                {/* <div className="flex flex-col gap-3 absolute top-0 left-0 mt-10 ml-1"> */}

                {/* <div className="flex flex-col gap-1 absolute top-0 left-10 right-10 mt-10 "> */}
                <PersonalDetails />
                <CheckBox />
                <Account />
              </div>
            </div>



          </div>

        </div>
       </div>


  )
}

export default Profile
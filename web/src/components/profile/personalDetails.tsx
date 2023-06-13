import React, { useState } from 'react'




const PersonalDetails = () => {

  function handleUpdate(

    event: MouseEvent<HTMLButtonElement, MouseEvent>

  ): void {

    throw new Error('Function not implemented.')

  }




  return (

    <section

      className=" flex flex-col  md:px-8  rounded-md"

      style={{

        width: '600px',

        // height: '200px'

      }}

    >

      <div className="w-full  flex flex-row py-4 items-center ">

        {' '}

        <span>

          <p className="text-[20px] font-medium text-gray-900">Worked On</p>{' '}

          <p className="text-[10px] text-gray-500">

            Others will only see what they can access.

          </p>

        </span>

        {/* <button className=" h-10 w-40 bg-gray-400 hover:bg-blue-300 rounded-full ">

          Update

        </button> */}

      </div>

      <div>

        <div className="border-black rounded-xl border w-full">

          {/* <span className="flex">

            <svg

              style={{

                width: '50px',

                height: '50px',

                paddingLeft: '10px',

              }}

              xmlns="http://www.w3.org/2000/svg"

              viewBox="0 0 640 512"

            >

              <path

                d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"

                fill="#7248EA"

              />

            </svg>




            <p className=" h-10 w-full  hover:bg-blue-300 rounded-xl pl-2 pt-2 ">

              Programming Foundations

            </p>

          </span> */}

          <span className="flex">

            <svg

              style={{

                width: '50px',

                height: '50px',

                paddingLeft: '10px',

              }}

              xmlns="http://www.w3.org/2000/svg"

              viewBox="0 0 640 512"

            >

              <path

                d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"

                fill="#7248EA"

              />

            </svg>

            <p className=" h-10 w-full hover:bg-blue-300 rounded-xl pl-2 pt-2">

              Web Applications

            </p>

          </span>

          {/* <span className="flex">

            <svg

              style={{

                width: '50px',

                height: '50px',

                paddingLeft: '10px',

              }}

              xmlns="http://www.w3.org/2000/svg"

              viewBox="0 0 640 512"

            >

              <path

                d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"

                fill="#7248EA"

              />

            </svg>

            <p className=" h-10 w-full  hover:bg-blue-300 rounded-xl pl-2 pt-2">

              Introduction to Database

            </p>

          </span> */}

          <span className="flex">

            <svg

              style={{

                width: '50px',

                height: '50px',

                paddingLeft: '10px',

              }}

              xmlns="http://www.w3.org/2000/svg"

              viewBox="0 0 640 512"

            >

              <path

                d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"

                fill="#7248EA"

              />

            </svg>

            <p className=" h-10 w-full  hover:bg-blue-300 rounded-xl pl-2 pt-2">

              JavaScript Essentials

            </p>

          </span>

          <span className="flex">

            <svg

              style={{

                width: '50px',

                height: '50px',

                paddingLeft: '10px',

              }}

              xmlns="http://www.w3.org/2000/svg"

              viewBox="0 0 640 512"

            >

              <path

                d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"

                fill="#7248EA"

              />

            </svg>

            <p className=" h-10 w-full  hover:bg-blue-300 rounded-xl pl-2 pt-2">

              Responsive Web Design using Flexbox

            </p>

          </span>

          <div>

            <p

              className="p-2 "

              style={{

                textDecoration: 'underline',

              }}

            >

              Show More

            </p>

          </div>

        </div>

      </div>




      {/* <form className="flex flex-col my-4 ">

        <label className="text-[12px] text-left mt-6 text-gray-700 ">

          Full Name

        </label>

        <input

          className=" bg-transparent focus:outline-none  border-b-2 "

          placeholder=" Enter your full name "

          type="text"

        />

        <label className="text-[12px] text-left mt-6 text-gray-700 ">

          Country

        </label>

        <input

          className=" bg-transparent focus:outline-none  border-b-2 "

          placeholder=" Enter your country "

          type="text"

        />

      </form> */}

    </section>

  )

}




export default PersonalDetails

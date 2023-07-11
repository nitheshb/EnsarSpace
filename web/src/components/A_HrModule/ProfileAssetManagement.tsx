import React, { useState } from 'react'

const ProfileAssetManagement = () => {
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
      }}
    >
      <div className="w-full  flex flex-row py-4 items-center ">
        {' '}
        <span>
          <p className="text-[20px] font-medium text-gray-900">
            {' '}
            Asset Management{' '}
          </p>{' '}
          {/* <p className="text-[10px] text-gray-500">

            Others will only see what they can access.

          </p> */}
        </span>
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

            <p className=" h-10 w-full hover:bg-blue-300 rounded-xl pl-2 pt-2">

              Laptops

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
              viewBox="0 0 512 512"
            >
              <path
                d="M448 96H64c-35.29 0-64 28.71-64 64v192c0 35.29 28.71 64 64 64h384c35.29 0 64-28.71 64-64V160c0-35.29-28.71-64-64-64zM256 416h-64v-32h64zm160 0h-64v-32h64zm-32-128H128V160h256zm0-192H128v32h256zm96 128h-64v-32h64zm0-96h-64v-32h64z"
                fill="#7248EA"
              />
            </svg>

            <p className="h-10 w-full hover:bg-blue-300 rounded-xl pl-2 pt-2">
              Laptops
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

              Phones

            </p>

          </span>

 */}

          <span className="flex">
            <svg
              style={{
                width: '50px',

                height: '50px',

                paddingLeft: '10px',
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M416 0H96C61.5 0 32 29.5 32 64v384c0 34.5 29.5 64 64 64h320c34.5 0 64-29.5 64-64V64c0-34.5-29.5-64-64-64zm16 448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v384z"
                fill="#7248EA"
              />

              <path
                d="M256 480c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-32c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0-384c-4.4 0-8-3.6-8-8V16c0-4.4 3.6-8 8-8s8 3.6 8 8v40c0 4.4-3.6 8-8 8zm0 96c-4.4 0-8-3.6-8-8V96c0-4.4 3.6-8 8-8s8 3.6 8 8v40c0 4.4-3.6 8-8 8zm0 96c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8s8 3.6 8 8v40c0 4.4-3.6 8-8 8z"
                fill="#7248EA"
              />
            </svg>

            <p className="h-10 w-full hover:bg-blue-300 rounded-xl pl-2 pt-2">
              Phones
            </p>
          </span>

          {/*

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

             SimCards

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
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />

              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-2.5-6a1.5 1.5 0 1 1 3 0v.5h1a.5.5 0 0 1 0 1h-1V15a3 3 0 0 0-6 0v1H5a.5.5 0 0 1 0-1h1v-.5a1.5 1.5 0 0 1 3 0v.5h2v-.5zm3.5-5H9a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"
                fill="#7248EA"
              />
            </svg>

            <p className="h-10 w-full hover:bg-blue-300 rounded-xl pl-2 pt-2">
              SIM Card
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
    </section>
  )
}

export default ProfileAssetManagement

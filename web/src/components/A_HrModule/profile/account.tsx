import React from 'react'

const Account = () => {
  return (
    <section
      className="md:w-[30vw] flex flex-col  md:px-8  rounded-md  mb-10"
      style={{
        width: '600px',
      }}
    >
      <div className="w-full   flex flex-row py-4 items-center">
        <p className="text-2xl">Places you work in </p>{' '}
      </div>

      <div>
        <div className="border-black rounded-xl border w-full drop-shadow">
          <div className="flex p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              style={{
                width: '40px',
                height: '40px',
              }}
            >
              {' '}
              <path d="M320 0a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm44.7 164.3L375.8 253c1.6 13.2-7.7 25.1-20.8 26.8s-25.1-7.7-26.8-20.8l-4.4-35h-7.6l-4.4 35c-1.6 13.2-13.6 22.5-26.8 20.8s-22.5-13.6-20.8-26.8l11.1-88.8L255.5 181c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8l27.9-23.6C271.3 104.8 295.3 96 320 96s48.7 8.8 67.6 24.7l27.9 23.6c10.1 8.6 11.4 23.7 2.8 33.8s-23.7 11.4-33.8 2.8l-19.8-16.7zM40 64c22.1 0 40 17.9 40 40v40 80 40.2c0 17 6.7 33.3 18.7 45.3l51.1 51.1c8.3 8.3 21.3 9.6 31 3.1c12.9-8.6 14.7-26.9 3.7-37.8l-15.2-15.2-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32 15.2 15.2 0 0 25.3 25.3c21 21 32.8 49.5 32.8 79.2V464c0 26.5-21.5 48-48 48H173.3c-17 0-33.3-6.7-45.3-18.7L28.1 393.4C10.1 375.4 0 351 0 325.5V224 160 104C0 81.9 17.9 64 40 64zm560 0c22.1 0 40 17.9 40 40v56 64V325.5c0 25.5-10.1 49.9-28.1 67.9L512 493.3c-12 12-28.3 18.7-45.3 18.7H400c-26.5 0-48-21.5-48-48V385.1c0-29.7 11.8-58.2 32.8-79.2l25.3-25.3 0 0 15.2-15.2 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32-15.2 15.2c-11 11-9.2 29.2 3.7 37.8c9.7 6.5 22.7 5.2 31-3.1l51.1-51.1c12-12 18.7-28.3 18.7-45.3V224 144 104c0-22.1 17.9-40 40-40z" />
            </svg>
            <p className="p-2 font-bold text-l">ENSAR SOLUTIONS </p>
          </div>
          <div className="flex p-2">
            <img
              className="w-10 h-10"
              src="learning_images/cat_python.png"
              alt="python"
            ></img>
            <p className="p-2 font-bold text-l">PYTHON </p>
          </div>
          <div className="flex p-2">
            <img
              className="w-10 h-10"
              src="learning_images/cat_web_development.png"
              alt="web development"
            ></img>
            <p className="p-2 font-bold text-l">WEB DEVELOPMENT </p>
          </div>
          <div className="flex p-2">
            <img
              className="w-10 h-10"
              src="learning_images/cat_aws.png" alt="aws"></img>

            <p className="p-2 font-bold text-l">AWS </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Account

import { useState } from 'react'
//  HL-20-DisplayUserProfilePicture
// import SUserSignup from './addLearning/SUserSignup'

// import marketing_2 from '/learning_images/marketing_2.jpg'
// import AddCourseForm from 'src/pages/CoursedetailsPage/CourseForm'
import SUserSignup from './addLearning/SUserSignup'
import { courses } from 'src/constants/courses'
//  Development_dev


import CoursesCard from './CoursesCard'
import { Link, routes } from '@redwoodjs/router'
const CourseList = () => {

  const [activeTab, setActiveTab] = useState('python')



   const [isOpen, setIsOpen] = useState(false)
   const handleOnClose = () => setIsOpen(false)
   const [empData, setEmpData] = useState({})

   const tabHandler = (sel) => {
    setActiveTab(sel)
    setEmpData(sel)
    setIsOpen(true)
   }

  return (
    <div>


    <div className="container ml-[50px]  mt-8">


      <div className="courses-list-top">
        <div>
        <button
            onClick={() => tabHandler('ADD_COURSE')}
            className="flex items-center justify-center h-10 px-4  bg-gray-200 ml-auto text-sm font-medium rounded hover:bg-gray-300"
            >
            <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
            </svg>
            <span className="mr-1 leading-none">Add Course</span>
            </button>
        </div>

        <h2 className="text-[20px] font-bold">A Broad Selection Of Courses</h2>

        <p>
          6+ learning paths with hand picked courses,Code Challenges, Tips,
          e.t.c
        </p>


        <div className="tabs mt-[16px]">
          <ul className="flex flex-wrap">
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn py-[10px] px-[13px] mr-[6px]`}
                style={{ border: '1px solid rgba(0,0,0,0.7)' }}
                onClick={() => setActiveTab('python')}
              >
                Python
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                // onClick={() => tabHandler('WEB_DEVELOPMENT')}
                onClick={() => setActiveTab('web development')}
              >

                Web Development
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                onClick={() => setActiveTab('data science')}
              >
                Data Science
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                onClick={() => setActiveTab('aws')}
              >
                AWS Certification
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                onClick={() => setActiveTab('design')}
              >
                Design
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                onClick={() => setActiveTab('marketing')}
              >
                Marketing
              </button>
            </li>

            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                onClick={() => tabHandler('ADD_COURSE')}
              >
                Add Course
              </button>
            </li>

          </ul>

          {/* <div className='tabs-body'>
          {
            courses.filter(course => course.category === activeTab).map((course) => (
              <Course key = {course.id} {...course} />
            ))
          }
        </div> */}




{/*
            <div>
            <button
            onClick={() => tabHandler('ADD_COURSE')}
            className="flex items-center justify-center h-10 px-4  bg-gray-200 ml-auto text-sm font-medium rounded hover:bg-gray-300"
            >
            <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
            </svg>
            <span className="mr-1 leading-none">Add Course</span>
            </button>


            </div> */}
          {/* </div> */}



        </div>

        <div className="tabs-body">
          {courses
            .filter((course) => course.category === activeTab)
            .map((course) => (
              <CoursesCard key={course.id} {...course} />
            ))}
        </div>
      </div>
      <SUserSignup
              open={isOpen}
              setOpen={handleOnClose}
              title="User"
              empData={empData}
            />
      {/* <Tabs courses = {courses} /> */}




        <div>
        <button

            className="flex items-center justify-center h-10 px-4  bg-gray-200 text-sm font-medium rounded hover:bg-gray-300"
            >


          <Link to={routes.myjourney()}>My Journey</Link>
            </button>
        </div>


    </div>
    </div>
  )
}

export default CourseList



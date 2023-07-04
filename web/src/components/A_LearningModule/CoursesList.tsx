import { useState, useEffect } from 'react'

<<<<<<< HEAD
=======
import { useState, useEffect } from 'react'
>>>>>>> 77fa80314e977923c4a18afeb67b495c6d621768
// import marketing_2 from '/learning_images/marketing_2.jpg'

// import AddCourseForm from 'src/pages/CoursedetailsPage/CourseForm'

import styled from 'styled-components'

import { courses } from 'src/constants/courses'
import { getCourseDetails } from 'src/context/dbQueryFirebase'

<<<<<<< HEAD
import SUserSignup from './addLearning/SUserSignup'
=======
import styled from 'styled-components';

import { getCourseDetails } from 'src/context/dbQueryFirebase';
>>>>>>> 77fa80314e977923c4a18afeb67b495c6d621768

const Button = styled.button`
  background-color: #f1f1f1;

<<<<<<< HEAD
  border: none;

  border-radius: 4px;

  padding: 10px 20px;

  font-size: 16px;

  font-weight: bold;

  text-decoration: none;

  color: #333;

  cursor: pointer;
`

=======
>>>>>>> 77fa80314e977923c4a18afeb67b495c6d621768
import CoursesCard from './CoursesCard'

import { routes } from '@redwoodjs/router/dist/router'
import { Link } from '@redwoodjs/router'

const CourseList = () => {
  const [allCourses, setAllCourses] = useState([])

<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState('')

  const [isOpen, setIsOpen] = useState(false)

  const handleOnClose = () => setIsOpen(false)

  const [empData, setEmpData] = useState({})

  useEffect(() => {
    const getAllCourses = async () => {
      const courses = await getCourseDetails()

      return courses
    }

    console.log('COURSE DETAILS DATA')

    getAllCourses().then((courses) => setAllCourses(courses))
=======
  const [allCourses,setAllCourses] = useState([]);

  const [activeTab, setActiveTab] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const handleOnClose = () => setIsOpen(false)
  const [empData, setEmpData] = useState({})


  useEffect(() => {
    const getAllCourses = async () => {

      const courses = await getCourseDetails();
      return courses;
    }
    console.log("COURSE DETAILS DATA");
    getAllCourses().then(courses => setAllCourses(courses));
>>>>>>> 77fa80314e977923c4a18afeb67b495c6d621768
  }, [])

  const tabHandler = (sel) => {
    setActiveTab(sel)

    setEmpData(sel)

    setIsOpen(true)
  }
<<<<<<< HEAD

  const filteredCoursesList = allCourses.filter((course) => {
    if (activeTab === '') {
      return course.category !== activeTab
    } else {
      return course.category === activeTab
    }
  })

=======
>>>>>>> 77fa80314e977923c4a18afeb67b495c6d621768
  return (
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
<<<<<<< HEAD
          </ul>
        </div>

        <div className="tabs-body">
          {filteredCoursesList.length > 0 ? (
            filteredCoursesList.map((course) => (
=======


          </ul>



        </div>

        <div className="tabs-body">
          {allCourses.length > 0 && allCourses
            // .filter((course) => course.category === activeTab)
            .filter((course) => {
              if(activeTab === ""){
                return course.category !== activeTab

              }else {
              return course.category === activeTab
              }
              })
            .map((course) => (
>>>>>>> 77fa80314e977923c4a18afeb67b495c6d621768
              <CoursesCard key={course.id} {...course} />
            ))
          ) : (
            <div
              className="no-courses-message"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '200px',
                fontSize: '32px',
                color: 'black',
              }}
            >
              <img
                src="web\public\learning_images\no data.png"
                alt="No Data Found"
              />
            </div>
          )}
        </div>
<<<<<<< HEAD
        <Button>
          <Link
            to={routes.myJourney()}
            style={{ textDecoration: 'none', color: '#333' }}
          >
            My Journey
          </Link>
        </Button>
=======



        <Button>
          <Link to={routes.myJourney()} style={{ textDecoration: 'none', color: '#333' }}>
            My Journey
          </Link>
        </Button>

>>>>>>> 77fa80314e977923c4a18afeb67b495c6d621768
      </div>

      <SUserSignup
<<<<<<< HEAD
=======

>>>>>>> 77fa80314e977923c4a18afeb67b495c6d621768
        open={isOpen}
        setOpen={handleOnClose}
        title="User"
        empData={empData}
<<<<<<< HEAD
      />
=======

      />

>>>>>>> 77fa80314e977923c4a18afeb67b495c6d621768
    </div>
  )
}

export default CourseList
<<<<<<< HEAD
=======



>>>>>>> 77fa80314e977923c4a18afeb67b495c6d621768

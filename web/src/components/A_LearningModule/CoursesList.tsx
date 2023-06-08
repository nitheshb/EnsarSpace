
import { useState } from 'react'
import { courses } from 'src/constants/courses'
import { routes } from '@redwoodjs/router/dist/router'
import styled from 'styled-components';


import { Link } from '@redwoodjs/router'


const Button = styled.button`
  background-color: #f1f1f1;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  cursor: pointer;
`;


import CoursesCard from './CoursesCard'
const CourseList = () => {
  const [activeTab, setActiveTab] = useState('python')
  const tabHandler = (sel) => {
    setActiveTab(sel)
  }
  return (
    <div className="container ml-[50px] mt-8">
      <div className="courses-list-top">
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
                onClick={() => tabHandler('PYTHON')}
              >
                Python
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                onClick={() => tabHandler('WEB_DEVELOPMENT')}
              >
                Web Development
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                onClick={() => tabHandler('DATA_SCIENCE')}
              >
                Data Science
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                onClick={() => tabHandler('AWS')}
              >
                AWS Certification
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                onClick={() => tabHandler('DESIGN')}
              >
                Design
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                onClick={() => tabHandler('MARKETING')}
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
        </div>

        <div className="tabs-body">
          {courses
            .filter((course) => course.category === activeTab)
            .map((course) => (
              <CoursesCard key={course.id} {...course} />
            ))}
        </div>







      </div>

      <Button>
      <Link to={routes.myJourney()} style={{ textDecoration: 'none', color: '#333' }}>
        My Journey
      </Link>
    </Button>
    </div>
  )
}

export default CourseList








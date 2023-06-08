// import React from 'react';
// import styled from "styled-components";
// import Tabs from "./Tabs";
// import { useCoursesContext } from '../context/courses_context';

// const CourseList = () => {
//   const {courses} = useCoursesContext();

//   return (
//     <CoursesListWrapper>
//       <div className='container'>
//         <div className='courses-list-top'>
//           <h2>A broad selection of courses</h2>
//           <p>Choose from 204,000 online video courses with new additions publihsed every month</p>
//         </div>

//         <Tabs courses = {courses} />
//       </div>
//     </CoursesListWrapper>
//   )
// }

// const CoursesListWrapper = styled.div`
//   padding: 40px 0;
//   .courses-list-top p{
//     font-size: 1.8rem;
//   }
// `;

// export default CourseList
import { useState } from 'react'
// import marketing_2 from '/learning_images/marketing_2.jpg'
// import AddCourseForm from 'src/pages/CoursedetailsPage/CourseForm'
import { courses } from 'src/constants/courses'


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

      {/* <Tabs courses = {courses} /> */}
    </div>
  )
}

export default CourseList








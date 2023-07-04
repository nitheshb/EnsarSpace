import React, { useEffect, useState } from 'react'

import { category } from 'date-fns/locale'
import { BiCheck } from 'react-icons/bi'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import { MdInfo } from 'react-icons/md'
import { RiClosedCaptioningFill } from 'react-icons/ri'
import { TbWorld } from 'react-icons/tb'
import styled from 'styled-components'

import { Link, useParams } from '@redwoodjs/router'

import StarRating from 'src/components/A_LearningModule/StarRatings'
import { courses } from 'src/constants/courses'
import { getCourseDetailsById } from 'src/context/dbQueryFirebase'

const CoursedetailsPage = () => {
  const { id } = useParams()
  // const course = courses.find((p) => p.id === id)
  const [course, setCourse] = useState(null)

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const courseDetails = await getCourseDetailsById(id)
      setCourse(courseDetails)
    }

    fetchCourseDetails()
  }, [id])

  if (!course) {
    return <div>Loading...</div>
  }

  return (
    <SingleCourseWrapper>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-brand"
            style={{
              textDecoration: 'none',
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
              marginLeft: '5%',
            }}
          >
            <span style={{ color: 'Orange' }}>L</span>EARNING
          </Link>
          <ul className="navbar-links" style={{ marginRight: '5%' }}>
            <li className="nav-item">
              <Link to="/bars" className="nav-link">
                <FaBars />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <div key={course.category}>
          <div style={{ backgroundColor: 'black', color: 'white' }}>
            <div className="course-intro mx-auto grid bg-dark">
              <div className="course-details ">
                <div
                  className="course-category"
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    display: 'inline',
                    padding: '5px 10px',
                    borderRadius: '5px',
                  }}
                >
                  {course.category}
                </div>

                <div
                  className="course-head"
                  style={{
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif',
                  }}
                >
                  <h5>{course.course_name}</h5>
                </div>
                <div className="course-body">
                  <p
                    className="course-para fs-18"
                    style={{
                      textDecoration: 'none',
                      fontFamily: ' sans-serif',
                    }}
                  >
                    {course.description}
                  </p>
                  <div className="course-rating flex">
                    <span className="rating-star-val fw-8 fs-16">
                      {course.rating}
                    </span>
                    <StarRating rating={course.rating} count={5} />
                    {/* <span className="rating-count fw-5 fs-14">
                      {course.rating}
                    </span> */}
                    <span className="students-count fs-14">
                      {course.students}
                    </span>
                  </div>

                  <ul className="course-info">
                    <li>
                      <span className="fs-14">
                        Created by{' '}
                        <span className="fw-6 opacity-08">
                          {course.creator}
                        </span>
                      </span>
                    </li>
                    <li className="flex">
                      <span>
                        <MdInfo />
                      </span>
                      <span className="fs-14 course-info-txt fw-5">
                        Latest Updated {course.updated_date}
                      </span>
                    </li>
                    <li className="flex">
                      <span>
                        <TbWorld />
                      </span>
                      <span className="fs-14 course-info-txt fw-5">
                        {course.lang}
                      </span>
                    </li>
                    <li className="flex">
                      <span>
                        <RiClosedCaptioningFill />
                      </span>

                      <span className="fs-14 course-info-txt fw-5">
                        {course.lang} [Auto]
                      </span>
                    </li>
                  </ul>
                </div>

                {/* <div className="course-foot">
                  <div className="course-price">
                    <span className="new-price fs-26 fw-8">
                      ${course.discounted_price}
                    </span>
                    <span className="old-price fs-26 fw-6">
                      ${course.actual_price}
                    </span>
                  </div>
                </div> */}

                <div className="course-price">
                  <button
                    style={{
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontFamily: 'sans-serif',
                      // marginLeft: '5%',
                      backgroundColor: '#b823fc',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '8px 16px',
                      cursor: 'pointer',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    Start Course
                  </button>
                </div>
              </div>

              <img
                src={course.image}
                alt={course.category}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  // borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  maxWidth: '100%',
                }}
                className="responsive-image"
              />
            </div>
          </div>

          {/* <div className="course-full bg-white text-dark">
            <div className="course-learn mx-auto">
              <div className="course-sc-title">What you'll learn</div>
              <ul className="course-learn-list grid">
                {course.what_you_will_learn &&
                  course.what_you_will_learn.map((what_you_will_learn, idx) => {
                    return (
                      <li key={idx}>
                        <span>
                          <BiCheck />
                        </span>
                        <span className="fs-14 fw-5 opacity-09">
                          {what_you_will_learn}
                        </span>
                      </li>
                    )
                  })}
              </ul>
            </div> */}

          <div className="course-full bg-white text-dark">
            <div className="course-learn mx-auto">
              <div className="course-sc-title">What you'll learn</div>
              <p className="fs-14 fw-5 opacity-09">
                {course.what_you_will_learn}
              </p>
            </div>
          </div>

          {/* <div className="course-content mx-auto">
            <div className="course-sc-title">Course content</div>
            <ul className="course-content-list">
              {course.content &&
                course.content.map((contentItem, idx) => {
                  return (
                    <li key={idx}>
                      <span>{contentItem}</span>
                    </li>
                  )
                })}
            </ul>
          </div> */}

          <div className="course-full bg-white text-dark">
            <div className="course-learn mx-auto">
              <div className="course-sc-title">Content</div>
              <ul className="course-learn-list grid">
                <li>
                  <span>
                    <BiCheck />
                  </span>
                  <span className="fs-14 fw-5 opacity-09">
                    {course.content}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SingleCourseWrapper>
  )
}

const SingleCourseWrapper = styled.div`
  background: var(--clr-dark);
  color: var(--clr-white);

  .course-intro{
    padding: 40px 16px;
    max-width: 992px;

    .course-details{
      padding-top: 20px;
    }



    .course-category{
      padding: 0px 8px;
      border-radius: 6px;
    }

    .course-head{
      font-size: 38px;
      line-height: 1.2;
      padding: 12px 0 0 0;
    }
    .course-para{
      padding: 12px 0;
    }
    .rating-star-val{
      margin-right: 7px;
      padding-bottom: 5px;
      color: var(--clr-orange);
    }
    .students-count{
      margin-left: 8px;
    }
    .rating-count{
      margin-left: 6px;
      color: #d097f6;
    }
    .course-info{
      li{
        margin-bottom: 2px;
        &:nth-child(2){
          margin-top: 10px;
        }
      }
      .course-info-txt{
        text-transform: capitalize;
        margin-left: 8px;
        margin-bottom: 4px;
      }
    }
    .course-price{
      margin-top: 12px;
      .old-price{
        color: #eceb98;
        text-decoration: line-through;
        margin-left: 10px;
      }
    }
    .course-btn{
      margin-top: 16px;
      .add-to-cart-btn{
        padding: 12px 28px;
        span{
          margin-left: 12px;
        }
      }
    }

    @media (max-width: 768px) {
      .responsive-image {
        width: 100%;
        height: auto;
      }
    }


    @media screen and (min-width: 880px){
      grid-template-columns: repeat(2, 1fr);
      column-gap: 40px;
      .course-details{
        padding-top: 0;
      }
      .course-img{
        order: 2;
      }
    }

    @media screen and (min-width: 1400px){
      grid-template-columns: 60% 40%;
    }
  }

  .course-full{
    padding: 40px 16px;
    .course-sc-title{
      font-size: 22px;
      font-weight: 700;
      margin: 12px 0;
    }
    .course-learn{
      max-width: 992px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-learn-list{
        li{
          margin: 5px 0;
          display: flex;
          span{
            &:nth-child(1){
              opacity: 0.95;
              margin-right: 12px;
            }
          }
        }

        @media screen and (min-width: 992px){
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }

    .course-content{
      max-width: 992px;
      margin-top: 30px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-content-list{
        li{
          background-color: #f7f9fa;
          padding: 12px 18px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: 10px;
          font-weight: 800;
          font-size: 15px;
        }
      }
    }
  }



  .navbar {
    background-color: #f2f2f2;
    padding: 16px;
  }

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-brand {
    color: #333;
    font-size: 24px;
    text-decoration: none;
  }

  .navbar-links {
    list-style-type: none;
    display: flex;
  }

  .nav-item {
    margin-right: 10px;
  }

  .nav-link {
    color: #333;
    text-decoration: none;
    font-size: 18





`

export default CoursedetailsPage

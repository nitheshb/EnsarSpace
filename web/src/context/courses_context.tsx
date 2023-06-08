// import { Link, routes } from '@redwoodjs/router'
// import { MetaTags } from '@redwoodjs/web'

// const CoursedetailsPage = () => {
//   return (
//     <>
//       <MetaTags title="Coursedetails" description="Coursedetails page" />

//       <h1>CoursedetailsPage</h1>
//       <p>
//         Find me in <code>./web/src/pages/CoursedetailsPage/CoursedetailsPage.tsx</code>
//       </p>
//       <p>
//         My default route is named <code>coursedetails</code>, link to me with `
//         <Link to={routes.coursedetails()}>Coursedetails</Link>`
//       </p>
//     </>
//   )
// }

// import { Link, routes } from '@redwoodjs/router'
// import { MetaTags } from '@redwoodjs/web'

// const CoursedetailsPage = () => {
//   return (
//     <>
//       <MetaTags title="Coursedetails" description="Coursedetails page" />
//         {/* <Link to={routes.coursedetails()}>Coursedetails</Link>` */}

//     </>
//   )
// }

// export default CoursedetailsPage

// import React, { useEffect, useState } from 'react'
import { Link, useParams } from '@redwoodjs/router'
import StarRating from 'src/components/A_LearningModule/StarRatings'
import { MdInfo } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import { RiClosedCaptioningFill } from 'react-icons/ri'
import { BiCheck } from 'react-icons/bi'
import styled from 'styled-components'
import CourseList from 'src/components/A_LearningModule/CoursesList'
// import { CoursesContext } from 'src/context/courses_context'

const CourseDetailsPagee = (CourseList) => {

  const {id} = useParams();


  const {
    id: courseID,
    category,
    image,
    course_name,
    description,
    rating_count,
    rating_star,
    students,
    creator,
    updated_date,
    lang,
    actual_price,
    discounted_price,
    what_you_will_learn: learnItems,
    content,
  } = CourseList




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


            {/* <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <FaShoppingCart />
              </Link>
            </li> */}
            {/* <Link to={routes.coursedetails()}>Coursedetails</Link>` */}
            <li className="nav-item">
              <Link to="/bars" className="nav-link">
                <FaBars />
              </Link>
            </li>
          </ul>
        </div>
      </nav>




      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <div className="course-intro mx-auto grid bg-dark">
        <div className="item-img">
        <img src='learning_images/python_5.jpg' alt={course_name} className='w-full'/>
      </div>
          <div className="course-details ">

          <div className="course-category" style={{ backgroundColor: 'white', color: 'black' ,   display: 'inline', padding: '5px 10px', borderRadius: '5px' }}>
            python
          </div>

            <div className="course-head"
            style={{
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
            }}>
              <h5>Learn Python: The Complete Python Programming <br/>Course</h5>
            </div>
            <div className="course-body">
              <p className="course-para fs-18"
              style={{
                textDecoration: 'none',
                fontFamily: ' sans-serif',

              }}>Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!</p>
              <div className="course-rating flex">
                <span className="rating-star-val fw-8 fs-16">
                  4.4
                </span>
                <StarRating rating_star={rating_star} />
                <span className="rating-count fw-5 fs-14">
                  (3059)
                </span>
                <span className="students-count fs-14">18430</span>
              </div>

              <ul className="course-info">
                <li>
                  <span className="fs-14">
                    Created by{' '}
                    <span className="fw-6 opacity-08">Avinash Jain, The Codex</span>
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <MdInfo />
                  </span>
                  <span className="fs-14 course-info-txt fw-5">
                    Last updated 9/2015
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <TbWorld />
                  </span>
                  {/* <span className="fs-14 course-info-txt fw-5">{lang}</span> */}
                  <span className="fs-14 course-info-txt fw-5">English</span>
                </li>
                <li className="flex">
                  <span>
                    <RiClosedCaptioningFill />
                  </span>
                  {/* <span className="fs-14 course-info-txt fw-5">
                    {lang} [Auto]
                  </span> */}
                  <span className="fs-14 course-info-txt fw-5">
                    English [Auto]
                  </span>
                </li>
              </ul>
            </div>

            <div className="course-foot">
              <div className="course-price">
                <span className="new-price fs-26 fw-8">
                  $9.99
                </span>
                <span className="old-price fs-26 fw-6">$ 84.99</span>
              </div>
            </div>


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
                Add to Cart
              </button>


              </div>


          </div>
        </div>
      </div>














      <div className="course-full bg-white text-dark">
        <div className="course-learn mx-auto">
          <div className="course-sc-title">What you'll learn</div>
          <ul className="course-learn-list grid">
       {learnItems &&
    learnItems.map((learnItem, idx) => {
      return (
        <li key={idx}>
          <span>
            <BiCheck />
          </span>
          <span className="fs-14 fw-5 opacity-09">{learnItem}</span>
        </li>
      );
    })}
</ul>
 </div>


        <div className="course-content mx-auto">
          <div className="course-sc-title">Course content</div>
          <ul className="course-content-list">
    {content &&
      content.map((contentItem, idx) => {
        return (
          <li key={idx}>
            <span>{contentItem}</span>
          </li>
        );
      })}

  </ul>
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





`;



export default CourseDetailsPagee



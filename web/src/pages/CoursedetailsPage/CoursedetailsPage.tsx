import React from 'react'
import { navigate, Link, useParams } from '@redwoodjs/router'
import StarRating from 'src/components/A_LearningModule/StarRatings'
import { MdInfo } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import { FaBars, FaPlay, FaShoppingCart } from 'react-icons/fa'
import { RiClosedCaptioningFill } from 'react-icons/ri'
import { BiCheck } from 'react-icons/bi'
import { courses } from 'src/constants/courses'
import styled from 'styled-components'
import { BsClock, BsFileText, BsLink45Deg, BsDownload } from 'react-icons/bs';
import StartCourseButton from 'src/components/A_LearningModule/LearningModules/StartCourse'




const CoursedetailsPage = () => {
  // const navigate = useNavigate();
  const { category } = useParams();
  const course = courses.find((p) => p.category === category)

  console.log('course', course)

  const handleStartCourse = () => {
    // await storeCourseDetails(orgId, uid, course);

    navigate('/my-journey');
  };

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
                      {course.rating_star}
                    </span>
                    <StarRating rating_star={course.rating_star} />
                    <span className="rating-count fw-5 fs-14">
                      {course.rating_count}
                    </span>
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
                  {/* <button
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
                    onClick={handleStartCourse}
                  >
                 Start Course
                  </button> */}
                </div>
              </div>


              <div className="enroll-card">




                <div className="enroll-image">
                  <img src="https://img-c.udemycdn.com/course/750x422/1448458_d1b3_3.jpg" alt="Enroll" />
                  <div className="play-button">
                    <FaPlay />
                  </div>
                </div><br/>

                {/* <div className="enroll-content"><br />
                  <button onClick={handleStartCourse}> Start Course</button>
                </div> */}

                <StartCourseButton course={course} />

                <div className="course-content">
                  <h3>Course Content</h3>
                  <div className="content-item">
                    <BsClock className="content-icon" />
                    <p>
                      <span className="content-label">Watch Hours:</span> 10 hours
                    </p>
                  </div>
                  <div className="content-item">
                    <BsFileText className="content-icon" />
                    <p>
                      <span className="content-label">Articles:</span> 5 articles
                    </p>
                  </div>
                  <div className="content-item">
                    <BsLink45Deg className="content-icon" />
                    <p>
                      <span className="content-label">Resources:</span> 3 resources
                    </p>
                  </div>
                  <div className="content-item">
                    <BsDownload className="content-icon" />
                    <p>
                      <span className="content-label">Downloads:</span> 2 downloads
                    </p>
                  </div>
                </div>

              </div>
              {/* <img
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
              /> */}

            </div>
          </div>

          <div className="course-full bg-white text-dark">
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
            </div>

            <div className="course-content mx-auto">
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
            </div>
          </div>

        </div>
      </div>
    </SingleCourseWrapper>
  )
}

const SingleCourseWrapper = styled.div`

.enroll-image {
  position: relative;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.play-button i {
  color: #fff;
  font-size: 24px;
}









.course-content {
  margin-top: 30px;
}

.content-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.content-icon {
  font-size: 24px;
  margin-right: 10px;
  color:black;
}

.content-label {
  font-weight: bold;
  margin-right: 5px;
}


.enroll-card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}



.enroll-content h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.enroll-content p {
  margin-bottom: 10px;
}

.enroll-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background-color: white;

}

.enroll-content h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.enroll-content p {
  margin-bottom: 20px;
}

.enroll-content button {
  background-color: #b823fc;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.enroll-content button:hover {
  background-color: #9c1ae6;
}

.course-content {
  margin-top: 20px;
}

.course-content h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color:black;
}

.course-content p {
  margin-bottom: 10px;
  color:black;

}


  background: var(--clr-dark);
  color: var(--clr-orange);

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





  /* Journey Panel */
  .journey-panel {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    z-index: 10;
    overflow-x: hidden;
    transition: transform 0.3s ease;
    transform: translateX(-100%);
  }

  .journey-panel.open {
    transform: translateX(0);
  }

  .close-button {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    text-align: center;
    background-color: #f8f8f8;
    border-top: 1px solid #e0e0e0;
    cursor: pointer;
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

export default CoursedetailsPage

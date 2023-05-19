import React from 'react'


import { Link } from '@redwoodjs/router/dist/links'

import StarRating from './StarRatings'
import styled from 'styled-components'


const CoursesCard = (props) => {
  const {
    id,
    image,
    course_name,
    creator,
    actual_price,
    discounted_price,

// Remove Unwanted Data


    rating_count,
    rating_star,
    category,
  } = props

  // const courses = [
  //   {
  //     id: 'xMHCZl',
  //     category: 'python',
  //     image: 'learning_images/python_5.jpg',
  //     course_name: 'Learn Python: The Complete Python Programming Course',
  //     description:
  //       'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
  //     rating_count: 3059,
  //     rating_star: 4.4,
  //     students: 18430,
  //     creator: 'Avinash Jain, The Codex',
  //     updated_date: '9/2015',
  //     lang: 'english',
  //     actual_price: 84.99,
  //     discounted_price: 9.99,
  //     what_you_will_learn: [
  //       'Create their own Python Programs',
  //       'Become an experienced Python Programmer',
  //       'Parse the Web and Create their own Games',
  //     ],
  //     content: [
  //       'Up and Running With Python',
  //       'The Basics(Data Types)',
  //       'Conditions and Loops',
  //       'Functions!',
  //       'Classes! (Object Oriented Programming)',
  //       'File Input/Output',
  //       'Using Python Modules',
  //     ],
  //   },
  //   {
  //     id: 'dtfo9e',
  //     category: 'python',
  //     image: 'learning_images/python_4.jpg',
  //     course_name: 'Learning Python for Data Analysis and Visualization',
  //     description:
  //       'Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!',
  //     rating_count: 3059,
  //     rating_star: 4.3,
  //     students: 184053,
  //     creator: 'Jose Portilla',
  //     updated_date: '9/2019',
  //     lang: 'english',
  //     actual_price: 84.99,
  //     discounted_price: 9.99,
  //     what_you_will_learn: [
  //       'Have an intermediate skill level of Python programming.',
  //       'Use the numpy library to create and manipulate arrays.',
  //       'Learn how to work with various data formats within python, including: JSON,HTML, and MS Excel Worksheets.',
  //       'Have a portfolio of various data analysis projects.',
  //     ],
  //     content: [
  //       'Intro to Course and Python',
  //       'Learning Numpy',
  //       'Data Visualization',
  //       'Example Projects',
  //       'Machine Learning',
  //       'SQL and Python',
  //       'Web Scraping with Python',
  //     ],
  //   },
  // ];

  return (

    <div className="CourseCard">
      <div className="item-img">
        <img src={image} alt={course_name} className='w-full'/>
      </div>
      <div className="item-body">
        <h5 className="item-name">{course_name}</h5>
        <span className="item-creator">{creator}</span>
        <div className="item-rating flex">
          <span className="rating-star-val">{rating_star}</span>
          <StarRating rating_star={rating_star} />
          <span className="rating-count">({rating_count})</span>
        </div>
        <div className="item-price">
          <span className="item-price-new">${discounted_price}</span>
          <span className="item-price-old">${actual_price}</span>
        </div>
      </div>
      <div className="item-btns flex">
        {/* <Link to={`/courses/${id}`} className="item-btn see-details-btn">
          See details
        </Link> */}

        <Link to={`/coursedetails`} className="item-btn see-details-btn">
          See Details
        </Link>



        {/* <Link
          to="/cart"
          className="item-btn add-to-cart-btn"
          onClick={() =>
            addToCart(
              id,
              image,
              course_name,
              creator,
              discounted_price,
              category
            )
          }
        >
          Add to cart
        </Link> */}
      </div>
    </div>








//     <div>
//     <div className="CourseCard">
//     {courses.map((course) => (
//       <div key={course.id}>
//         <div className="item-img">
//        <img src={course.image} alt={course.course_name} className='w-full'/>
//       </div>

//       <div className="item-body">
//          <h5 className="item-name">{course.course_name}</h5>
//          <span className="item-creator">{course.creator}</span>
//        <div className="item-rating flex">
//            <span className="rating-star-val">{course.rating_star}</span>
//            <StarRating rating_star={course.rating_star} />
//            <span className="rating-count">({course.rating_count})</span>
//         </div>
//          <div className="item-price">
//          <span className="item-price-new">${course.discounted_price}</span>
//           <span className="item-price-old">${course.actual_price}</span>

//           <Link to={`/coursedetails/${course.id}`} className="item-btn see-details-btn">
//            See Details
//          </Link>
//          </div>
//        </div>



// </div>
//     ))}
//   </div>
//   </div>


  )
}

const CourseCard = styled.div`
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  .item-body {
    margin: 14px 0;
    padding: 4px 18px;

    .item-name {
      font-size: 15px;
      line-height: 1.4;
      font-weight: 800;
    }
    .item-creator {
      font-size: 12.5px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
    }
    .rating-star-val {
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 800;
      color: #b4690e;
      margin-right: 6px;
    }
    .rating-count {
      font-size: 12.5px;
      margin-left: 3px;
      font-weight: 500;
      opacity: 0.8;
    }
    .item-price-new {
      font-weight: 700;
      font-size: 15px;
    }
    .item-price-old {
      opacity: 0.8;
      font-weight: 500;
      text-decoration: line-through;
      font-size: 15px;
      margin-left: 8px;
    }
  }

  .item-btns {
    justify-self: flex-start;
    padding: 4px 8px 30px 18px;
    margin-top: auto;
    .item-btn {
      font-size: 15px;
      display: inline-block;
      padding: 6px 16px;
      font-weight: 700;
      transition: var(--transition);
      white-space: nowrap;

      &.see-details-btn {
        background-color: transparent;
        border: 1px solid var(--clr-black);
        margin-right: 5px;

        &:hover {
          background-color: rgba(0, 0, 0, 0.9);
          color: var(--clr-white);
        }
      }

      &.add-to-cart-btn {
        background: rgba(0, 0, 0, 0.9);
        color: var(--clr-white);
        border: 1px solid rgba(0, 0, 0, 0.9);

        &:hover {
          background-color: transparent;
          color: rgba(0, 0, 0, 0.9);
        }
      }
    }
  }
`;

export default CoursesCard

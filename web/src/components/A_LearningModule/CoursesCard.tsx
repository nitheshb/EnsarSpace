
import React from 'react'




import styled from 'styled-components'




import { Link } from '@redwoodjs/router'




import StarRating from './StarRatings'




const CoursesCard = ({

  id,

  image,

  course_name,

  creator,

  // actual_price,

  // discounted_price,

  rating_count,

  rating_star,

  rating,

  category,

}) => {

  return (

    <CourseCard>

      <div className="item-img">

        <img src={image} alt={course_name} className="w-full" />

      </div>

      <div className="item-body">

        <h5 className="item-name">{course_name}</h5>

        <span className="item-creator">{creator}</span>

        <div className="item-rating flex">

          <StarRating rating={rating} count={5} size={undefined} activeColor={undefined} />

          <span className="rating-count">({rating_count})</span>

        </div>

        {/* <div className="item-price">

          <span className="item-price-new">${discounted_price}</span>

          <span className="item-price-old">${actual_price}</span>

        </div> */}

      </div>

      <div className="item-btns flex">

        <Link to={`/courses/${id}`} className="item-btn see-details-btn">

          See details

        </Link>

      </div>

    </CourseCard>

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

    .item-rating {

      display: flex;

      align-items: center;

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

          color: white;

        }

      }

    }

  }

`




export default CoursesCard



import React from 'react'


import { Link } from '@redwoodjs/router/dist/links'

import StarRating from './StarRatings'

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
        {/* <div className="item-price">
          <span className="item-price-new">${discounted_price}</span>
          <span className="item-price-old">${actual_price}</span>
        </div> */}
      </div>
      <div className="item-btns flex">
        <Link to={`/courses/${id}`} className="item-btn see-details-btn">
          See details
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
  )
}



export default CoursesCard

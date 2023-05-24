import React from 'react'


import { StarBorder, StarHalf, StarOutline } from '@mui/icons-material'
import styled from 'styled-components'

const StarRating = ({ rating_star }) => {
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const val = idx + 0.5
    return (
      <Star key={idx}>
        {rating_star >= idx + 1 ? (
          <StarOutline />
        ) : rating_star >= val ? (
          <StarHalf />
        ) : (
          <StarBorder />
        )}
      </Star>
    )
  })

  return <div>{stars}</div>
}

const Star = styled.span`
  color: #e59819;
  margin-right: 2px;
  font-size: 13px;
  margin-bottom: -5px !important;
`

export default StarRating

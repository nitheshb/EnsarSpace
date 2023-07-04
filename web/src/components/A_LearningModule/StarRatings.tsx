import React from 'react'

import { Star, StarHalf, StarBorder } from '@mui/icons-material'
import styled from 'styled-components'

const StarRating = ({ count, size, activeColor, rating }) => {
  const stars = []
  const roundedRating = Math.round(rating * 2) / 2

  for (let i = 0; i < count; i++) {
    if (i < roundedRating) {
      stars.push(<Star key={i} />)
    } else if (i === Math.floor(roundedRating) && roundedRating % 1 !== 0) {
      stars.push(<StarHalf key={i} />)
    } else {
      stars.push(<StarBorder key={i} />)
    }
  }

  return (
    <StarContainer size={size} activeColor={activeColor}>
      <RatingNumber>{rating}</RatingNumber>
      {stars}
    </StarContainer>
  )
}

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.activeColor || '#e59819'};
  font-size: ${(props) => props.size || '13px'};
  margin-bottom: -5px !important;
`

const RatingNumber = styled.span`
  margin-right: 5px;
  font-size: 13px;
  font-weight: bold;
  color: #000;
`

export default StarRating

// import React from 'react'

// import { StarBorder, StarHalf, StarOutline } from '@mui/icons-material'
// import styled from 'styled-components'

// const StarRating = ({ rating_star }) => {
//   const stars = Array.from({ length: 5 }, (_, idx) => {
//     const val = idx + 0.5

//     return (
//       <Star key={idx}>
//         {rating_star >= idx + 1 ? (
//           <StarOutline />
//         ) : rating_star >= val ? (
//           <StarHalf />
//         ) : (
//           <StarBorder />
//         )}
//       </Star>
//     )
//   })

//   return <div>{stars}</div>
// }

// const Star = styled.span`
//   color: #e59819;

//   margin-right: 2px;

//   font-size: 13px;

//   margin-bottom: -5px !important;
// `

// export default StarRating

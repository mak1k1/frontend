import React from 'react'

const Rating = ({ value, text, color, totalStars = 5 }) => {
    const stars =[]
    for (let countStar = 0; countStar < totalStars; countStar++) {
        stars.push(
            <i
            key={countStar}
            style={{ color }}
            className={
                value - countStar > 0.5
                    ? "fas fa-star"
                    : value - countStar === 0.5
                        ? "fas fa-star-half-alt"
                        : "far fa-star"
            }
            ></i>
        )
    }
  return (
    <div className="rating">
        <span>{stars}</span>
        <span>{text && text}</span>
    </div>
  )
}

export default Rating
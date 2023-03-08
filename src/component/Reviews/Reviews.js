import React from 'react'
import style from './Reviews.module.css'

const Reviews = ({review}) => {
  
  return (
    <div className={style.review_box}>
      {review.results.map((data) => {
        return (
          <div key={data.id} className={style.review_wrap}>
            <div>{data.author_details.username}</div>
            <div>{data.content}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Reviews
import React from 'react'
import style from './Credits.module.css'

// https://www.themoviedb.org/t/p/w138_and_h175_face/tlAX3f82Mf5h0rznpVBVK7nD2om.jpg
const Credits = ({credit}) => {
  return (
    <div className={style.credits_box}>
      <div>cast</div>
      <div className={style.credit_wrap}>
        {credit.map((data) => {
            return (
              <div key={data.id} >
                {data.profile_path &&
                <div className={style.credit_title}>
                  <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${data.profile_path}`} />
                  <div>{data.name}</div>
                </div>
                }
              </div>
            )
          })}
      </div>
        
    </div>
  )
}

export default Credits
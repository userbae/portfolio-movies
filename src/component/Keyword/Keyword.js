import React from 'react'
import style from './Keyword.module.css'

const Keyword = ({genres}) => {
  return (
    <div className={style.Keyword_box}>
      <div>genres</div>
      <div className={style.Keyword_wrap}>
      {genres.map((data) => {
        return (
          <div key={data.id}>
            {data.name}
          </div>
        )
      })}
      </div>
      
    </div>
  )
}

export default Keyword
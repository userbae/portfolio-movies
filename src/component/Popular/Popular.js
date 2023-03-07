import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Popular.module.css'

const Popular = ({pop}) => {
  console.log(pop)
  const navigate = useNavigate()
  return (
    <div className={style.pop_box}>
      <h2>Popular</h2>
      <div className={style.pop_wrap}>
        {pop.map((data)=>{
          return(
            <div key={data.id} 
            className={style.pop_img}
            onClick={() => {
              navigate(`/detail/${data.id}`)
            }}>
              <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`} />
              <div className={style.pop_title}>
              <div>{data.original_title}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Popular
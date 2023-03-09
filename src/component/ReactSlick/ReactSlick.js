import React from 'react'
import style from'./ReactSlick.module.css';
import { useNavigate } from 'react-router-dom';

const ReactSlick = ({pop}) => {
  const navigate = useNavigate();
  
  
  return (
    <div>
      <div>
        <div className={style.slick_slide}>
        {pop.map((data)=>{
            return (
              <div key={data.id} 
              onClick={()=>{navigate(`/detail/${data.id}`)}}>
                <img src={`https://www.themoviedb.org/t/p/w150_and_h225_face${data.poster_path}`} />
                <div className={style.slick_slide_title}>
                Score {data.vote_average}
                  <div>{data.original_title}</div>
                </div>
              </div>
            )
          })}
        </div>
        



      </div>
    </div>
  )
}

export default ReactSlick
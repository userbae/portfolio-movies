import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from'./ReactSlick.module.css';
import { useNavigate } from 'react-router-dom';

const ReactSlick = ({pop}) => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    
  };

  
  
  return (
    <div>
      <div>
        <Slider {...settings}>
          {pop.map((data)=>{
            return (
              <div key={data.id} className={style.slick}
              onClick={()=>{navigate(`/detail/${data.id}`)}}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`} />
                <div className={style.slick_title}>
                  <div>{data.original_title}</div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default ReactSlick
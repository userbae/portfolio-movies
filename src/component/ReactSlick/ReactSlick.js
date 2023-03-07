import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from'./ReactSlick.module.css'

const ReactSlick = ({pop}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    // arrows:false,
  };
  
  return (
    <div>
      <div>
        <Slider {...settings}>
          {pop.map((data)=>{
            return (
              <div key={data.id}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`} />
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default ReactSlick
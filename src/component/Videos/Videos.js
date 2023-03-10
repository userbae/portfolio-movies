import React from 'react'
import style from './Videos.module.css'
import ReactPlayer from 'react-player'

const Videos = ({video}) => {
  return (
    <div className={style.video_box}>
      <div>video</div>
      
      <div className={style.video_wrap}>
        {video.results.map((data) => {
          return(
            <div key={data.key}> 
              <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${data.key}`}
              /> 
              </div>
          )
        })}
      </div>
      
      
      
    </div>
  )
}

export default Videos
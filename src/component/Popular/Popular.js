import React from 'react'
import ReactSlick from '../ReactSlick/ReactSlick'
import style from './Popular.module.css'

const Popular = ({pop, com}) => {
  return (
    <div className={style.pop_box}>
      <h2>the current popular movies</h2>
      <ReactSlick pop={pop}/>
      <h2>the top rated movies </h2>
      <ReactSlick pop={com}/>

    </div>
  )
}

export default Popular
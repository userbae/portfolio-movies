import React from 'react'
import ReactSlick from '../ReactSlick/ReactSlick'
import style from './Popular.module.css'

const Popular = ({pop}) => {
  console.log(pop)
  return (
    <div className={style.pop_box}>
      <h2>Popular</h2>
      <ReactSlick pop={pop}/>
    </div>
  )
}

export default Popular
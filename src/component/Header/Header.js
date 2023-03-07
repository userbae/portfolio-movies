import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.Header_box}>
      <h1>Movies</h1>
      <ul className={style.Ul}>
        <li>검색</li>
      </ul>
    </div>
  )
}

export default Header
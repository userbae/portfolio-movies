import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Header.module.css'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={style.Header_box}>
      <h1 onClick={() =>{
        navigate('/')
      }}>Movies</h1>
      <ul className={style.Ul}>
        <li>검색</li>
      </ul>
    </div>
  )
}

export default Header
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Search.module.css'

const API_KEY = process.env.REACT_APP_API_KEY
const Search = () => {
  const [search, setSearch] = useState();
  const [searchData, setSearchData] = useState([]);

  const navigtae = useNavigate();
  const Api = async () => {
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`)
    .then((res)=>{
      console.log(res.data.results)
      setSearchData(res.data.results)
    })
  }

  useEffect(() => {
    Api()
  }, [search])
  return (
    <div className={style.search_box}>
      <div className={style.search_input}>
        <input type='text' 
        placeholder='영회제목 검색'
        onChange={(e) => {
          setSearch(e.target.value)
        }}/>
      </div>
      
    <div>
      {searchData.map((data)=>{
        return (
          <div className={style.search_wrap}
          key={data.id}
          onClick={() => {
            navigtae(`/detail/${data.id}`)
          }}
          >
            <img src={`https://www.themoviedb.org/t/p/w150_and_h225_face${data.poster_path}`} />
            <div>
              <div>{data.original_title} </div>
              <div>({data.release_date})</div>
              <div>language : {data.original_language}</div>
              <div>{data.adult && <div>청소년 이용 불가</div>}</div>
              <div>Score {data.vote_average}</div>
              <div className={style.search_intro}>{data.overview}</div>
            </div>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default Search
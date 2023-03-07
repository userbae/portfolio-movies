import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Revieiws from '../../component/Reviews/Revieiws'
import Videos from '../../component/Videos/Videos'
import style from './PopularDetail.module.css'


const API_KEY = process.env.REACT_APP_API_KEY
const PopularDetail = () => {
  const [detail, setDetail] = useState();
  const [review, setReview] = useState();
  const [video, setVideo] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams()

  const Api = async () => {
    await axios.all(
      [axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`),
      axios.get(`https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=${API_KEY}&language=en-US&page=1`),
      axios.get(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${API_KEY}&language=en-US`)])
      .then((res) => {
        setDetail(res[0].data)
        setReview(res[1].data)
        setVideo(res[2].data)
        setLoading(true)
      })
  }
  useEffect(() => {
    Api()
  }, [loading])
  return (
  <div>
    {loading ? 
    <div className={style.detail_box}>
      <div className={style.intro_box}>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${detail.poster_path}`} />
        <div>
          <h2>{detail.original_title}</h2>
          {detail.adult && <div>청소년 이용 불가</div>}
          <h3>overview</h3>
          <h4>{detail.overview}</h4>
      </div>

        </div>
        <Videos video={video}/>
        <Revieiws review={review}/>
    </div> : <div>로딩중....</div>}
  </div>)

}

export default PopularDetail
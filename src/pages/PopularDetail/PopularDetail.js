import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailNav from '../../component/DetailNav/DetailNav'
import Reviews from '../../component/Reviews/Reviews'
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
    <DetailNav />
    {loading ? 
    <div className={style.detail_box}>
      <div className={style.intro_box} 
      style={{backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path})`, backgroundSize: 'cover'}}>
        <div className={style.intro_title} style={{backgroundImage: 'linear-gradient(to right, rgba(31.5, 31.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 10.5, 0.84) 50%, rgba(31.5, 31.5, 10.5, 0.84) 100%)'}}>
          <div>
          <img src={`https://www.themoviedb.org/t/p/w300_and_h450_face${detail.poster_path}`} />
          <div>
            <h2>{detail.original_title}</h2>
            Score {detail.vote_average}
            {detail.adult && <div>청소년 이용 불가</div>}
            <h3>overview</h3>
            <h4>{detail.overview}</h4>
          </div>
          </div>
          </div>
          
        
      </div>
        <Videos video={video}/>
        {/* <Reviews review={review}/> */}
    </div> : <div>로딩중....</div>}
  </div>)

}

export default PopularDetail
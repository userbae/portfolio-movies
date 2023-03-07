import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './pages/Home/Home';
import PopularDetail from './pages/PopularDetail/PopularDetail';


const API_KEY = process.env.REACT_APP_API_KEY
function App() {
  const [pop, setPop] = useState([]);
  const Api = async () => {
    await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        setPop(res.data.results)
      })
  }
  useEffect(() => {
    Api()
  }, [])

  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home pop={pop}/>} />
        <Route path='/detail/:id' element={<PopularDetail />} />
      </Routes>
    </div>
  );
}

export default App;

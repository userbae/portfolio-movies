import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './pages/Home/Home';
import PopularDetail from './pages/PopularDetail/PopularDetail';
import Search from './pages/Search/Search';


const API_KEY = process.env.REACT_APP_API_KEY
function App() {
  const [pop, setPop] = useState([]);
  const [com, setCom] = useState([]);

  const Api = async () => {
    await axios.all(
      [axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`),
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)])
      .then((res) => {
        setPop(res[0].data.results)
        setCom(res[1].data.results)
      })
  }
  useEffect(() => {
    Api()
  }, [])

  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home pop={pop} com={com}/>} />
        <Route path='/detail/:id' element={<PopularDetail />} />
        <Route path='/search' element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

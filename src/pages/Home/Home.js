import React from 'react'
import Popular from '../../component/Popular/Popular'

const Home = ({pop, com}) => {
    console.log(pop, com)
  return (
    <div>

      <Popular pop={pop}/>
      <Popular pop={com}/>

    </div>
  )
}

export default Home
import React from 'react'
import Popular from '../../component/Popular/Popular'

const Home = ({pop, com}) => {
  return (
    <div>
      <Popular pop={pop} com={com}/>
    </div>
  )
}

export default Home
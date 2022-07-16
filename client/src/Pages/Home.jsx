import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Welcome, Timeline } from '../Components'

const Home = () => {
  return (
    <div>
          <Routes>
                <Route path='/' element={ <Welcome />  }/>
                <Route path='/timeline' element={ <Timeline />  }/>
          </Routes>
    </div>
  )
}

export default Home
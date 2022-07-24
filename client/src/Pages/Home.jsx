import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Welcome, Timeline, Sidebar } from '../Components'

const Home = () => {
  return (
    <div>
    <Sidebar />
          <Routes>
                <Route path='/timeline' element={ <Timeline />  }/>
          </Routes>
    </div>
  )
}

export default Home
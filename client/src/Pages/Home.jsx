import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Welcome, Timeline, Sidebar } from '../Components'
import { useStateContext } from '../Contexts/Context';


const Home = () => {
      const { sidebar, setSideBar } =  useStateContext();
        console.log(sidebar)

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
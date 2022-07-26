import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Welcome, Timeline, Sidebar } from '../Components'
import { useStateContext } from '../Contexts/Context';


const Home = () => {
      const { sideBar, setSideBar } =  useStateContext();
  console.log(sideBar)
        



  return (
    <div>
            <Routes>
                <Route path='/' element={ <Welcome />  }/>
                <Route path='/settings' element={ <Timeline />  }/>

          </Routes>
    </div>
  )
}

export default Home
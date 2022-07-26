import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import {Home} from './Pages/index'
import { useStateContext } from './Contexts/Context';

import { Welcome, Timeline, Sidebar } from './Components/index'


function App() {
  const { sideBar, setSideBar } = useStateContext();
    console.log(sideBar)
  return (
    <div>
    
      <div className='flex flex-row  justify-between'>
      {

      }
          <Routes>
            <Route exact path='/welcome' element={ <Welcome />} />
            <Route exact path='/timeline' element={ <Timeline />} />
          </Routes>
      </div>
    </div>
  );
}

export default App
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import {Home} from './Pages/index'
import { useStateContext } from './Contexts/Context';
import { Welcome, Timeline, Sidebar } from './Components/index'
import {Products} from './Pages/index'


function App() {
  const { sideBar, setSideBar } = useStateContext();
    console.log(sideBar)
  return (
   
      <div className={` ${sideBar} ? 'bg-stone-200 flex flex-row '
            : ' '    `}>
      {
          sideBar ? <Sidebar />
          : console.log('first')
      }
          <Routes>
          <Route exact path='/timeline' element={ <Timeline />} />
            <Route exact path='/friends' element={ <Welcome />} />
            <Route exact path='/products' element={ <Products />} />
          </Routes>
      </div>
   
  );
}

export default App
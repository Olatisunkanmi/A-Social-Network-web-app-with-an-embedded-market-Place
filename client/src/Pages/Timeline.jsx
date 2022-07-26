import React from 'react';
import { Header, Upload, Sidebar  } from '../Components';
import { useStateContext } from '../Contexts/Context';
import '../App.css'

const Timeline = () => {
  const { sideBar, setSideBar } =  useStateContext();
  return (
        <div 
        className={` text-white flex flex-col p-20
        ${sideBar ? 'w-3/4 ' 
            : 'sidebar-toggle' }`}>
            <Header />
            <p> Hello </p>
          </div>
  )
}

export default Timeline
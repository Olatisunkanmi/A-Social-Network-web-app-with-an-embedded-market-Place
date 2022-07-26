import React from 'react';
import { Header, Upload  } from '../Components';
import { useStateContext } from '../Contexts/Context';
import '../App.css'

const Timeline = () => {
  const { sideBar, setSideBar } =  useStateContext();
  return (
        <div 
        className={` text-black flex flex-col p-20
        md:w-full
        ${sideBar ? 'w-3/4 ' 
            : 'sidebar-toggle' }`}>
            <Header />
            
                  <div className=''>

                          {/** Feed Section  */}
                              <div 
                                className='w-4/6'>
                                  <Upload />
                              </div>


                          {/** Stories Section  */}


                              <div className='w-2/5'>
                              
                              </div>
                  </div>
          </div>
  )
}

export default Timeline
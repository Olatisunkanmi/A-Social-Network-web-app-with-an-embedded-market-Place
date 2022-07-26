import React from 'react';
import { Header, Upload, Story  } from '../Components';
import { useStateContext } from '../Contexts/Context';
import '../App.css'

const Timeline = () => {
  const { sideBar, setSideBar } =  useStateContext();
  return (
    <div 
    className={` text-black flex flex-col p-20 
    ${sideBar ? 'w-9/12  ' 
        : 'w-9/12 m-auto' }`}>
            <Header />
            
                  <div className='flex flex-row'>

                          {/** Feed Section  */}
                              <div 
                                className='w-4/6 mr-4'>
                                  <Upload />
                              </div>


                          {/** Stories Section  */}


                              <div className='w-2/5'>
                                  <Story />
                              </div>
                  </div>
          </div>
  )
}

export default Timeline
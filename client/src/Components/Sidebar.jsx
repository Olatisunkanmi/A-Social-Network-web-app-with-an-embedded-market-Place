import React from 'react'
import { AccessTimeOutlined, ExitToApp, People, Person, SearchOutlined, Settings, SettingsInputAntennaOutlined, ShopOutlined} from '@material-ui/icons'
import img from '../Assests/pro.jpg'
import '../App.css'

const Sidebar = () => {
  return (
<>

<div 
        className='hidden fixed h-screen w-1/6 bg-white sidebar
                lg:flex'>

        <div
                className='pt-5 h-full justify-between flex flex-col w-full '>

                                <div 
                                className='mx-5 text-white flex flex-row rounded-xl sidebar-search'>
                                                <div 
                                                className='p-2 text-blue-600 ' >
                                                <SearchOutlined  />
                                                </div>
                                        
                                                        <input type="text" 
                                                        placeholder='Search' id="" 
                                                        className='
                                                        w-full p-2 border-2 font-semibold  text-black
                                                        placeholder:text-black 
                                                        placeholder:font-thin rounded-xl ' />
                                                
                                </div>

       
                                <div className='w-full flex flex-col relative'>            
                                        <div
                                                className='w-full relative pl-3 bottom-16 '>
                                        <img src={img} alt=""  className='border-2 border-blue-400 rounded-full h-20 w-20 object-cover'/>
                                        <h4 className='font-mono text-xl font-semibold'> Jenna Davis </h4>
                                        </div>
                                        

                                        <ul className='w-full '>
                                        
                                                <li
                                                        className='hover:bg-slate-200 pl-4 p-2'>
                                                        <a href="./timeline"> 
                                                                <div
                                                                 className='flex flex-row 
                                                                 items-center p-1
                                                                  '>
                                                                        <AccessTimeOutlined className='sidebar-icons'/>
                                                                        <p 
                                                                         className='text-md ml-2 font-serif'> TimeLine</p>
                                                                </div>
                                                        </a>
                                                </li>
                                        
                                                <li
                                                        className='hover:bg-slate-200 pl-4 p-2'>
                                                        <a href="./friends"> 
                                                                <div
                                                                 className='flex flex-row 
                                                                 items-center p-1
                                                                  '>
                                                                        <Person  className='sidebar-icons' />
                                                                        <p 
                                                                         className='text-md ml-2 font-serif'> Friends </p>
                                                                </div>
                                                        </a>
                                                </li>
                                                <li
                                                        className='hover:bg-slate-200 pl-4 p-2'>
                                                        <a href="./friends"> 
                                                                <div
                                                                 className='flex flex-row 
                                                                 items-center p-1
                                                                  '>
                                                                        <People className='sidebar-icons'/>

                                                                        <p 
                                                                         className='text-md ml-2 font-serif'> People </p>
                                                                </div>
                                                        </a>
                                                </li>
                                        
                                               
                                        
                                                <li
                                                        className='hover:bg-slate-200 pl-4 p-2'>
                                                        <a href="./timeline"> 
                                                                <div
                                                                 className='flex flex-row 
                                                                 items-center p-1
                                                                  '>
                                                                       
                                                                        <ShopOutlined   className='sidebar-icons' />
                                                                        <p 
                                                                         className='text-md ml-2 font-serif'> Shop</p>
                                                                </div>
                                                        </a>
                                                </li>
                                        
                                                <li
                                                className='hover:bg-slate-200 pl-4 p-2'>
                                                <a href="./timeline"> 
                                                        <div
                                                         className='flex flex-row 
                                                         items-center p-1
                                                          '>
                                                                <Settings className='sidebar-icons' />
                                                                <p 
                                                                 className='text-md ml-2 font-serif'> Settings</p>
                                                        </div>
                                                </a>
                                        </li>


                                               
                                        
                                               
                                                
                                        </ul>
                                </div>


                                <div
                                        className=''>

                                        <p
                                                className='hover:bg-slate-200 pl-4 p-2'>
                                                <a href="./timeline"> 
                                                        <div
                                                         className='flex flex-row 
                                                         items-center p-1
                                                          '>
                                                                <ExitToApp className='sidebar-icons' />
                                                                <p 
                                                                 className='text-md ml-2 font-serif'> Logout</p>
                                                        </div>
                                                </a>
                                        </p>
                                                
                                </div>
       
        </div>
              
</div>
</>

  )
}

export default Sidebar
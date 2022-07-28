import React from 'react';
import { useState } from 'react';
import {  Favorite, Menu, MessageOutlined, NotificationImportantOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import {Link } from 'react-router-dom';
import { Sidebar } from './index'
import { useLocation } from 'react-router-dom';
import { useStateContext } from '../Contexts/Context';



const Header = () => {
  const { sideBar, setSideBar } =  useStateContext();
  // console.log(sideBar)
   


  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
    
     if(window.scrollY >= 70){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);







    const pathHeader = useLocation().pathname.split('/')[1]
    console.log(pathHeader);
  return (
    <>
    <div 
            className={`flex flex- row justify-between top-0 sticky first-letter:
            ${colorChange ? 'bg-white p-4 px-10 relative mx-10 border-2 rounded-3xl border-stone-600' 
                  : ' ' }`} >
                <div 
                    className='flex flex-row w-1/5 ml-3'>
                   <button onClick={() => setSideBar(
                    (prevSideBar) => !prevSideBar )}>
                   <Menu /> 
                   </button>
                    <p
                      className='text-2xl font-mono ml-2 capitalize'> {pathHeader} </p>
                </div>


                <div className='w-4/5'>
                        <ul
                         className='flex flex-row  justify-end space-x-5'>
                                <li>
                                    <div>
                                    <MessageOutlined />
                                      </div>  
                                </li>
                                <li>
                                    <div>
                                    <Favorite />
                                      </div>  
                                </li>
                                <li>
                                    <div>
                                    <NotificationImportantOutlined/>
                                      </div>  
                                </li>
                                <li>
                                    <div>
                                    <ShoppingCartOutlined />
                                      </div>  
                                </li>
                             
                        </ul>
                </div>
    </div>
    </>
          
  )
}

export default Header
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
   

    const pathHeader = useLocation().pathname.split('/')[1]
    console.log(pathHeader);
  return (
    <>
    <div 
            className='flex flex- row justify-between'>
                <div 
                    className='flex flex-row w-1/5'>
                   <button onClick={() => setSideBar(
                    (prevSideBar) => !prevSideBar )}>
                   <Menu /> 
                   </button>
                    <p
                      className='text-2xl font-mono capitalize'> {pathHeader} </p>
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
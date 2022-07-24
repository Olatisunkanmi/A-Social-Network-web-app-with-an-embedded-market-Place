import React from 'react';
import { useState } from 'react';
import {  Favorite, Menu, MessageOutlined, NotificationImportantOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import {Link } from 'react-router-dom';
import { Sidebar } from './index'
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [sidebar, setSideBar] = useState(false)
    console.log(sidebar);
   

    const headerTitle = useLocation().pathname.split('/')[1]
  return (
    <>
    <div 
            className='flex flex- row justify-between'>
                <div 
                    className='flex flex-row w-1/5'>
                    <Menu /> 
                    <p> Timeline </p>
                </div>


                <div>
                        <ul
                         className='flex flex-row w-4/5'>
                                <li> <MessageOutlined /></li>
                                <li> <Favorite /> </li> 
                                <li> <NotificationImportantOutlined/> </li>
                                <li> <ShoppingCartOutlined /></li>
                        </ul>
                </div>
    </div>
    </>
          
  )
}

export default Header
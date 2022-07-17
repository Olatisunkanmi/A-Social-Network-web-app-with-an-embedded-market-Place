import React from 'react';
import {  Favorite, Menu, MessageOutlined, NotificationImportantOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import {Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {

    const headerTitle = useLocation().pathname.split('/')[1]
  return (
    <div className='bg-stone-200 '>

    <div 
      className='flex flex-row p-5'>
               
              <div 
                className='hidden lg:block lg:w-1/5'>
                    <p> Side bar </p>
              </div>

            <div  className='w-full lg:w-3/5  text-white justify-between flex flex-row'>

                              <div 
                                className='flex flex-row space-x-1 text-black items-center'>
                              <Menu />
                                  <Link to='/timeline'>
                                  <p  
                                  className='text-2xl font-serif font-semibold cursor-pointer capitalize '>{headerTitle}</p>
                                  </Link>
                              </div>


                              <div
                                className='text-black space-x-5'> 
                                      <Favorite className='
                                      hover:bg-red-600 
                                      hover:text-white 
                                      hover:rounded 
                                       cursor-pointer '/>
                                      <NotificationImportantOutlined 
                                      className='hover:bg-sky-600
                                      hover:text-white
                                      hover:rounded
                                      cursor-pointer '/>    
                                      <MessageOutlined 
                                      className='hover:bg-sky-600
                                      hover:text-white
                                      hover:rounded
                                      cursor-pointer '/>                             
                                    <ShoppingCartOutlined 
                                    className='hover:bg-sky-600
                                    hover:text-white
                                    hover:rounded
                                    cursor-pointer '/>
                              </div> 
              </div>


    </div>



</div>
  )
}

export default Header
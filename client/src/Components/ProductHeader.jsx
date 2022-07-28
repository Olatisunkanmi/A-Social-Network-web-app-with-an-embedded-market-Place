import { ChatBubble, Email, FavoriteRounded, GridOnOutlined, LocalGroceryStoreOutlined, MailOutline, Notifications, SearchOutlined, SearchRounded, ShopOutlined } from '@material-ui/icons'
import React from 'react'
import {UserPicture} from './index'
import '../App.css'
const ProductHeader = () => {
    
  return (
    <div className='w-full items-center top-0 sticky p-1 flex flex-row bg-white  justify-between border-b-2 
    product-nav
    '>
               

                <div className='flex flex-row text-white w-2/6'>
                    <a href="" className='ml-4 text-blue-700  p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'> <FavoriteRounded />  </a>
                    <a href="" className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'> <Notifications />  </a>
                    <a href="" className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'> <Email />  </a>
                    <a href="" className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'> <ChatBubble />  </a>
                    <a href="" className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'> <GridOnOutlined />  </a>
                </div>



                <div className='flex flex-row text-black justify-around w-2/6'>
                    <p className='font-mono text-lg font-bold border-b-2 p-2 border-blue-400 cursor-pointer'> Products </p>
                    <p className='font-mono text-lg font-bold border-b-2 p-2 border-blue-400 cursor-pointer'> Brands  </p>
                    <p className='font-mono text-lg font-bold border-b-2 p-2 border-blue-400 cursor-pointer'> Followers </p>
                </div>

                <div 
                className='justify-end text-white items-center flex flex-row rounded-xl  w-2/6 pr-3'>
                                <div 
                                >
                                <SearchRounded  className=' text-blue-700'/>
                                <input type="text" 
                                placeholder='Search' id="" 
                                className='p-2
                                 border-2 font-semibold  text-black outline-blue-700
                                placeholder:text-black 
                                placeholder:font-thin rounded-xl ' />
                                </div>
                        
                                      
                            <div className='flex flex-row text-white items-center'>
                            <a href="" className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'> <LocalGroceryStoreOutlined />  </a>
                            <UserPicture className=' text-blue-700'/>
                            </div>
                          
                </div>
    </div>
  )
}

export default ProductHeader
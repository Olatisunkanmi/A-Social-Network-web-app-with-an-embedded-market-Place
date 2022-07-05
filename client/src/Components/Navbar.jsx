import React from 'react'
import { Badge } from '@material-ui/core'
import {Search, ShoppingCartOutlined,  } from '@material-ui/icons'

const Navbar = () => {
  return (
    
            <div 
              className='flex flex-col-reverse justify-center text-center items-center
              md:justify-between 
              md:flex-row '>

                    {/** Left Navabr  */}

                  <div
                    className='hidden md:w-1/5 items-center md:flex md:ml-1'> 
                      <span>EN</span>

                                <div 
                                  className='ml-7 p-1 flex border-2 border-stone-600 '>
                                      
                                  <input type="text" placeholder='Search for Items '/>
                                        <Search />
                                </div>

                    </div>


                    {/** Center  Navabr  */}



                  <div 
                    className='w-3/5 flex-1 text-center'> 
                        <h3 className='text-3xl font-bold'>xL - Mart.</h3>


                   </div>


                    {/** Right Navabr  */}
                  


                          <div 
                            className='justify-center w-1/5 flex flex-row items-center justify-end p-3'>

                            <p 
                              className='mr-3 cursor-pointer'> REGISTER</p>
                            <p 
                            className='mr-3 cursor-pointer'>  LOGIN</p>
                          <Badge badgeContent={5} color='primary' 
                            className='mr-5 cursor-pointer'>
                          <ShoppingCartOutlined />
                          </Badge>

                          </div>


                 





            </div>
 
  )
}

export default Navbar
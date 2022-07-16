import React from 'react'
import {  Menu, MessageOutlined, NotificationImportantOutlined, ShoppingCartOutlined } from '@material-ui/icons'

const Timeline = () => {
  return (
    <div className='bg-stone-200 '>

            <div 
              className='flex flex-row p-5'>
                        <div 
                        className='w-1/5'>
                            <p> Side bar </p>
                      </div>

                    <div  className='w-4/5  text-white justify-between'>

                            <div 
                              className='flex flex-row space-x-1'>
                            <Menu />
                            <p> Time Line</p>
                            </div>


                            <div> 
                                    
                                    <NotificationImportantOutlined />    
                                    <MessageOutlined />                             
                                  <ShoppingCartOutlined />
                            </div> 
                      </div>


            </div>



    </div>
  )
}

export default Timeline
import { Camera, EditOutlined, PhotoAlbumOutlined } from '@material-ui/icons'
import React from 'react'
import img from '../Assests/pro.jpg'
import '../App.css'


const Upload = () => {
  return (
    <div className='mt-5 flex flex-col bg-white border-2 rounded-xl upload border-blue-200'>


            <div
                className='rounded-xl  w-full  flex flex-row '>

          
                  
                          <div className='flex border-r-2  w-2/6 items-center justify-center 
                          rounded-tr-lg
                          py-3'> 
                              <EditOutlined className='upload-icons' />
                              <p 
                                className='font-mono font-bold ' > Publish </p>
                          </div>
             
               
                          <div className='flex  w-2/6 
                            bg-stone-100
                          border-b-2 items-center
                           justify-center'> 
                              <PhotoAlbumOutlined className='upload-icons'/>
                              <p className='font-mono font-bold '> Photo </p>
                          </div>
             
               
                          <div className='rounded-r-xl 
                          border-b-2 bg-stone-100
                          flex items-center flex-row   w-2/6 justify-center'> 
                              <Camera className='upload-icons'/>
                              <p className='font-mono font-bold '> Video  </p>
                          </div>
              </div>


                    <div 
                      className='flex flex-row mt-4 '>
                    <img src={img} alt=""  className='border-2 m-1 rounded-full h-10 w-10 object-cover'/>
                    <textarea 
                      className='w-full textarea m-2 capitalize text-md'
                        placeholder='What is on your Mind ? '
                          rows='4'>
                                
                    </textarea>
                    </div>


              <div>
                      <div>
                          <p> Media </p>
                        </div>
              </div>
    </div>
  )
}

export default Upload
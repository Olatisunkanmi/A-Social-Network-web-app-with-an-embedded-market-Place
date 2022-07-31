
import {  Bookmark, DeleteForever, MoreVertOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import img from '../Assests/pro.jpg'
import '../App.css'

const RecommendedPages = () => {
      const [Delete, setDelete ] = useState(true)

        const view = () => {


        }
  
  return (
    <div
        className='RecommendedPages relative border-2 bg-white border-stone-300 rounded-xl flex flex-col'>
                
                <div 
                      className='flex-row flex justify-between p-2 px-3 '>
                          <p className='text-stone-500 font-semibold'> Recommended Pages  </p>
                          
                          <button className=''  onClick={() => setDelete(
                                                              (prevDelete)  => !prevDelete)}>
                             <MoreVertOutlined />
                          </button>
                          
                       
                  </div>




            <div
            className='border-t-2 border-stone-200 p-3 flex flex-row  items-center'>

                    <div    className='mx-2 p-1  rounded-full 
                    cursor-pointer
                    border-stone-600
                    hover:border-solid
                    hover:border-blue-600'>
                    <img src={img} alt=""  className='border-2 m-1 border-black rounded-full h-10 w-10 object-cover'/>
                     </div>


                     <div className='flex flex-row w-full justify-between'>
                     <div className=''>
                     <p className='font-medium font-sans text-md'> Family and Love </p>
                     <p  className='font-thin text-xs'> Family. </p>
                     </div>

                     <button className='cursor-pointer'> 
                        <Bookmark />
                     </button>
               </div>
               
              </div>

              


            <div
            className='border-t-2 border-stone-200 p-3 flex flex-row  items-center'>

                    <div    className='mx-2 p-1  rounded-full 
                    cursor-pointer
                    border-stone-600
                    hover:border-solid
                    hover:border-blue-600'>
                    <img src={img} alt=""  className='border-2 m-1 border-black rounded-full h-10 w-10 object-cover'/>
                     </div>


                     <div className='flex flex-row w-full justify-between items-center'>
                     <div className=''>
                     <p className='font-medium font-sans text-md'> Fast Pizza </p>
                     <p  className='font-thin text-xs'> Fast food and Pizza </p>
                     </div>

                     <button className='cursor-pointer'> 
                        <Bookmark />
                     </button>
                  
               </div>
               
              </div>



            <div
            className='border-t-2 border-stone-200 p-3 flex flex-row  items-center'>

                    <div    className='mx-2 p-1  rounded-full 
                    cursor-pointer
                    border-stone-600
                    hover:border-solid
                    hover:border-blue-600'>
                    <img src={img} alt=""  className='border-2 m-1 border-black rounded-full h-10 w-10 object-cover'/>
                     </div>


                     <div className='flex flex-row w-full justify-between'>
                     <div className=''>
                     <p className='font-medium font-sans text-md'> Droids and Jets</p>
                     <p  className='font-thin text-xs'> Technology. </p>
                     </div>

                     <button className='cursor-pointer'> 
                        <Bookmark />
                     </button>
               </div>



              </div>




                  <div  
                  className={`w-1/2 border-stone-600 border-2 absolute right-0 top-10 p-5 bg-shade-300 bg-white first-letter:first-line:marker:placeholder: 
                  ${Delete ? `hidden` : `block`  }`}>
                      
                      

                                    <div className={`flex flex-row items-center`} >
                                        <button className=''>
                                        <DeleteForever/>
                                        </button>

                                            <div> 
                                            <p className='text-sm font-semibold'> Delete.</p>
                                                <p className='text-xs'>Remove widget from Feed</p>
                                                
                                          </div>

                                    </div>

                           
                  </div>







    </div>
  )
}

export default RecommendedPages
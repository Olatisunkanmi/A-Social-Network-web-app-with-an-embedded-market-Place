import { Add, MoreVertOutlined } from '@material-ui/icons'
import React from 'react'
import img from '../Assests/pro.jpg'
import '../App.css'

const story = () => {
  return (
    <div
        className='story border-2 bg-white border-stone-300 rounded-xl flex flex-col'>
            <div 
                className='flex-row flex justify-between p-2 px-3 '>
                    <p className='text-stone-500 font-semibold'> Stories </p>
                    <MoreVertOutlined />
            </div>

            <div
                className='border-t-2 border-stone-200 p-3 flex flex-row  items-center'>

                        <div    className='mx-5 p-1 border-2 border-dotted rounded-full 
                        cursor-pointer
                        border-stone-600
                        hover:border-solid
                        hover:border-blue-600'>
                            <Add className='story-icon'/>

                         </div>


                            <div className=''>
                            <p className='font-mono font-semibold text-md'> Add a new Story. </p>
                            <p  className='font-thin text-md'> Share an image, a video or some text. </p>
                            </div>
                   
            </div>


            <div
            className='border-t-2 border-stone-200 p-3 flex flex-row  items-center'>

                    <div    className='mx-5 p-1 border-2 border-dotted rounded-full 
                    cursor-pointer
                    border-stone-600
                    hover:border-solid
                    hover:border-blue-600'>
                    <img src={img} alt=""  className='border-2 m-1 border-black rounded-full h-10 w-10 object-cover'/>
                     </div>


                        <div className=''>
                        <p className='font-mono font-semibold text-md'> Carl Robert. </p>
                        <p  className='font-thin text-md'> 23 mins ago. </p>
                        </div>
               
              </div>



            <div
            className='border-t-2 border-stone-200 p-3 flex flex-row  items-center'>

                    <div    className='mx-5 p-1 border-2 border-dotted rounded-full 
                    cursor-pointer
                    border-stone-600
                    hover:border-solid
                    hover:border-blue-600'>
                    <img src={img} alt=""  className='border-2 m-1 border-black rounded-full h-10 w-10 object-cover'/>
                     </div>


                        <div className=''>
                        <p className='font-mono font-semibold text-md'> Carl Robert. </p>
                        <p  className='font-thin text-md'> 23 mins ago. </p>
                        </div>
               
              </div>



           


    </div>
  )
}

export default story
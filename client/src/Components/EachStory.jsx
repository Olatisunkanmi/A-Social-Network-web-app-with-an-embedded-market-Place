import React from 'react'
import {UserPicture }  from './index'

const EachStory = () => {
  return (
    <div>

    <div
            className='border-t-2 border-stone-200 p-3 flex flex-row  items-center'>

                    <div    className='mx-5 border-2 rounded-full 
                    cursor-pointer
                    border-stone-400
                    hover:border-solid
                    hover:border-blue-600'>
                    <UserPicture />
                     </div>


                        <div className=''>
                        <p className='font-mono font-semibold text-md'> Carl Robert. </p>
                        <p  className='font-thin text-md'> 23 mins ago. </p>
                        </div>
               
              </div>


    </div>
  )
}

export default EachStory
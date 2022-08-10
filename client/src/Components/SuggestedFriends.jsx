
import { Add, MoreVertOutlined } from '@material-ui/icons'
import React from 'react'
import {UserPicture } from './index'

import '../App.css'

const story = () => {
  return (
    <div
        className='story border-2 bg-white border-stone-300 rounded-xl flex flex-col'>
            <div 
                className='flex-row flex justify-between p-2 px-3 '>
                    <p className='text-stone-500 font-semibold'> Suggested Friends </p>
                    <MoreVertOutlined />
            </div>




            <div
            className='border-t-2 border-stone-200 p-3 flex flex-row  items-center'>

                    <div    className='mx-2 p-1  rounded-full 
                    cursor-pointer
                    border-stone-600
                    hover:border-solid
                    hover:border-blue-600'>
                 <UserPicture />
                     </div>


                     <div className='flex flex-row w-full justify-between'>
                     <div className=''>
                     <p className='font-medium font-sans text-md'> Drinkwater Skyline. </p>
                     <p  className='font-thin text-xs'> Westham. </p>
                     </div>

                     <Add />
             
               
              </div>

               
              </div>

            

         


    </div>
  );
};

export default story;

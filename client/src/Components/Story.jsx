
import { Add, Delete, MoreVertOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { MoreVertIcon , DeleteWidget, EachStory, AddStory } from './index'
import {UserPicture } from './index'
import '../App.css'

const Story = () => {
    const [ deleteWidget, setdeleteWidget ] = useState(false)
    const [ToggleDelete, setToggleDelete] = useState(false)

  return (

    <div
        className={`relative story border-2 bg-white border-stone-300 rounded-xl flex flex-col
              ${deleteWidget ? 'hidden' : 'block'}  `}>
            <div 
                className='flex-row flex justify-between p-2 px-3 '>
                    <p className='text-stone-500 font-semibold'> Stories </p>

                    <div onClick={() => setToggleDelete (
                          (prevToggleDelete) => !prevToggleDelete
                    )}>
                    <MoreVertIcon />
                    </div>
            </div>

              <AddStory />
              <EachStory />
              <div  
              className={ `${ToggleDelete ? 'block' : 'hidden'}`}
              onClick={() => setdeleteWidget ( (prevToggleDelete) => !prevToggleDelete)}>
                 <DeleteWidget />
              </div>
           


    </div>
  );
};


export default Story


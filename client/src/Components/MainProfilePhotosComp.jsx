import React from 'react'
import { PhotosCollection, MoreVertIcon}  from './index'
import PicArr from './Picture'





const MainProfilePhotosComp = () => {
  return (
    <div className='space-y-5 '>
                <div className='bg-white rounded-xl p-3 justify-between flex flex-row' >
                        <p className='text-xl font-normal font-serif'>  Photos</p>
                        <MoreVertIcon />
                </div>


                <div className='flex flex-row flex-wrap w-full border-2 border-stone-200 rounded-xl'>
               { PicArr.map(cur =>  (
                <PhotosCollection key={cur.index}  img={cur} />
               ))}
                </div> 
    </div>
  )
}

export default MainProfilePhotosComp
import React from 'react'
import { PhotosCollection, MoreVertIcon}  from './index'
import PicArr from './Picture'

const UserShopComp = () => {
  return (
    <div>
                    <div className='w-full bg-white border-2 p-5 rounded-xl'>

                <div className='mb-2'>
                    <p className='text-lg font-serif font-semibold'>Shop From Iris Davis Store  </p> 
                    <p className="mb-7 h-1 bg-zinc-700 border-none w-8"></p>

                </div>


                <div className='w-11/12 flex flex-row flex-wrap  rounded-xl'>
                    { PicArr.map(cur =>  (
                <PhotosCollection key={cur.index}  img={cur} />
                ))}
                { PicArr.map(cur =>  (
                <PhotosCollection key={cur.index}  img={cur} />
                ))}
                </div>

                </div> 

    </div>
  )
}

export default UserShopComp
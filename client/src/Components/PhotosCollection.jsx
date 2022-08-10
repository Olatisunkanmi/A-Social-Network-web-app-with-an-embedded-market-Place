import React from 'react'

const PhotosCollection = ({ img}) => {


  return (
    <div className='w-1/2'>

                <div className=''>
                        <img src={img} alt="" className='w-full h-36 object-cover rounded-xl'/>
                </div>
    </div>
  )
}

export default PhotosCollection
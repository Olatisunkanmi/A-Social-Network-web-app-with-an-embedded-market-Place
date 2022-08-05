import React from 'react'
import img from '../Assests/pro.jpg'
import '../App.css'



const UserPicture = () => {
  return (
    <div>
    <img src={img} alt=""  className='m-1 rounded-full h-12 w-12 object-cover cursor-pointer'/>
    </div>
  )
}

export default UserPicture
import React from 'react'
import img from '../Assests/pro.jpg'
import '../App.css'



const UserPicture = () => {
  return (
    <div>
    <img src={img} alt=""  className='border-2 m-1 border-black rounded-full h-10 w-10 object-cover'/>
    </div>
  )
}

export default UserPicture
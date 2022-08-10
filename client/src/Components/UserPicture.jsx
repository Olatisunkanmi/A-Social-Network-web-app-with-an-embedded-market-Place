import React from 'react'
import img from '../Assests/pro.jpg'
import '../App.css'
import { Link } from 'react-router-dom'



const UserPicture = () => {
  return (
    <div>
      <Link to='/444'>
    <img src={img} alt=""  className='m-1 rounded-full h-12 w-12 object-cover cursor-pointer'/>

      </Link>
    </div>
  )
}

export default UserPicture
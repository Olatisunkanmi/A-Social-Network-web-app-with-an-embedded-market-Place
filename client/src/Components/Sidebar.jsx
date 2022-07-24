import React from 'react'

const Sidebar = () => {
  return (
<div 
        className='bg-stone-600 justify-between flex flex-col w-1/6'>

                <div 
                className='w-1/5 text-white flex flex-row'>
                        <input type="text" placeholder='Search' id="" />
                        <p>Search</p>
                </div>

               
                <ul className='w-3/5'>            
                <h3>Timeline</h3>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                </ul>


                <div
                        className='w-1/5'>

                        <p>CopyRight </p> 
                </div>
               
</div>
  )
}

export default Sidebar
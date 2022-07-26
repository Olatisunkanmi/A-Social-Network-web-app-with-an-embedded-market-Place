import React from 'react'

const Sidebar = () => {
  return (
<>

<div 
        className=' h-screen w-1/6 sidebar'>

        <div
                className='p-5 pt-20 h-full justify-between flex flex-col w-full '>

                                <div 
                                className='w-full text-white flex flex-row'>
                                        <input type="text" placeholder='Search' id="" className='placeholder:text-black' />
                                        <p>Search</p>
                                </div>

       
                                <ul className='w-full '>            
                                <h3>Timeline</h3>
                                        <li>Home</li>
                                        <li>Home</li>
                                        <li>Home</li>
                                        <li>Home</li>
                                        <li>Home</li>
                                </ul>


                                <div
                                        className=' bg-black '>

                                        <p>CopyRight </p> 
                                        <p> Made by</p>
                                </div>
       
        </div>
              
</div>
</>

  )
}

export default Sidebar
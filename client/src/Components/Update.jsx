import React from 'react'
import img from '../Assests/pro.jpg'
import img1 from '../Assests/1.jpg'
 import '../App.css'
import { MoreVert } from '@material-ui/icons'

const Update = () => {
  return (
    <div className=' border-2 bg-white border-stone-300 rounded-xl mt-5 flex flex-col px-3'>

            {/**NAme and Date  */}

            <div
                className='mt-2 flex flex-row items-center justify-between'>


                    <div className='flex flex-row'>
                    <img src={img} alt=""  className='border-2 m-1 border-black rounded-full h-10 w-10 object-cover'/>
                        
                            <div 
                                className='pl-2'>
                                    <p className='text-black
                                    font-serif text-lg'>Dan Walker </p>
                                    <p className='text-stone-500
                                        font-mono text-xs'> July 26 2018, 01:34pm </p>
                            </div>
                    </div>  
                    <MoreVert />
            </div>


                <div
                    className='mt-3 text-base '>
                        <p> Yesterday with @Karen Miller and @Marvin Stemperd at the #Rock'n'Rolla concert in LA. Was totally fantastic! People were really excited about this one! </p>

                        <img src={img1} alt=""  className='rounded-xl mt-5'/>
                </div>

            <div>
                
            </div>

    </div>
  )
}

export default Update
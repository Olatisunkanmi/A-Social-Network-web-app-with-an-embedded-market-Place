import React from 'react'
import img1 from '../Assests/3.jpg'
import img2 from '../Assests/2.jpg'
import '../../src/App.css'
import { ArrowRightOutlined, ArrowLeftOutlined  } from '@material-ui/icons'

const Slider = () => {
  return (
 <div>   

 <div 
 className='w-full h-screen flex  absolute overflow-hidden mt-10'>
 
 {/**Wrapper */}
 <div 
     className='h-full flex'>
 
 {/**Slide  */}
         <div className='flex items-center w-screen h-screen text-center justify-center'>
 
                             <div 
                                     className='hidden md:block md:w-1/2 md:h-full'>
                                     <img src={img1} alt="" 
                                             className='h-5/6'/>
                             </div>
 
 
                             <div 
                                     className='w-1/2 text-center'> 
                                     <p 
                                     className='text-6xl font-serif'> SUMMER SALE   </p>
                                     <p
                                             className='m-10 text-3xl  font-medium font-serif'> Don't Compromise on STYLE ! Get a Flat 30% OFF for New Arriavals</p>
                                     
                                     <button 
                                             className=' border-black text-black p-3 border-4 '>
                                             Show Details
                                     </button>
                             </div>
         </div>
 
 
 {/**Slide  */}
         <div className='flex items-center w-screen h-screen text-center justify-center'>
 
                             <div 
                                     className='hidden md:block md:w-1/2 md:h-full'>
                                     <img src={img1} alt="" 
                                             className='h-5/6'/>
                             </div>
 
 
                             <div 
                                     className='w-1/2 text-center'> 
                                     <p 
                                     className='text-6xl font-serif'> SUMMER SALE   </p>
                                     <p
                                             className='m-10 text-3xl  font-medium font-serif'> Don't Compromise on STYLE ! Get a Flat 30% OFF for New Arriavals</p>
                                     
                                     <button 
                                             className=' border-black text-black p-3 border-4 '>
                                             Show Details
                                     </button>
                             </div>
         </div>
 
 
 {/**Slide  */}
         <div className='flex items-center w-screen h-screen text-center justify-center'>
 
                             <div 
                                     className='hidden md:block md:w-1/2 md:h-full'>
                                     <img src={img1} alt="" 
                                             className='h-5/6'/>
                             </div>
 
 
                             <div 
                                     className='w-1/2 text-center'> 
                                     <p 
                                     className='text-6xl font-serif'> SUMMER SALE   </p>
                                     <p
                                             className='m-10 text-3xl  font-medium font-serif'> Don't Compromise on STYLE ! Get a Flat 30% OFF for New Arriavals</p>
                                     
                                     <button 
                                             className=' border-black text-black p-3 border-4 '>
                                             Show Details
                                     </button>
                             </div>
         </div>
 
 </div>
 </div>
 
 
    </div>
  )
}
  
export default Slider
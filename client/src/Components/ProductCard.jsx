import { FavoriteOutlined, LocalGroceryStoreSharp } from '@material-ui/icons'
import React from 'react'
import img1 from '../Assests/M1.jpg'
import PicArr from './Picture'

const ProductCard = () => {
    const random = PicArr[Math.floor(Math.random() * PicArr.length ) ]

  return (
    <div className='bg-red-300 w-1/5 m-5'>

                         <div className='bg-white w-full rounded-lg h-full  flex flex-col justify-between'>

                                   


                                                    <div className='flex flex-col rounded-lg h-5/6'>
                                                            <img src={random } alt="" className='object-cover w-full rounded-t-lg h-4/5'/>
                                                        
                                                            <p className='mt-3 text-center text-black font-serif font-bold text-lg'> Men Leather Jacket</p>
                                                            <p className=' leading-6 p-3 text-sm text-shade-800 font-sans font-semibold'> A Strong Leather Jacket for young men, who are fashionable and gentlemen. </p> 
                                                    </div>


                                                    <div className=' px-5 h-1/6 flex flex-row justify-between items-center cursor-pointer'>
                                                            <div className='flex flex-row items-center'>
                                                                    <FavoriteOutlined  className='text-red-600'/>
                                                                    <p className='text-md '> 456 </p>
                                                            </div>


                                                            <div className='flex flex-row items-center cursor-pointer bg-blue-600 p-2 text-white rounded-lg'>
                                                                    <LocalGroceryStoreSharp />
                                                                    <p> $56.23</p>
                                                            </div>
                                                    </div>
                        

                       
            </div>
  
    </div>
  )
}

export default ProductCard
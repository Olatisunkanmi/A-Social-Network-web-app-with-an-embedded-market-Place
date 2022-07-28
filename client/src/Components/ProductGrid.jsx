import React from 'react'
import '../App.css'

const ProductGrid = () => {
  return (
    <div
      className='w-full my-5 flex flex-col' >

            <div className='flex flex-row items-center justify-between w-full p-2'>

                    <div className='flex flex-row w-1/4'>
                    <p className='font-mono text-lg font-bold border-b-2 p-2 border-black cursor-pointer'> Male Clothings  </p>
                    </div>


                  <div 
                      className='flex flex-col w-2/4'>
                          <p className='font-mono text-lg font-bold p-2  cursor-pointer'> Overview</p>
                          
                          
                          <div
                            className='flex flex-row'>
                            
                                <div
                                  className='flex flex-col'>
                                    <p className='font-sans text-sm font-semibold'> 290 </p>
                                    <p className='font-sans text-sm font-semibold'> Products </p>
                                </div>

                                <div
                                className='flex flex-col mx-5'>
                                    <p className='font-sans text-sm font-semibold'> 290 K </p>
                                    <p className='font-sans text-sm font-semibold'> Likes </p>
                                </div>

                                <div
                                className='flex flex-col'>
                                    <p className='font-sans text-sm font-semibold'> 90 </p>
                                    <p className='font-sans text-sm font-semibold'> Followers </p>
                                </div>
                          </div>
                  </div>




                    <div 
                      className='w-1/4 flex flex-row'>
                          <form>
                                <label for='sort'className='font-mono text-lg font-bold cursor-pointer' > Sort by:</label>

                                <select name="sort" id="sort"  className='font-mono text-stone-600  rounded-lg text-sm font-bold cursor-pointer p-2 mx-5'>
                                <option value=""> Highest Rated  </option>
                                <option value=""> Most Commented   </option>
                                <option value=""> Most Liked </option>
                          </select>
                          <input type="submit" value="Submit"  className='cursor-pointer  sort-btn bg-blue-400 font-bold font-mono text-white rounded-lg p-2 '/>
                          </form>
                    </div>


            </div>

      </div>
  )
}

export default ProductGrid
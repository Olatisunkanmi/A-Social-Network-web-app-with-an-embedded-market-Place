import React from 'react'
import '../App.css'

const ProductGrid = () => {
  return (
    <div
      className='w-4/5 m-auto flex flex- col' >

            <div className='flex flex-row items-center justify-between w-full p-2'>

                    <div className='flex flex-row w-3/4'>
                    <p className='font-mono text-lg font-bold border-b-2 p-2 border-black cursor-pointer'> Male Clothings  </p>
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
import React from 'react'
import { ProductHeader, ProductGrid, ProductCard  } from '../Components'
import '../App.css'
import { useStateContext } from '../Contexts/Context';



const Products = () => {
  const { sideBar, setSideBar } =  useStateContext();
  setSideBar(false)

  return (
    <div 
    className={` text-black flex flex-col bg-gray-300 
      w-full`} >

        <ProductHeader />
        <div
        className='w-4/5 m-auto ' >
         <ProductGrid />
         
                <div className='flex flex-row flex-wrap w-full justify-evenly'>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                 
                </div>
              
                
        </div>
       
        
    </div>
  )
}

export default Products
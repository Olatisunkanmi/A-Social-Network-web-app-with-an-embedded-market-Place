import React from 'react'
import { ProductHeader, ProductGrid} from '../Components'
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
        <ProductGrid />
        
    </div>
  )
}

export default Products
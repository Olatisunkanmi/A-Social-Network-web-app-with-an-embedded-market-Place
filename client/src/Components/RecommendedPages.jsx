
import React, { useState } from 'react'
import { EachRecommend , DeleteWidget, MoreVertIcon}  from './index'


const RecommendedPages = () => {
  const [ deleteWidget, setdeleteWidget ] = useState(false)
    const [ToggleDelete, setToggleDelete] = useState(false)


  const view = () => {};

  return (

   <div>
   
   <div
        className={`relative  border-2 bg-white border-stone-300 rounded-xl flex flex-col
        ${deleteWidget ? 'hidden' : 'block'}  `}>
                
                <div 
                      className='flex-row flex justify-between p-2 px-3 '>
                          <p className='text-stone-500 font-semibold'> Recommended Pages  </p>
                         
                          <div onClick={() => setToggleDelete (
                          (prevToggleDelete) => !prevToggleDelete
                    )}>
                    <MoreVertIcon />
                    </div>
                  </div>


                  <EachRecommend />
                  <div  
              className={ `${ToggleDelete ? 'block' : 'hidden'}`}
              onClick={() => setdeleteWidget ( (prevToggleDelete) => !prevToggleDelete)}>
                 <DeleteWidget />
              </div>
           
    </div>
   
   </div>
  )
}


export default RecommendedPages;

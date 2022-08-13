import React from 'react';
import product from '../Assests/pro.png';

const EachCartItem = () => {
	return (
		<div className='w-full mt-2 bg-white rounded-lg border-2 border-neutral-400'>
			<div className='flex flex-row justify-between items-center py-5 '>
				<div className='pl-5 w-2/6 flex flex-row items-center'>
					<img src={product} alt='' className='w-1/3' />
					<p className='text-sm font-bold text-neutral-500 w-1/3'>
						Cool Shirt
					</p>
				</div>

				<ul className='flex flex-row justify-between  w-3/6 items-center text-center'>
					<li className='text-xs p-5 border-l text-neutral-600 font-bold'>
						1
					</li>

					<li className='text-xs p-5 border-l text-neutral-600 font-bold justify-self-end'>
						# <span> 10, 000</span>
					</li>

					<li className='text-xs p-5 border-l text-neutral-600 font-bold'>
						{' '}
						0{' '}
					</li>

					<li className='text-xs p-5  border-l text-neutral-600 font-bold pr-'>
						# <span> 10, 000</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default EachCartItem;

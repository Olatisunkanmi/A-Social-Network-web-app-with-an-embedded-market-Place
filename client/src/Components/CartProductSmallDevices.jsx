import React from 'react';
import product from '../Assests/pro.png';

const CartProductSmallDevices = () => {
	return (
		<div className='border-2 bg-white border-neutral-400 rounded-2xl w-full p-6 md:space-y-5'>
			<div className='pl-5 w-full flex flex-row items-center space-x-2 mb-2'>
				<img src={product} alt='' className='w-2/5' />
				<p className='text-md font-bold text-neutral-500 w-3/5 '>
					Cool Shirt with strong Leather
				</p>
			</div>

			<div className='flex flex-row justify-between'>
				<p className='text-md text-neutral-600 font-semibold'>
					Quantity
				</p>
				<div
					className='text-sm flex flex-row 
            p-1 px-2
            font-bold space-x-2 border-2 rounded-full items-center'
				>
					<button className='text-neutral-600 '> + </button>
					<p className='text-neutral-600 '> 1 </p>
					<button className='text-neutral-600 '> - </button>
				</div>
			</div>

			<div className='flex flex-row justify-between'>
				<p className='text-md text-neutral-600 font-semibold'>
					Price
				</p>
				<p>
					# <span className='font-bold '> 200,000</span>
				</p>
			</div>

			<div className='flex flex-row justify-between'>
				<p className='text-md text-neutral-600 font-semibold'>
					Discount
				</p>
				<p>
					<span className='font-bold '> 0</span>
				</p>
			</div>

			<div className='flex flex-row justify-between'>
				<p className='text-black font-bold text-md'> Total</p>
				<p>
					# <span className='font-bold '> 200, 000</span>
				</p>
			</div>
		</div>
	);
};

export default CartProductSmallDevices;

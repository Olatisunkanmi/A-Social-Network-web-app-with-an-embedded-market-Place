import React from 'react';
import {
	CartProduct,
	OrderDetails,
	HelpDesk,
} from '../Components/index';

const Cart = () => {
	return (
		<div className='mt-10 m-auto lg:w-4/5 xl:w-3/5 '>
			{/**   Cart Header  */}
			<div className=' justify-between w-full flex flex-row items-center '>
				<div>
					<p className='text-2xl font-semibold font-serif'>My Cart</p>
				</div>

				<div className='flex flex-row items-center space-x-3'>
					<p className='font-semibold'>save order </p>

					<button className='py-2 px-4 rounded-xl text-white font-semibold hover:bg-black bg-blue-600'>
						Checkout
					</button>
				</div>
			</div>

			{/* Cart Section *  */}

			<div className='w-full flex flex-row mt-10 justify-between space-x-10'>
				<div className='w-4/6 '>
					<CartProduct />
				</div>

				<div className='w-2/6 '>
					<div className=''>
						<p className='text-md font-semibold text-neutral-600'>
							{' '}
							Order Summary{' '}
						</p>
						<OrderDetails />
						<HelpDesk />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;

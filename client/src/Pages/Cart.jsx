import React from 'react';
import {
	CartProduct,
	OrderDetails,
	HelpDesk,
	CartProductSmallDevices,
} from '../Components/index';

const Cart = () => {
	return (
		<div className='mt-10 m-auto lg:w-4/5 xl:w-3/5 '>
			{/**   Cart Header  */}
			<div className=' justify-between w-full flex flex-row items-center p-5 md:p-0'>
				<div>
					<p className='text-2xl font-semibold font-serif'>My Cart</p>
				</div>

				<div className='flex flex-row items-center space-x-3 text-sm'>
					<p className='font-semibold'>save order </p>

					<button className='py-2 px-4 rounded-xl text-white font-semibold hover:bg-blue-400 bg-blue-600'>
						Checkout
					</button>
				</div>
			</div>

			{/* Cart Section *  */}

			<div className='w-full flex flex-col lg:flex-row mt-10 justify-between md:space-x-10'>
				<div className='w-4/6 hidden md:block'>
					<CartProduct />
				</div>

				<div className='w-full block md:hidden p-3 space-y-3'>
					<CartProductSmallDevices />
					<CartProductSmallDevices />
				</div>

				<div className='w-full space-y-2 flex flex-col p-5 md:p-0 md:w-2/6 '>
					<p className='text-md font-semibold text-neutral-600'>
						Order Summary
					</p>
					<OrderDetails />
					<HelpDesk />
				</div>
			</div>
		</div>
	);
};

export default Cart;

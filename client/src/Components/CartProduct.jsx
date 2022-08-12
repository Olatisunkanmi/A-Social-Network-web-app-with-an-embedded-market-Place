import React from 'react';
import { CheckoutItem } from './index';

const CartProduct = () => {
	return (
		<div className='w-full'>
			<div className='flex flex-row justify-between items-center mb-2'>
				<div>
					<p className='text-sm font-semibold text-neutral-600'>
						PRODUCTS
					</p>
				</div>

				<ul className='flex flex-row justify-between  w-3/6 items-center text-center px-1'>
					<li className='text-xs text-neutral-600 font-bold'>
						QUANTITY
					</li>

					<li className='text-xs text-neutral-600 font-bold'>
						PRICE / COST
					</li>

					<li className='text-xs text-neutral-600 font-bold'>
						DISCOUNT
					</li>

					<li className='text-xs text-neutral-600 font-bold'>
						TOTAL
					</li>
				</ul>
			</div>

			<CheckoutItem />
		</div>
	);
};

export default CartProduct;

import React from 'react';
import { EachCartItem } from './index';

const CartProduct = () => {
	return (
		<div className='w-full'>
			<div className='flex flex-row justify-between items-center mb-2'>
				<div>
					<p className='text-sm font-semibold text-neutral-600'>
						PRODUCTS
					</p>
				</div>

				<div className='flex flex-row justify-around space-x-10 px-5'>
					<h6 className='text-xs text-neutral-600 font-semibold'>
						QUANTITY
					</h6>
					<h6 className='text-xs text-neutral-600 font-semibold'>
						PRICE
					</h6>
					<h6 className='text-xs text-neutral-600 font-semibold'>
						DISCOUNT
					</h6>
					<h6 className='text-xs text-neutral-600 font-semibold'>
						TOTAL
					</h6>
				</div>
			</div>

			<EachCartItem />
			<EachCartItem />
			<EachCartItem />
		</div>
	);
};

export default CartProduct;

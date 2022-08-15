import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import { ContactCard } from '../Components/index';
import '../App.css';

const Payment = () => {
	return (
		<div className='mt-10 w-full m-auto lg:w-4/5 xl:w-3/5 flex flex-col'>
			{/**   Cart Header  */}
			<div className=' justify-between w-full flex flex-row items-center p-5 md:p-0'>
				<div>
					<p className='text-xl font-semibold font-serif'>
						Payment Gateway .
					</p>
				</div>

				<Link to='/cart/95'>
					<div className='flex flex-row text-sm font-semibold items-center space-x-3'>
						<ArrowBack className='checkout-btn' />
						<p>Back </p>
					</div>
				</Link>
			</div>

			<div className='w-full flex flex-col lg:flex-row mt-10 justify-between md:space-x-10'>
				<div className='bg-white p-5 m-1 w-full md:w-3/6  space-y-10 md:payment'>
					<div className=''>
						<p className=' text-neutral-500 font-bold text-2xl'>
							Pay your Order !
						</p>
						<p className='font-semibold text-sm '>
							Enter your Credit Card Information to make payments
						</p>
					</div>

					<div className='flex flex-row items-center border-2 border-black xl:w-2/3 flex-wrap rounded-r-lg'>
						<input
							type='text'
							placeholder=' Enter Gift card or discount Code'
							className='p-3 placeholder:text-sm  outline-none w-4/5 '
						/>

						<div className='w-1/5'>
							<button className='p-3 bg-blue-600 text-white w-full'>
								Apply
							</button>
						</div>
					</div>
				</div>

				<div className='m-1 w-full md:w-3/6 bg-white p-5 border-2 border-neutral-400 md:payment'>
					<ContactCard />
				</div>
			</div>
		</div>
	);
};

export default Payment;

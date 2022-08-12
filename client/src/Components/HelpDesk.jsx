import React from 'react';
import help from '../Assests/help.svg';

const HelpDesk = () => {
	return (
		<div className='border-2 bg-white border-neutral-400 rounded-2xl w-full p-6 items-center'>
			<img src={help} alt='' className='w-1/2 ' />

			<p className=' font-semibold'>Help center</p>

			<p>
				{' '}
				Having trouble? Please search our Help Center for a quick
				answer to your problem
			</p>
		</div>
	);
};

export default HelpDesk;

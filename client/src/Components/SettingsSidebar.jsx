import { Policy, Settings, Warning } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { UserPicture } from './index';
import '../App.css';

const SettingsSidebar = () => {
	return (
		<div className=' flex flex-col  bg-white justify-between first-letter:'>
			<div className='flex flex-col  items-center mt-5 space-y-3'>
				<UserPicture />
				<p className='text-xl font-semibold font-serif '>
					Dan Walker
				</p>
			</div>

			<hr className='my-5 mx-16 w-3/6 border-neutral-300' />

			<div className='flex flex-col  items-center space-y-3'>
				<div
					className='flex flex-row  font-sans  space-x-3 text-md font-bold  text-stone-600   w-full  pl-5 py-3 
				border-l-8 border-l-blue-600'
				>
					<Link
						to='./'
						className='flex flex-row items-center space-x-3'
					>
						<Settings className='setting-icon' />
						<p className='tracking-widest'> General </p>
					</Link>
				</div>

				<div
					className='flex flex-row  font-sans  space-x-3 text-md font-bold  text-stone-600   w-full  pl-5 py-3 
				border-l-8 border-l-blue-600'
				>
					<Link
						to='./security'
						className='flex flex-row items-center space-x-3'
					>
						<Policy className='setting-icon' />
						<p className='tracking-widest'> Security </p>
					</Link>
				</div>

				<hr className='my-5 mx-16 w-3/6 border-neutral-300' />

				<div
					className='flex flex-row items-center font-sans  space-x-3 text-md font-bold cursor-pointer text-stone-600   w-full pl-5 py-3 
				border-l-8 '
				>
					<Policy className='setting-icon' />
					<p className='tracking-widest'> Notification </p>
				</div>

				<div
					className='flex flex-row items-center font-sans  space-x-3 text-md font-bold cursor-pointer text-stone-600   w-full pl-5  py-3 
				border-l-8'
				>
					<Warning className='setting-icon' />
					<p className='tracking-widest'> Help </p>
				</div>
			</div>
		</div>
	);
};

export default SettingsSidebar;

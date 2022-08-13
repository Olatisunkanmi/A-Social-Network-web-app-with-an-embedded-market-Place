import {
	ChatBubble,
	Email,
	HomeOutlined,
	LocalGroceryStoreOutlined,
	Notifications,
	SearchRounded,
	Settings,
} from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import { UserPicture } from './index';
import Notification from './Notification';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Header = () => {
	const [colorChange, setColorChange] = useState(false);
	const [toggleNotificaton, setToggleNotification] = useState(false);

	const changeNavbarColor = () => {
		if (window.scrollY >= 70) {
			setColorChange(true);
		} else {
			setColorChange(false);
		}
	};

	window.addEventListener('scroll', changeNavbarColor);

	const pathHeader = useLocation().pathname.split('/')[1];
	console.log(pathHeader);

	return (
		<div
			className='w-full items-center z-50 top-0 sticky p-1 flex flex-row bg-white  justify-between border-b-2 
    product-nav
    '
		>
			<div className='flex flex-row text-white w-2/6'>
				<p className='text-2xl text-black font-mono ml-2 capitalize'>
					{pathHeader}
				</p>

				<Link to='./timeline'>
					<p className='ml-4 text-blue-700  p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'>
						<HomeOutlined />
					</p>
				</Link>
				<a
					className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white relative'
					onClick={() => setToggleNotification(!toggleNotificaton)}
				>
					<Notifications />
					{toggleNotificaton && <Notification />}
				</a>
				<a className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'>
					<Email />
				</a>
				<a className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'>
					<ChatBubble />
				</a>
			</div>

			<div className='justify-end text-white items-center flex flex-row rounded-xl  w-2/6 pr-3'>
				<div className='border-2 border-blue-700 rounded-l-lg'>
					<button className='bg-blue-700 w-1/5 p-1'>
						<SearchRounded className=' text-white' />
					</button>
					<input
						type='text'
						placeholder='Search'
						className='w-4/5 outline-none placeholder:text-sm placeholder:text-blue-700 text-black pl-2'
					/>
				</div>

				<div className='flex flex-row text-white items-center'>
					<Link to='/cart/99'>
						<p className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'>
							<LocalGroceryStoreOutlined />
						</p>
					</Link>

					<a className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'>
						<Settings />
					</a>

					<UserPicture className=' text-blue-700' />
				</div>
			</div>
		</div>
	);
};

export default Header;

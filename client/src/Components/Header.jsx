import {
	ChatBubble,
	Email,
	HomeOutlined,
	GridOnOutlined,
	LocalGroceryStoreOutlined,
	MailOutline,
	Notifications,
	SearchOutlined,
	SearchRounded,
	Shop,
	HomeOutlinedOutlined,
} from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import { UserPicture } from './index';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Header = () => {
	const [colorChange, setColorChange] = useState(false);
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
					{' '}
					{pathHeader}{' '}
				</p>

				<Link to='./timeline'>
					<p className='ml-4 text-blue-700  p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'>
						{' '}
						<HomeOutlined />{' '}
					</p>
				</Link>
				<a
					href=''
					className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'
				>
					{' '}
					<Notifications />{' '}
				</a>
				<a
					href=''
					className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'
				>
					{' '}
					<Email />{' '}
				</a>
				<a
					href=''
					className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'
				>
					{' '}
					<ChatBubble />{' '}
				</a>
				<a
					href=''
					className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'
				>
					{' '}
					<GridOnOutlined />{' '}
				</a>
			</div>

			<div className='justify-end text-white items-center flex flex-row rounded-xl  w-2/6 pr-3'>
				<div>
					<SearchRounded className=' text-blue-700' />
					<input
						type='text'
						placeholder='Search'
						id=''
						className='p-2
                                 border-2 font-semibold  text-black outline-blue-700
                                placeholder:text-black 
                                placeholder:font-thin rounded-xl '
					/>
				</div>

				<div className='flex flex-row text-white items-center'>
					<Link to='./products'>
						<p
							href=''
							className='ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white'
						>
							{' '}
							<LocalGroceryStoreOutlined />{' '}
						</p>
					</Link>

					<UserPicture className=' text-blue-700' />
				</div>
			</div>
		</div>
	);
};

export default Header;

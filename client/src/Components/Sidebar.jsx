import React from 'react';
import { UserPicture } from './index';
import {
	ChatBubble,
	Email,
	Home,
	Close,
	Person,
	SearchRounded,
	LocalGroceryStore,
	Settings,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import '../App.css';

const Sidebar = ({ setSidebar }) => {
	return (
		<>
			<div
				className='ml-auto cursor-pointer'
				onClick={() => {
					setSidebar(false);
				}}
			>
				<Close />
			</div>
			<div className='border-b pb-4'>
				<UserPicture />
				<h5 className='font-bold'>Iris Davis</h5>
				<div className='flex gap-x-2 text-md'>
					<p className='font-bold'>
						290K<span className='ml-1 font-medium'>Followers</span>
					</p>
					<p className='font-bold'>
						104<span className='ml-1 font-medium'>Following</span>
					</p>
				</div>
			</div>
			<div className='flex flex-col gap-y-4 mt-4 border-b pb-4 mb-4'>
				<Link
					to='/profile/12'
					className='text-black hover:rounded-md hover:bg-blue-600 py-1 px-2 hoversyd flex items-center gap-x-2'
				>
					<Person className='text-blue-600' /> <span>Profile</span>
				</Link>
				<Link to='/'>
					<p className='text-black hover:rounded-md hover:bg-blue-600 py-1 px-2 hoversyd flex items-center gap-x-2'>
						<Home className='text-blue-600' /> <span>Timeline</span>
					</p>
				</Link>
				<a className='text-black  hover:rounded-md hover:bg-blue-600 py-1 px-2 hoversyd flex items-center gap-x-2'>
					<Email className='text-blue-600' /> <span>Messages</span>
				</a>
				<a className='text-black hover:rounded-md hover:bg-blue-600 py-1 px-2 hoversyd flex items-center gap-x-2'>
					<ChatBubble className='text-blue-600' /> <span>Chat</span>
				</a>
				<Link
					to='/cart/99'
					className='text-black hover:rounded-md hover:bg-blue-600 py-1 px-2 hoversyd flex items-center gap-x-2'
				>
					<LocalGroceryStore className='text-blue-600 ' />{' '}
					<span>Shop</span>
				</Link>
				<Link
					to='/cart/99'
					className='text-black hover:rounded-md hover:bg-blue-600 py-1 px-2 hoversyd flex items-center gap-x-2'
				>
					<LocalGroceryStore className='text-blue-600' />{' '}
					<span>Cart</span>
				</Link>
				<Link
					to='/settings'
					className='text-black hover:rounded-md hover:bg-blue-600 py-1 px-2 hoversyd flex items-center gap-x-2'
				>
					<Settings className='text-blue-600' /> <span>Setting</span>
				</Link>
			</div>
			<form className='border-2 border-blue-600 rounded-l-lg'>
				<button className='bg-blue-600 p-1'>
					<SearchRounded className='text-white' />
				</button>
				<input
					type='search'
					placeholder='Search'
					name='query'
					className='w-4/5 outline-none placeholder:text-sm placeholder:text-black text-black pl-2'
				/>
			</form>
		</>
	);
};

export default Sidebar;

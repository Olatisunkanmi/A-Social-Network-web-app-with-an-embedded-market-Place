import React from 'react';
import { UserPicture } from './index';
import '../App.css';

const Sidebar = () => {
	return (
		<div className='flex flex-col '>
			<div>
				<UserPicture />
			</div>
		</div>
	);
};

export default Sidebar;

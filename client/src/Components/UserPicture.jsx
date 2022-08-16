import React from 'react';
import img from '../Assests/pro.jpg';
import '../App.css';
import { Link } from 'react-router-dom';

const UserPicture = () => {
	return (
		<div>
			<Link to='/profile/12'>
				<img
					src={img}
					alt=''
					height='35px'
					width='40px'
					className='mx-1 rounded-full object-cover cursor-pointer'
				/>
			</Link>
		</div>
	);
};

export default UserPicture;

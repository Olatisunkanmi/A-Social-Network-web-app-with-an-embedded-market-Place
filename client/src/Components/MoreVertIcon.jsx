import React from 'react';
import { MoreVertOutlined } from '@material-ui/icons';
import { useStateContext } from '../Contexts/Context';

const MoreVertIcon = () => {
	return (
		<div>
			<button className=''>
				<MoreVertOutlined />
			</button>
		</div>
	);
};

export default MoreVertIcon;

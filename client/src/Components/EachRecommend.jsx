import React from 'react';
import { UserPicture } from './index';
import { Bookmark } from '@material-ui/icons';

const EachRecommend = () => {
	return (
		<div>
			<div className='border-t-2 border-stone-200 p-3 flex flex-row  items-center'>
				<div
					className='mx-2 p-1  rounded-full 
                    cursor-pointer
                    border-stone-600
                    hover:border-solid
                    hover:border-blue-600'
				>
					<UserPicture />
				</div>

				<div className='flex flex-row w-full justify-between'>
					<div className=''>
						<p className='font-medium font-sans text-md'>
							{' '}
							Family and Love{' '}
						</p>
						<p className='font-thin text-xs'> Family. </p>
					</div>

					<button className='cursor-pointer'>
						<Bookmark />
					</button>
				</div>
			</div>
		</div>
	);
};

export default EachRecommend;

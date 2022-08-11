import React from 'react';
import { Add } from '@material-ui/icons';

const AddStory = () => {
	return (
		<div>
			<div className='border-t-2 border-stone-200 p-3 flex flex-row  items-center'>
				<div
					className='mx-5 p-1 border-2 border-dotted rounded-full 
                        cursor-pointer
                        border-stone-600
                        hover:border-solid
                        hover:border-blue-600'
				>
					<Add className='story-icon' />
				</div>
				<div className=''>
					<p className='font-mono font-semibold text-md'>
						{' '}
						Add a new Story.{' '}
					</p>
					<p className='font-thin text-md'>
						{' '}
						Share an image, a video or some text.{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AddStory;

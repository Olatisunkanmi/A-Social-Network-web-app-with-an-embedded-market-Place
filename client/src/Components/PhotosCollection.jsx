import React from 'react';

const PhotosCollection = ({ img }) => {
	return (
		<div className='w-1/4'>
			<img
				src={img}
				alt=''
				className='w-full h-20 object-cover rounded-xl cursor-pointer'
			/>
		</div>
	);
};

export default PhotosCollection;

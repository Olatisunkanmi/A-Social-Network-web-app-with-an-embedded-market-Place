import React from 'react';
import imgBk from '../Assests/background.png';
import { Link } from 'react-router-dom';
import {
	Update,
	UserPhotoComp,
	UserShopComp,
	MoreVertIcon,
} from '../Components';

const ProfileMain = () => {
	return (
		<div>
			<div className='m-auto  lg:w-3/4'>
				{/**   Background Image   */}

				<div>
					<img
						src={imgBk}
						alt=''
						className='w-full object-cover max-h-72  '
					/>
				</div>

				{/**   BIO  */}

				<div className='flex flex-row justify-around p-5'>
					<div className='w-1/4'></div>

					<div className='w-2/4 space-y-5'>
						<h3 className='text-3xl font-serif'> Iris Davis </h3>

						<div className='flex flex-row space-x-7 text-lg'>
							<Link to=''>
								{' '}
								<p className='cursor-pointer'>
									{' '}
									<span> 190</span> Posts
								</p>
							</Link>
							<Link to=''>
								{' '}
								<p className='cursor-pointer'>
									{' '}
									<span>290K</span> Followers
								</p>
							</Link>
							<Link to=''>
								<p className='cursor-pointer'>
									{' '}
									<span>104 </span> Following{' '}
								</p>{' '}
							</Link>
						</div>

						<div className='text-left text-lg text-serif font-semibold'>
							<p>
								{' '}
								Software Developer | Developer Advocate. Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Molestiae
								dolore ex suscipit deleniti vitae culpa unde vero
								sapiente?
							</p>
						</div>
					</div>

					<div className='w-1/4 text-center'>
						<button className='bg-green-300 px-7 py-1 rounded-lg font-serif cursor-pointer text-lg'>
							{' '}
							Follow{' '}
						</button>
					</div>
				</div>

				{/** End of   BIO  */}

				<div className='w-full flex-row flex space-x-5'>
					<div className='w-2/6 space-y-5'>
						<div className='bg-white rounded-xl p-3 justify-between flex flex-row mb-5'>
							<p className='text-xl font-normal font-serif'>
								{' '}
								User Side Components{' '}
							</p>

							<MoreVertIcon />
						</div>

						<UserPhotoComp />
						<UserShopComp />
					</div>

					{/**User Posts  */}

					<div className='w-4/6 '>
						<div className='space-y-2 flex flex-col'>
							<div className=' justify-between flex flex-row items-center bg-white rounded-xl px-3 border-2 border-stone-100'>
								<h2 className='text-xl font-normal font-serif'>
									Posts
								</h2>

								<div className='flex flex-row'>
									<button>
										{' '}
										<p className='p-2 border-2 border-blue-400 text-black font-thin rounded-lg m-1'>
											{' '}
											Recents{' '}
										</p>
									</button>
									<button>
										{' '}
										<p className='p-2 border-2 border-black text-black font-thin rounded-lg m-1'>
											{' '}
											Popular{' '}
										</p>{' '}
									</button>
								</div>
							</div>

							<div className='w-full text-left flex flex-row'>
								<div className='w-1/12'> </div>

								<div className='w-11/12 justify-self-end'>
									<Update />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileMain;

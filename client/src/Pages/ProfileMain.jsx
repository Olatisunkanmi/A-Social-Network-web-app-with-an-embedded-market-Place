import React from 'react';
import imgBk from '../Assests/background.png';
import img from '../Assests/pro.jpg';
import { Link } from 'react-router-dom';
import {
	Update,
	UserPhotoComp,
	UserShopComp,
	UserPicture,
	MoreVertIcon,
} from '../Components';

const ProfileMain = () => {
	return (
		<div className='m-auto  lg:w-3/4 relative'>
			{/**   Background Image   */}
			<div className='relative'>
				<img
					src={imgBk}
					alt=''
					className='w-full object-cover max-h-72  '
				/>

				<div className=' md:hidden flex flex-row justify-center w-full relative bottom-16'>
					<img
						src={img}
						alt=''
						className='  mx-1 rounded-full object-cover cursor-pointer max-w-2/6  max-h-36 '
					/>
				</div>
			</div>
			{/**   BIO  */}

			<div className='relative bottom-16 md:bottom-0 flex flex-row justify-around p-5'>
				<div className='hidden md:w-1/4'>
					<UserPicture />
				</div>

				<div className=' w-full md:w-2/4 space-y-5'>
					<h3 className='text-3xl font-serif'> Iris Davis </h3>

					<div className='flex flex-row space-x-7 text-lg'>
						<Link to=''>
							<p className='cursor-pointer'>
								<span> 190</span> Posts
							</p>
						</Link>
						<Link to=''>
							<p className='cursor-pointer'>
								<span>290K</span> Followers
							</p>
						</Link>
						<Link to=''>
							<p className='cursor-pointer'>
								<span>104 </span> Following
							</p>
						</Link>
					</div>

					<div className='text-left text-sm  md:text-lg text-serif font-semibold'>
						<p>
							Software Developer | Developer Advocate. Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Molestiae
							dolore ex suscipit deleniti vitae culpa unde vero
							sapiente?
						</p>
					</div>
				</div>

				<div className='w-1/4 text-center'>
					<button className='bg-green-300 px-7 py-1 rounded-lg font-serif cursor-pointer text-lg'>
						Follow
					</button>
				</div>
			</div>
			{/** End of   BIO  */}

			{/**Side Componets */}
			<div className='w-full flex-col-reverse flex md:space-y-0  md:space-x-5 md:flex-row'>
				<div className=' w-full mt-5 md:mt-0 md:w-2/6 space-y-5 '>
					<div className='bg-white rounded-xl p-3 justify-between flex flex-row mb-5'>
						<p className='text-xl font-normal font-serif'>
							User Side Components
						</p>

						<MoreVertIcon />
					</div>

					<UserPhotoComp />
					<UserShopComp />
				</div>

				{/**User Posts  */}

				<div className='w-full md:w-4/6 '>
					<div className='space-y-2 flex flex-col'>
						<div className=' justify-between flex flex-row items-center bg-white rounded-xl px-3 border-2 border-stone-100'>
							<h2 className='text-xl font-normal font-serif'>
								Posts
							</h2>

							<div className='flex flex-row'>
								<button>
									<p className='p-2 border-2 border-blue-400 text-black font-thin rounded-lg m-1'>
										Recents
									</p>
								</button>
								<button>
									<p className='p-2 border-2 border-black text-black font-thin rounded-lg m-1'>
										Popular
									</p>
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
	);
};

export default ProfileMain;

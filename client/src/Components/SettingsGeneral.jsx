import {
	Language,
	LocationOnOutlined,
	MailOutline,
	Person,
} from '@material-ui/icons';
import React from 'react';
import img from '../Assests/setting.svg';

const SettingsGeneral = () => {
	return (
		<div className=' p-20 '>
			<div className='bg-white flex flex-row border-2 rounded-xl border-neutral-400 mb-10'>
				<div className='flex flex-col  p-5 w-1/2'>
					<div className='w-full '>
						<h2 className='text-neutral-600 font-mono text-base font-semibold'>
							{' '}
							General Settings{' '}
						</h2>
					</div>

					<div className='flex flex-row space-x-3 mt-5'>
						<div className='flex flex-col border-2 p-2 rounded-lg w-1/2 '>
							<p className='text-neutral-500 font-semibold tracking-wider font-sans text-xs '>
								Last Name
							</p>
							<div className='items-center flex flex-row p-2 space-x-1'>
								<Person className='text-blue-400 ' />
								<input type='text' placeholder='Collins' />
							</div>
						</div>

						<div className='flex flex-col border-2 p-2 rounded-lg w-1/2 '>
							<p className='text-neutral-500 font-semibold tracking-wider font-sans text-xs '>
								First Name
							</p>
							<div className='items-center flex flex-row p-2 space-x-1'>
								<Person className='text-blue-400 ' />
								<input type='text' placeholder='Jenna' />
							</div>
						</div>
					</div>

					<div className='flex flex-row space-x-3 mt-5'>
						<div className='flex flex-col border-2 p-2 rounded-lg w-1/2 '>
							<p className='text-neutral-500 font-semibold tracking-wider font-sans text-xs '>
								EMAIL
							</p>
							<div className='items-center flex flex-row p-2 space-x-1'>
								<MailOutline className='text-blue-400 ' />
								<input type='text' placeholder='Collinsgoodnew@.et' />
							</div>
						</div>

						<div className='flex flex-col border-2 p-2 rounded-lg w-1/2 '>
							<p className='text-neutral-500 font-semibold tracking-wider font-sans text-xs '>
								Backup - EMAIL
							</p>
							<div className='items-center flex flex-row p-2 space-x-1'>
								<MailOutline className='text-blue-400 ' />
								<input type='text' placeholder='Jennagas@xyx.com' />
							</div>
						</div>
					</div>

					<textarea
						className='mt-3 border-2 p-2 rounded-lg outline-none'
						placeholder='Your Address...'
					></textarea>

					<div className='mt-3 p-2'>
						<p className='w-1/2 font-semibold'>
							{' '}
							Be sure to fill out your location settings. This will
							help us suggest you relevant friends and places you
							could like{' '}
						</p>

						<div className='flex flex-row space-x-3 mt-5'>
							<div className='flex flex-col border-2 p-2 rounded-lg w-1/2 '>
								<p className='text-neutral-500 font-semibold tracking-wider font-sans text-xs '>
									CITY
								</p>
								<div className='items-center flex flex-row p-2 space-x-1'>
									<LocationOnOutlined className='text-blue-400 ' />
									<input type='text' placeholder='Lagos' />
								</div>
							</div>

							<div className='flex flex-col border-2 p-2 rounded-lg w-1/2 '>
								<p className='text-neutral-500 font-semibold tracking-wider font-sans text-xs '>
									Country
								</p>
								<div className='items-center flex flex-row p-2 space-x-1'>
									<Language className='text-blue-400 ' />
									<input type='text' placeholder='Nigeria' />
								</div>
							</div>
						</div>
					</div>

					<div className=' mt-4 lg:mt-10 lg:space-x-2'>
						<button className='py-3 text-white font-semibold  rounded-xl  px-7 bg-blue-500'>
							{' '}
							Save Changes{' '}
						</button>
						<button className='py-3 text-white font-semibold  rounded-xl  px-7 bg-red-500'>
							{' '}
							Discard Changes{' '}
						</button>
					</div>
				</div>

				<div className='w-1/2 p-10'>
					<img src={img} alt='' className='w-full' />
				</div>
			</div>
		</div>
	);
};

export default SettingsGeneral;

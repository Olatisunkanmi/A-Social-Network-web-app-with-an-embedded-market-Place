import {
	Language,
	LocationOnOutlined,
	Lock,
	MailOutline,
	NoEncryption,
	Phone,
} from '@material-ui/icons';

import { Person } from '@material-ui/icons';

import React from 'react';
import img from '../Assests/pass.svg';

const SettingsSecurity = () => {
	return (
		<div className='bg-white flex flex-row border-2 rounded-xl border-neutral-400 mb-10'>
			<div className='flex flex-col  p-5 w-full  '>
				<div className='w-full '>
					<h2 className='text-neutral-600 font-mono text-base font-semibold'>
						{' '}
						Security Settings{' '}
					</h2>
				</div>

				<div className='flex flex-row space-x-3 mt-5'>
					<div className='flex flex-col border-2 p-2 rounded-lg w-full '>
						<p className='text-neutral-500 font-semibold tracking-wider font-sans text-xs '>
							Current Password
						</p>
						<div className='items-center flex flex-row p-2 space-x-1 '>
							<NoEncryption className='text-blue-400 ' />
							<input
								type='text'
								placeholder='*****************'
								className='w-full  outline-none'
							/>
						</div>
					</div>
				</div>

				<div className='flex flex-row space-x-3 mt-5'>
					<div className='flex flex-col border-2 p-2 rounded-lg w-1/2  '>
						<p className='text-neutral-500 font-semibold tracking-wider font-sans text-xs '>
							Password
						</p>
						<div className='items-center flex flex-row p-2 space-x-1'>
							<MailOutline className='text-blue-400 ' />
							<input
								type='text'
								placeholder='**************'
								className='w-full  outline-none'
							/>
						</div>
					</div>

					<div className='flex flex-col border-2 p-2 rounded-lg w-1/2 '>
						<p className='text-neutral-500 font-semibold tracking-wider font-sans text-xs '>
							New -Password
						</p>
						<div className='items-center flex flex-row p-2 space-x-1'>
							<MailOutline className='text-blue-400 ' />
							<input
								type='text'
								placeholder='**************'
								className='w-full  outline-none'
							/>
						</div>
					</div>
				</div>

				<div className='mt-3 p-2'>
					<p className='w-1/2 font-semibold'>
						You can enable 2 factor authentication anytime to improve
						your account privacy and security.
					</p>

					<div className='flex flex-row space-x-3 mt-5'>
						<div className='flex flex-col border-2 p-2 rounded-lg w-1/2 '>
							<p className='text-neutral-500 font-semibold tracking-wider font-sans text-xs '>
								Phone-Nmber
							</p>
							<div className='items-center flex flex-row p-2 space-x-1'>
								<Phone className='text-blue-400 ' />
								<input
									type='text'
									placeholder='+234 90 ..'
									className='w-full  outline-none'
								/>
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

			<div className='hidden p-10 xl:w-3/4 xl:block '>
				<img src={img} alt='' className='w-3/4 m-auto' />
			</div>
		</div>
	);
};

export default SettingsSecurity;

import { ToggleOff } from '@material-ui/icons';
import React from 'react';
import img from '../Assests/notify.svg';

const SettingsNotification = () => {
	return (
		<div className='bg-white flex flex-row border-2 rounded-xl border-neutral-400 mb-10'>
			<div className='flex flex-col  p-5 w-full  '>
				<div className='w-full '>
					<h2 className='text-neutral-600 font-mono text-base font-semibold'>
						Notification Settings
					</h2>
				</div>

				<div className='flex flex-col space-y-10 mt-5'>
					<div className='space-y-3'>
						<p className='text-black   text-sm'>
							{' '}
							GENERAL NOTIFICATIONS{' '}
						</p>

						<div className='flex flex-row items-center space-x-3'>
							<ToggleOff />
							<div>
								<p className='text-base text-black font-semibold'>
									{' '}
									Notifications{' '}
								</p>
								<p className='text-xs text-neutral-500'>
									{' '}
									Enable to achieve notifications{' '}
								</p>
							</div>
						</div>

						<div className='flex flex-row items-center space-x-3'>
							<ToggleOff />
							<div>
								<p className='text-base text-black font-semibold'>
									{' '}
									Sounds{' '}
								</p>
								<p className='text-xs text-neutral-500'>
									Enable to play a sound on new notification.
								</p>
							</div>
						</div>
					</div>

					<div className='space-y-3'>
						<p className='text-black   text-sm'>
							{' '}
							SOCIAL NOTIFICATIONS{' '}
						</p>

						<div className='flex flex-row items-center space-x-3'>
							<ToggleOff />
							<div>
								<p className='text-base text-black font-semibold'>
									{' '}
									Friend Request{' '}
								</p>
								<p className='text-xs text-neutral-500'>
									Enable to receive friend request notifications.
								</p>
							</div>
						</div>

						<div className='flex flex-row items-center space-x-3'>
							<ToggleOff />
							<div>
								<p className='text-base text-black font-semibold'>
									{' '}
									New Comment{' '}
								</p>
								<p className='text-xs text-neutral-500'>
									Enable to receive new comment notifications.
								</p>
							</div>
						</div>
					</div>

					<div className='space-y-3'>
						<p className='text-black   text-sm'>
							{' '}
							CHAT NOTIFICATIONS{' '}
						</p>

						<div className='flex flex-row items-center space-x-3'>
							<ToggleOff />
							<div clas>
								<p className='text-base text-black font-semibold'>
									{' '}
									New Message{' '}
								</p>
								<p className='text-xs text-neutral-500'>
									Enable to receive new message notifications.
								</p>
							</div>
						</div>
					</div>

					<div className='space-y-3'>
						<p className='text-black   text-sm'>
							{' '}
							PAYMENT NOTIFICATIONS{' '}
						</p>

						<div className='flex flex-row items-center space-x-3'>
							<ToggleOff />
							<div clas>
								<p className='text-base text-black font-semibold'>
									Payment Status{' '}
								</p>
								<p className='text-xs text-neutral-500'>
									Enable to receive a notification on payment status
									change.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className=' mt-4 lg:mt-10 lg:space-x-2'>
					<button className='py-3 text-white font-semibold  rounded-xl  px-7 bg-blue-500'>
						Save Changes
					</button>
					<button className='py-3 text-white font-semibold  rounded-xl  px-7 bg-red-500'>
						Discard Changes
					</button>
				</div>
			</div>

			<div className='hidden p-10 md:w-2/4 xl:w-3/4 md:block  m-auto'>
				<img src={img} alt='' className=' w-full xl:w-3/4' />
			</div>
		</div>
	);
};

export default SettingsNotification;

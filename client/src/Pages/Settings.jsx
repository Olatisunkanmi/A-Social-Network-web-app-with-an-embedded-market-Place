import React from 'react';
import {
	SettingsSidebar,
	SettingsGeneral,
	SettingsSecurity,
} from '../Components/index';
import { Route, Routes } from 'react-router-dom';
import '../App.css';

const Settings = () => {
	return (
		<div className='w-full flex flex-row '>
			<div className=' hidden border-2 border-neutral-500 border-y-0  md:w-3/12 xl:w-2/12'>
				<SettingsSidebar />
			</div>

			<div className='p-10 md:w-8/12 xl:w-9/12 m-auto w-full'>
				<Routes>
					<Route exact path='/' element={<SettingsGeneral />} />
				</Routes>
			</div>
		</div>
	);
};

export default Settings;

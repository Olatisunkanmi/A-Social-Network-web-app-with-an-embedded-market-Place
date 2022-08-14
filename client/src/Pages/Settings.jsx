import React from 'react';
import {
	SettingsSidebar,
	SettingsGeneral,
	SettingsSecurity,
} from '../Components/index';
import { Route, Routes } from 'react-router-dom';

const Settings = () => {
	return (
		<div className='w-full flex flex-row'>
			<SettingsSidebar />
			<Routes>
				<Route exact path='/general' element={<SettingsGeneral />} />
				<Route
					exact
					path='/security'
					element={<SettingsSecurity />}
				/>
			</Routes>
		</div>
	);
};

export default Settings;

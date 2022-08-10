import React from 'react';
import { Header } from '../Components';
import '../App.css';
import { useStateContext } from '../Contexts/Context';

const Welcome = () => {
	const { sideBar, setSideBar } = useStateContext();
	return (
		<div
			className={` text-black flex flex-col p-20 
    ${sideBar ? 'w-3/5  m-auto' : 'w-9/12 m-auto'}`}
		>
			<Header />
			<p> TIME LINE</p>
		</div>
	);
};

export default Welcome;

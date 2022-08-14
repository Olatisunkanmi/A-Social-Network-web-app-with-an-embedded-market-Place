import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Welcome, Header, Sidebar } from './Components/index';
import {
	Products,
	Timeline,
	ProfileMain,
	Cart,
	CheckOut,
	Payment,
	Settings,
} from './Pages';
import { useState } from 'react';

function App() {
	const [sidebar, setSidebar] = useState(false);

	return (
		<div className='bg-neutral-100'>
			<Header setSidebar={setSidebar} />
			<Routes>
				<Route exact path='/' element={<Timeline />} />
				<Route exact path='/friends' element={<Welcome />} />
				<Route exact path='/profile/:id' element={<ProfileMain />} />
				<Route exact path='/cart/:id' element={<Cart />} />
				<Route exact path='/checkout/:id' element={<CheckOut />} />
				<Route exact path='/payment' element={<Payment />} />
				<Route exact path='/products/:id' element={<Products />} />
				<Route exact path='/settings/*' element={<Settings />} />
			</Routes>
			<aside
				className={`fixed ${
					sidebar ? 'right-0' : '-right-full'
				} top-0 bg-white flex flex-col h-screen w-3/4 sm:w-2/4 px-6 py-2 md:hidden z-50 transition-all duration-700`}
			>
				<Sidebar setSidebar={setSidebar} />
			</aside>
		</div>
	);
}

export default App;

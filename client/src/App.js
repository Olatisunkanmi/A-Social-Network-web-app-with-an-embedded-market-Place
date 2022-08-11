import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Welcome, Header } from './Components/index';
import { Products, Timeline, ProfileMain, Cart } from './Pages/index';

function App() {
	return (
		<div className='bg-neutral-100'>
			<Header />
			<Routes>
				<Route exact path='/timeline' element={<Timeline />} />
				<Route exact path='/friends' element={<Welcome />} />
				<Route exact path='/profile/:id' element={<ProfileMain />} />
				<Route exact path='/profile/cart/:id' element={<Cart />} />
				<Route exact path='/products/:id' element={<Products />} />
			</Routes>
		</div>
	);
}

export default App;

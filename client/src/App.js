import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Welcome, Header } from './Components/index';
import {
	Products,
	Timeline,
	ProfileMain,
	Cart,
	CheckOut,
	Payment,
	Settings,
} from './Pages/index';

function App() {
	return (
		<div className='bg-neutral-100'>
			<Header />
			<Routes>
				<Route exact path='/timeline' element={<Timeline />} />
				<Route exact path='/friends' element={<Welcome />} />
				<Route exact path='/profile/:id' element={<ProfileMain />} />
				<Route exact path='/cart/:id' element={<Cart />} />
				<Route exact path='/checkout/:id' element={<CheckOut />} />
				<Route exact path='/payment' element={<Payment />} />
				<Route exact path='/products/:id' element={<Products />} />
				<Route exact path='/settings' element={<Settings />} />
			</Routes>
		</div>
	);
}

export default App;

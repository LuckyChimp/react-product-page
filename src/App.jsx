import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Lightbox from './components/Lightbox';

function App() {
	// TODO edit README.md, create screenshot.png in root folder

	return (
		<Router>
			<Navbar></Navbar>

			<Product></Product>

			<footer>
				<div className='attribution'>
					Challenge by{' '}
					<a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
						Frontend Mentor
					</a>
					. Coded by <a href='https://github.com/LuckyChimp'>LuckyChimp</a>.
				</div>
			</footer>

			<Lightbox></Lightbox>
		</Router>
	);
}

export default App;

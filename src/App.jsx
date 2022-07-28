import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Lightbox from './components/Lightbox';

function App() {
	// TODO edit README.md, create screenshot.png in root folder
	const [lightboxStates, setLightboxStates] = useState({ imageId: null, visible: false });

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				setLightboxStates({ ...lightboxStates, visible: false });
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	const openLightbox = (id) => {
		setLightboxStates({ ...lightboxStates, imageId: id, visible: true });
	};

	return (
		<Router>
			<Navbar></Navbar>

			<Product openLightbox={(id) => openLightbox(id)}></Product>

			<footer>
				<div className='attribution'>
					Challenge by{' '}
					<a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
						Frontend Mentor
					</a>
					. Coded by <a href='https://github.com/LuckyChimp'>LuckyChimp</a>.
				</div>
			</footer>

			<Lightbox visible={lightboxStates.visible} imageId={lightboxStates.imageId}></Lightbox>
		</Router>
	);
}

export default App;

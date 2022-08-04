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
				closeLightbox();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [lightboxStates, closeLightbox]);

	const openLightbox = (id) => {
		setLightboxStates({ ...lightboxStates, imageId: id, visible: true });
	};

	function closeLightbox() {
		// avoid too many rerenders
		if (lightboxStates.visible) {
			setLightboxStates({ ...lightboxStates, visible: false });
		}
	}

	return (
		<Router>
			<Navbar />

			<Product openLightbox={(id) => openLightbox(id)} />

			<footer>
				<div className='attribution'>
					Challenge by{' '}
					<a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
						Frontend Mentor
					</a>
					. Coded by <a href='https://github.com/LuckyChimp'>LuckyChimp</a>.
				</div>
			</footer>

			<Lightbox
				visible={lightboxStates.visible}
				imageId={lightboxStates.imageId}
				closeLightbox={() => closeLightbox()}
			/>
		</Router>
	);
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import Lightbox from './components/Lightbox';

import Product from './classes/Product';
import ProductImage1 from './assets/images/image-product-1.jpg';
import ProductImage2 from './assets/images/image-product-2.jpg';
import ProductImage3 from './assets/images/image-product-3.jpg';
import ProductImage4 from './assets/images/image-product-4.jpg';
import ProductThumbnail1 from './assets/images/image-product-1-thumbnail.jpg';
import ProductThumbnail2 from './assets/images/image-product-2-thumbnail.jpg';
import ProductThumbnail3 from './assets/images/image-product-3-thumbnail.jpg';
import ProductThumbnail4 from './assets/images/image-product-4-thumbnail.jpg';

function App() {
	// TODO edit README.md, create screenshot.png in root folder
	const currencyChar = '$';

	const [lightboxStates, setLightboxStates] = useState({ imageId: null, visible: false });
	const [product, setProduct] = useState(
		new Product(
			1,
			'Fall Limited Edition\nSneakers',
			'Sneaker Company',
			"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
			250,
			0.5,
			0,
			[ProductImage1, ProductImage2, ProductImage3, ProductImage4],
			[ProductThumbnail1, ProductThumbnail2, ProductThumbnail3, ProductThumbnail4]
		)
	);
	const [cartItems, setCartItems] = useState([]);

	const closeLightbox = useCallback(() => {
		// avoid too many rerenders
		if (lightboxStates.visible) {
			setLightboxStates({ ...lightboxStates, visible: false });
		}
	}, [lightboxStates]);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				closeLightbox();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		lightboxStates.visible
			? document.body.classList.add('prevent-scrolling')
			: document.body.classList.remove('prevent-scrolling');

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [lightboxStates, closeLightbox]);

	const openLightbox = (id) => {
		setLightboxStates({ ...lightboxStates, imageId: id, visible: true });
	};

	const changeProductAmount = (changeBy) => {
		setProduct({ ...product, amount: product.amount + changeBy });
	};

	const addProductToCart = (product) => {
		const foundIndex = cartItems.findIndex((item) => item.id === product.id);
		if (foundIndex === -1) {
			setCartItems([...cartItems, product]);
		} else {
			let _cartItems = [...cartItems];
			_cartItems[foundIndex] = { ...product, amount: _cartItems[foundIndex].amount + product.amount };
			setCartItems(_cartItems);
		}
	};

	const deleteProductFromCart = (productId) => {
		setCartItems([...cartItems].filter((item) => item.id !== productId));
	};

	return (
		<Router>
			<Navbar
				currencyChar={currencyChar}
				cartItems={cartItems}
				deleteProductFromCart={(productId) => deleteProductFromCart(productId)}
			/>

			<ProductPage
				openLightbox={(id) => openLightbox(id)}
				currencyChar={currencyChar}
				product={product}
				changeProductAmount={(changeBy) => changeProductAmount(changeBy)}
				addProductToCart={(product) => addProductToCart(product)}
			/>

			<footer>
				<div className='attribution'>
					Challenge by{' '}
					<a
						href='https://www.frontendmentor.io?ref=challenge'
						target='_blank'
						rel='noreferrer'
					>
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

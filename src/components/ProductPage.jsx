import { useState, useEffect } from 'react';

import ImagePreview from './ImagePreview';
import { ReactComponent as CartIcon } from '../assets/images/icon-cart.svg';
import scssVariables from '../_variables.scss';

const ProductPage = ({ openLightbox, currencyChar, product, changeProductAmount, addProductToCart }) => {
	const [portraitMode, setPortraitMode] = useState(isPortraitMode());
	useEffect(() => {
		const onWindowResize = () => {
			setPortraitMode(isPortraitMode());
		};

		window.addEventListener('resize', onWindowResize);

		return () => {
			window.removeEventListener('resize', onWindowResize);
		};
	}, []);

	function isPortraitMode() {
		return window.innerWidth < parseInt(String(scssVariables.breakpoint_tablet).replace('px', ''));
	}

	const onAmountControlClick = (changeByValue) => {
		// prevents the amount from taking on negative values
		if (product.amount + changeByValue >= 0) {
			changeProductAmount(changeByValue);
		}
	};

	return (
		<main>
			<ImagePreview
				canOpenLightbox={true}
				openLightbox={openLightbox}
				defaultImageId={1}
				displayControls={portraitMode}
			/>
			<div className='product-details'>
				<div className='product-text-container'>
					<h3 className='product-producer'>{product.producer}</h3>
					<h1 className='product-title'>{product.title}</h1>
					<p className='product-description'>{product.description}</p>
				</div>
				<div className='product-price-container'>
					<div className='product-price-left-container'>
						<h2 className='product-current-price'>{`${currencyChar}${(
							product.pricePerPiece.toFixed(2) * product.discount
						).toFixed(2)}`}</h2>
						<span className='product-discount'>{`${product.discount * 100}%`}</span>
					</div>
					<span className='product-original-price product-price-right'>{`${currencyChar}${product.pricePerPiece.toFixed(
						2
					)}`}</span>
				</div>
				<div className='product-controls-container'>
					<div className='product-amount-control'>
						<button
							className='product-amount-control-decrease'
							onClick={() => onAmountControlClick(-1)}
							aria-label='Decrease amount'
						>
							-
						</button>
						<span className='product-amount-control-display'>{product.amount}</span>
						<button
							className='product-amount-control-increase'
							onClick={() => onAmountControlClick(+1)}
							aria-label='Increase amount'
						>
							+
						</button>
					</div>
					<button
						className='product-add-to-cart'
						onClick={() => addProductToCart(product)}
						disabled={product.amount === 0 ? true : false}
					>
						<CartIcon className='product-add-to-cart-icon' />
						<span className='product-add-to-cart-text'>Add to cart</span>
					</button>
				</div>
			</div>
		</main>
	);
};

export default ProductPage;

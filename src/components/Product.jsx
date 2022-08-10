import ImagePreview from './ImagePreview';
import { ReactComponent as CartIcon } from '../assets/images/icon-cart.svg';

const Product = ({ openLightbox }) => {
	return (
		<main>
			<ImagePreview canOpenLightbox={true} openLightbox={openLightbox} defaultImageId={1} displayControls={false} />
			<div className='product-details'>
				<div className='product-text-container'>
					<h3 className='product-producer'>Sneaker Company</h3>
					<h1 className='product-title'>Fall Limited Edition Sneakers</h1>
					<p className='product-description'>
						These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
						they'll withstand everything the weather can offer.
					</p>
				</div>
				<div className='product-price-container'>
					<h2 className='product-current-price'>$125.00</h2>
					<span className='product-discount'>50%</span>
					<span className='product-original-price'>$250.00</span>
				</div>
				<div className='product-controls-container'>
					<div className='product-amount-control'>
						<button className='product-amount-control-decrease'>-</button>
						<span className='product-amount-control-display'>0</span>
						<button className='product-amount-control-increase'>+</button>
					</div>
					<button className='product-add-to-cart'>
						<CartIcon className='product-add-to-cart-icon' />
						<span className='product-add-to-cart-text'>Add to cart</span>
					</button>
				</div>
			</div>
		</main>
	);
};

export default Product;

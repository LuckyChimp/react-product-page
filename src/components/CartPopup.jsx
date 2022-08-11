import { useState } from 'react';
import ProductImage from '../assets/images/image-product-1-thumbnail.jpg';
import { ReactComponent as DeleteIcon } from '../assets/images/icon-delete.svg';

const CartPopup = ({ onMouseLeave, currencyChar }) => {
	const [cartItems, setCartItems] = useState([
		// TODO deliver this following object when clicking Add to cart button
		// TODO and check after receiving this object if this kind of product already exist in cartItems; if so --> sum amounts up; if not --> concat to cartItems
		// TODO add new amount to cart product amount badge
		{
			productId: 1,
			productTitle: 'Fall Limited Edition Sneakers',
			productPricePerPiece: 125.0,
			productAmount: 3,
			productImage: ProductImage
		}
	]);

	const CartItem = ({ productTitle, productPricePerPiece, productAmount, productImage }) => {
		return (
			<div className='cart-popup-item'>
				<img src={productImage} alt='product' className='cart-popup-item-image' width={60} height={60} />
				<div className='cart-popup-item-details'>
					<span className='cart-popup-item-title'>{productTitle}</span>
					<span className='cart-popup-item-price-calculation'>
						<span className='cart-popup-item-price-per-piece'>{`${currencyChar}${productPricePerPiece.toFixed(
							2
						)}`}</span>
						<span className='cart-popup-item-times'>x</span>
						<span className='cart-popup-item-amount'>{productAmount}</span>
						<span className='cart-popup-item-total-price'>{`${currencyChar}${(
							productPricePerPiece * productAmount
						).toFixed(2)}`}</span>
					</span>
				</div>
				{
					// TODO add delete functionality for every item
				}
				<button className='cart-popup-item-delete-button'>
					<DeleteIcon className='cart-popup-item-delete-icon' />
				</button>
			</div>
		);
	};

	return (
		<div className='cart-popup' onMouseLeave={onMouseLeave}>
			<h3 className='cart-popup-headline'>Cart</h3>
			<div className='cart-popup-content'>
				{cartItems.length > 0 ? (
					<>
						<div className='cart-popup-items'>
							{cartItems.map((cartItem) => {
								return (
									<CartItem
										key={cartItem.productId}
										productTitle={cartItem.productTitle}
										productAmount={cartItem.productAmount}
										productPricePerPiece={cartItem.productPricePerPiece}
										productImage={cartItem.productImage}
									/>
								);
							})}
						</div>
						<button className='cart-popup-checkout'>Checkout</button>
					</>
				) : (
					<p className='cart-popup-empty-message'>Your cart is empty.</p>
				)}
			</div>
		</div>
	);
};

export default CartPopup;

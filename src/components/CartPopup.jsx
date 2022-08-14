import { ReactComponent as DeleteIcon } from '../assets/images/icon-delete.svg';

const CartPopup = ({ onMouseLeave, currencyChar, cartItems, deleteProductFromCart }) => {
	const CartItem = ({ product }) => {
		return (
			<div className='cart-popup-item'>
				<img src={product.cartThumbnail} alt='product' className='cart-popup-item-image' width={60} height={60} />
				<div className='cart-popup-item-details'>
					<span className='cart-popup-item-title'>{product.title}</span>
					<span className='cart-popup-item-price-calculation'>
						<span className='cart-popup-item-price-per-piece'>{`${currencyChar}${(
							product.pricePerPiece * product.discount
						).toFixed(2)}`}</span>
						<span className='cart-popup-item-times'>x</span>
						<span className='cart-popup-item-amount'>{product.amount}</span>
						<span className='cart-popup-item-total-price'>{`${currencyChar}${(
							product.pricePerPiece * product.amount
						).toFixed(2)}`}</span>
					</span>
				</div>
				<button className='cart-popup-item-delete-button' onClick={() => deleteProductFromCart(product.id)}>
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
								return <CartItem key={cartItem.id} product={cartItem} />;
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

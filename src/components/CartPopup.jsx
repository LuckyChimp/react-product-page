import { useState } from 'react';
import './CartPopup.scss';

const CartPopup = () => {
	const [items, setItems] = useState([]);

	return (
		<div className='cart-popup'>
			<h3 className='cart-popup-headline'>Cart</h3>
			<div className='cart-popup-content'>
				{items.length > 0 ? (
					<>
						<div className='cart-popup-items'>{items}</div>
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

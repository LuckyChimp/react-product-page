import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import CartPopup from './CartPopup';
import { ReactComponent as CompanyLogo } from '../assets/images/logo.svg';
import { ReactComponent as CartIcon } from '../assets/images/icon-cart.svg';
import { ReactComponent as MenuIcon } from '../assets/images/icon-menu.svg';
import Avatar from '../assets/images/image-avatar.png';

const Navbar = ({ currencyChar, cartItems, deleteProductFromCart }) => {
	const [sidebarVisible, setSidebarVisible] = useState(false);
	const [cartPopupVisible, setCartPopupVisible] = useState(false);
	const [cartPopupPermanent, setCartPopupPermanent] = useState(false);
	const [cartAmount, setCartAmount] = useState(0);

	const useOutsideClick = (callback) => {
		const ref = useRef();

		useEffect(() => {
			const handleClick = (event) => {
				const cartPopup = document.getElementsByClassName('cart-popup')[0];
				if (
					ref.current &&
					cartPopup &&
					event.target !== cartPopup &&
					!cartPopup.contains(event.target) &&
					!ref.current.contains(event.target)
				) {
					callback();
				}
			};
			document.addEventListener('click', handleClick);

			setCartAmount(cartItems.reduce((prevItem, currItem) => prevItem + currItem.amount, 0));

			return () => {
				document.removeEventListener('click', handleClick);
			};
		}, [ref, callback]);

		return ref;
	};

	const handleOutsideClick = () => {
		if (cartPopupPermanent) {
			setCartPopupVisible(false);
			setCartPopupPermanent(false);
		}
	};

	const ref = useOutsideClick(handleOutsideClick);

	const NavLinks = () => {
		return (
			<>
				<NavLink
					to='/'
					className='nav-link nav-link-collections'
				>
					Collections
				</NavLink>
				<NavLink
					to='/'
					className='nav-link nav-link-men'
				>
					Men
				</NavLink>
				<NavLink
					to='/'
					className='nav-link nav-link-women'
				>
					Women
				</NavLink>
				<NavLink
					to='/'
					className='nav-link nav-link-about'
				>
					About
				</NavLink>
				<NavLink
					to='/'
					className='nav-link nav-link-contact'
				>
					Contact
				</NavLink>
			</>
		);
	};

	return (
		<nav>
			<div className='nav-left-container'>
				<button
					className='nav-sidebar-toggle'
					onClick={() => setSidebarVisible(true)}
					aria-label='Sidebar toggle'
				>
					<MenuIcon />
				</button>
				<Sidebar
					NavLinks={NavLinks}
					hideSidebar={() => setSidebarVisible(false)}
					visible={sidebarVisible}
				/>
				<NavLink
					to='/'
					aria-label='Company logo'
				>
					<CompanyLogo
						className='nav-logo'
						width={138}
						height={20}
					/>
				</NavLink>

				<div className='nav-links'>
					<NavLinks />
				</div>
			</div>

			<div className='nav-right-container'>
				<div className='nav-shopping-cart'>
					<button
						className='nav-shopping-cart-button'
						onMouseEnter={() => {
							if (!cartPopupPermanent) setCartPopupVisible(true);
						}}
						onMouseLeave={(e) => {
							// don't hide popup if cursor leaves the bottom of element
							if (e.clientY >= e.target.getBoundingClientRect().bottom) {
								return;
							}
							if (!cartPopupPermanent) setCartPopupVisible(false);
						}}
						onClick={() => {
							if (!cartPopupPermanent) {
								setCartPopupVisible(true);
								setCartPopupPermanent(true);
							} else {
								setCartPopupVisible(false);
								setCartPopupPermanent(false);
							}
						}}
						ref={ref}
						aria-label='Shopping cart'
					>
						<CartIcon className='nav-shopping-cart-icon' />
						{cartAmount > 0 && <span className='nav-shopping-cart-amount-badge'>{cartAmount}</span>}
					</button>
					{cartPopupVisible && (
						<CartPopup
							onMouseLeave={() => {
								if (!cartPopupPermanent) setCartPopupVisible(false);
							}}
							currencyChar={currencyChar}
							cartItems={cartItems}
							deleteProductFromCart={deleteProductFromCart}
						/>
					)}
				</div>
				<button
					className='nav-profile'
					aria-label='Profile'
				>
					<img
						src={Avatar}
						alt='user avatar'
						className='nav-profile-avatar'
					/>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

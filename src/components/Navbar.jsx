import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CompanyLogo } from '../assets/images/logo.svg';
import Avatar from '../assets/images/image-avatar.png';
import { ReactComponent as CartIcon } from '../assets/images/icon-cart.svg';
import CartPopup from './CartPopup';

const Navbar = ({ currencyChar }) => {
	const [cartPopupVisible, setCartPopupVisible] = useState(false);
	const [cartPopupPermanent, setCartPopupPermanent] = useState(false);

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

	return (
		<nav>
			<div className='nav-left-container'>
				<NavLink to='/'>
					<CompanyLogo alt='sneakers logo' className='nav-logo' width={138} height={20} />
				</NavLink>

				<div className='nav-links'>
					<NavLink to='/' className='nav-link nav-link-collections'>
						Collections
					</NavLink>
					<NavLink to='/' className='nav-link nav-link-men'>
						Men
					</NavLink>
					<NavLink to='/' className='nav-link nav-link-women'>
						Women
					</NavLink>
					<NavLink to='/' className='nav-link nav-link-about'>
						About
					</NavLink>
					<NavLink to='/' className='nav-link nav-link-contact'>
						Contact
					</NavLink>
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
					>
						<CartIcon className='nav-shopping-cart-icon' />
					</button>
					{cartPopupVisible && (
						<CartPopup
							onMouseLeave={() => {
								if (!cartPopupPermanent) setCartPopupVisible(false);
							}}
							currencyChar={currencyChar}
						/>
					)}
				</div>
				<button className='nav-profile'>
					<img src={Avatar} alt='user avatar' className='nav-profile-avatar' />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

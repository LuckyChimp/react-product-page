import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import CompanyLogo from '../assets/images/logo.svg';
import CartIcon from './icons/CartIcon';
import Avatar from '../assets/images/image-avatar.png';
import CartPopup from './CartPopup';

const Navbar = () => {
	const [cartPopupVisible, setCartPopupVisible] = useState(false);
	const [cartPopupPermanent, setCartPopupPermanent] = useState(false);

	const useOutsideClick = (callback) => {
		const ref = useRef();

		useEffect(() => {
			const handleClick = (event) => {
				if (ref.current && !ref.current.contains(event.target)) {
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
					<img src={CompanyLogo} alt='sneakers logo' className='nav-logo' />
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
						onMouseLeave={() => {
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
						<CartIcon className='nav-shopping-cart-icon'></CartIcon>
					</button>
					{cartPopupVisible && <CartPopup></CartPopup>}
				</div>
				<button className='nav-profile'>
					<img src={Avatar} alt='user avatar' className='nav-profile-avatar' />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

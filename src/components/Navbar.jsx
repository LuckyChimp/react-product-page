import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import CompanyLogo from '../assets/images/logo.svg';
import CartIcon from './icons/CartIcon';
import Avatar from '../assets/images/image-avatar.png';
import CartPopup from './CartPopup';

const Navbar = () => {
	const [cartPopupVisible, setCartPopupVisible] = useState(false);

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
						onMouseEnter={() => setCartPopupVisible(true)}
						onMouseLeave={() => setCartPopupVisible(false)}
					>
						<CartIcon className='nav-shopping-cart-icon'></CartIcon>
					</button>
					<CartPopup visible={cartPopupVisible}></CartPopup>
				</div>
				<button className='nav-profile'>
					<img src={Avatar} alt='user avatar' className='nav-profile-avatar' />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

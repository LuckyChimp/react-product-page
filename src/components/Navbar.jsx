import './Navbar.scss';
import CompanyLogo from '../assets/images/logo.svg';
import CartIcon from '../assets/images/icon-cart.svg';
import Avatar from '../assets/images/image-avatar.png';

const Navbar = () => {
  return (
    <nav>
      <img src={CompanyLogo} alt='sneakers logo' className='nav-logo' />
      <a href='/' className='nav-collections'>
        /* TODO maybe import as Route or Link - dive into topic */ Collections
      </a>
      <a href='/' className='nav-men'>
        Men
      </a>
      <a href='/' className='nav-women'>
        Women
      </a>
      <a href='/' className='nav-about'>
        About
      </a>
      <a href='/' className='nav-contact'>
        Contact
      </a>
      <button className='nav-shopping-cart'>
        <img src={CartIcon} alt='icon from a shopping cart' className='nav-shopping-cart-icon' />
      </button>
      <button className='nav-profile'>
        <img src={Avatar} alt='user avatar' className='nav-profile-avatar' />
      </button>
    </nav>
  );
};

export default Navbar;

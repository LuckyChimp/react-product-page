import './App.scss';
import Navbar from './components/Navbar';
import Product from './components/Product';
import CartPopup from './components/CartPopup';
import Lightbox from './components/Lightbox';

// TODO edit README.md, create screenshot.png in root folder

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Product></Product>

      <footer>
        <div className='attribution'>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
            Frontend Mentor
          </a>
          . Coded by <a href='https://github.com/LuckyChimp'>LuckyChimp</a>.
        </div>
      </footer>

      <CartPopup></CartPopup>

      <Lightbox></Lightbox>
    </>
  );
}

export default App;

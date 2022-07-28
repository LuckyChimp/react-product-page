import ImagePreview from './ImagePreview';

const Product = ({ openLightbox }) => {
	return (
		<main>
			<ImagePreview canOpenLightbox={true} openLightbox={openLightbox} defaultImageId={1} />
			<div className='product-details'></div>
		</main>
	);
};

export default Product;

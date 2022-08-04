import ImagePreview from './ImagePreview';

const Product = ({ openLightbox }) => {
	return (
		<main>
			<ImagePreview canOpenLightbox={true} openLightbox={openLightbox} defaultImageId={1} displayControls={false} />
			<div className='product-details'></div>
		</main>
	);
};

export default Product;

import ImagePreview from './ImagePreview';

const Lightbox = ({ visible, imageId, closeLightbox }) => {
	return (
		<div className='lightbox' style={{ display: visible ? 'flex' : 'none' }}>
			<ImagePreview
				canOpenLightbox={false}
				defaultImageId={imageId}
				displayControls={true}
				closeLightbox={closeLightbox}
			/>
		</div>
	);
};

export default Lightbox;

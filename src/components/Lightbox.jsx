import ImagePreview from './ImagePreview';

const Lightbox = ({ visible, imageId }) => {
	return (
		<div className='lightbox' style={{ display: visible ? 'initial' : 'none' }}>
			<ImagePreview canOpenLightbox={false} defaultImageId={imageId} />
		</div>
	);
};

export default Lightbox;

import ImagePreview from './ImagePreview';
import scssVariables from '../_variables.scss';

const Lightbox = ({ visible, imageId, closeLightbox }) => {
	// only allow the Lightbox to show up, if the ImagePreview is not large enough (so, only in desktop and landscpae and not in smartphone mode)
	const isPortraitMode = window.innerWidth < parseInt(String(scssVariables.breakpoint_landscape).replace('px', ''));
	visible = visible && !isPortraitMode;

	return (
		<div
			className='lightbox'
			style={{ display: visible ? 'flex' : 'none' }}
		>
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

import { useState, useEffect } from 'react';
import ProductImage1 from '../assets/images/image-product-1.jpg';
import ProductImage2 from '../assets/images/image-product-2.jpg';
import ProductImage3 from '../assets/images/image-product-3.jpg';
import ProductImage4 from '../assets/images/image-product-4.jpg';
import ProductThumbnail1 from '../assets/images/image-product-1-thumbnail.jpg';
import ProductThumbnail2 from '../assets/images/image-product-2-thumbnail.jpg';
import ProductThumbnail3 from '../assets/images/image-product-3-thumbnail.jpg';
import ProductThumbnail4 from '../assets/images/image-product-4-thumbnail.jpg';
import { ReactComponent as PreviousIcon } from '../assets/images/icon-previous.svg';
import { ReactComponent as NextIcon } from '../assets/images/icon-next.svg';
import { ReactComponent as CloseIcon } from '../assets/images/icon-close.svg';

const ImagePreview = ({ defaultImageId, canOpenLightbox, openLightbox, closeLightbox, displayControls }) => {
	const [selectedThumbnailId, setSelectedThumbnailId] = useState(1);

	useEffect(() => {
		setSelectedThumbnailId(defaultImageId);
	}, [defaultImageId]);

	const showPreviousImage = () => {
		let prevImageId;
		if (selectedThumbnailId - 1 < 1) {
			prevImageId = 4;
		} else {
			prevImageId = selectedThumbnailId - 1;
		}
		setSelectedThumbnailId(prevImageId);
	};

	const showNextImage = () => {
		let nextImageId;
		if (selectedThumbnailId + 1 > 4) {
			nextImageId = 1;
		} else {
			nextImageId = selectedThumbnailId + 1;
		}
		setSelectedThumbnailId(nextImageId);
	};

	const ProductImage = ({ id, canOpenLightbox, openLightbox }) => {
		return (
			<div className='product-image-container'>
				<img
					src={getProductImageById(id)}
					alt='product'
					className='product-image'
					style={{ cursor: canOpenLightbox ? 'pointer' : 'initial' }}
					onClick={() => {
						if (!canOpenLightbox) return;
						openLightbox(id);
					}}
				/>
				{displayControls && (
					<div className='product-image-controls'>
						<div className='product-image-control-previous' onClick={() => showPreviousImage()}>
							<PreviousIcon />
						</div>
						<div className='product-image-control-next' onClick={() => showNextImage()}>
							<NextIcon />
						</div>
					</div>
				)}
			</div>
		);
	};

	const ProductThumbnail = ({ id, selected, changeSelectedThumbnail }) => {
		const [hovered, setHovered] = useState(false);

		return (
			<div
				className='product-thumbnail-container'
				onClick={() => {
					changeSelectedThumbnail(id);
				}}
				onMouseEnter={() => {
					setHovered(true);
				}}
				onMouseLeave={() => {
					setHovered(false);
				}}
			>
				<img src={getProductThumbnailById(id)} alt='thumbnail of product' className='product-thumbnail' />
				<div
					className={
						'product-thumbnail-overlay' +
						(selected ? ' product-thumbnail-overlay--selected' : '') +
						(hovered ? ' product-thumbnail-overlay--hovered' : '')
					}
				></div>
			</div>
		);
	};

	return (
		<div className='product-images'>
			<ProductImage id={selectedThumbnailId} canOpenLightbox={canOpenLightbox} openLightbox={openLightbox} />
			<div className='product-thumbnails'>
				<ProductThumbnail
					id={1}
					selected={selectedThumbnailId === 1}
					changeSelectedThumbnail={(id) => setSelectedThumbnailId(id)}
				/>
				<ProductThumbnail
					id={2}
					selected={selectedThumbnailId === 2}
					changeSelectedThumbnail={(id) => setSelectedThumbnailId(id)}
				/>
				<ProductThumbnail
					id={3}
					selected={selectedThumbnailId === 3}
					changeSelectedThumbnail={(id) => setSelectedThumbnailId(id)}
				/>
				<ProductThumbnail
					id={4}
					selected={selectedThumbnailId === 4}
					changeSelectedThumbnail={(id) => setSelectedThumbnailId(id)}
				/>
			</div>
			{displayControls && (
				<CloseIcon viewBox='0.3 1 13.4 13.4' className='preview-control-close-icon' onClick={() => closeLightbox()} />
			)}
		</div>
	);
};

export default ImagePreview;

const getProductThumbnailById = (id) => {
	switch (id) {
		case 1: {
			return ProductThumbnail1;
		}
		case 2: {
			return ProductThumbnail2;
		}
		case 3: {
			return ProductThumbnail3;
		}
		case 4: {
			return ProductThumbnail4;
		}
		default: {
			return ProductThumbnail1;
		}
	}
};

const getProductImageById = (id) => {
	switch (id) {
		case 1: {
			return ProductImage1;
		}
		case 2: {
			return ProductImage2;
		}
		case 3: {
			return ProductImage3;
		}
		case 4: {
			return ProductImage4;
		}
		default: {
			return ProductImage1;
		}
	}
};

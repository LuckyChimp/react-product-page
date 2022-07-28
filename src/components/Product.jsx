import { useState, useEffect } from 'react';
import ProductImage1 from '../assets/images/image-product-1.jpg';
import ProductImage2 from '../assets/images/image-product-2.jpg';
import ProductImage3 from '../assets/images/image-product-3.jpg';
import ProductImage4 from '../assets/images/image-product-4.jpg';
import ProductThumbnail1 from '../assets/images/image-product-1-thumbnail.jpg';
import ProductThumbnail2 from '../assets/images/image-product-2-thumbnail.jpg';
import ProductThumbnail3 from '../assets/images/image-product-3-thumbnail.jpg';
import ProductThumbnail4 from '../assets/images/image-product-4-thumbnail.jpg';

const Product = () => {
	const [selectedThumbnailId, setSelectedThumbnailId] = useState(1);

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

	const ProductThumbnail = ({ id }) => {
		const [selected, setSelected] = useState(false);
		const [hovered, setHovered] = useState(false);

		useEffect(() => {
			if (selectedThumbnailId === id) {
				setSelected(true);
			}
		}, [id]);

		return (
			<div
				className='product-thumbnail-container'
				onClick={() => {
					setSelectedThumbnailId(id);
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
		<main>
			<div className='product-images'>
				<img src={getProductImageById(selectedThumbnailId)} alt='product' className='product-image' />
				<div className='product-thumbnails'>
					<ProductThumbnail id={1} />
					<ProductThumbnail id={2} />
					<ProductThumbnail id={3} />
					<ProductThumbnail id={4} />
				</div>
			</div>
			<div className='product-details'></div>
		</main>
	);
};

export default Product;

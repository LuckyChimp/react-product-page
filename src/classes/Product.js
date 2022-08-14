export default class Product {
	constructor(id, title, producer, description, pricePerPiece, discount, amount, images, thumbnails) {
		this.id = id;
		this.title = title;
		this.producer = producer;
		this.description = description;
		this.pricePerPiece = pricePerPiece;
		this.discount = discount;
		this.amount = amount;
		this.images = images;
		this.thumbnails = thumbnails;
		this.cartThumbnail = thumbnails[0];
	}
}

import { IProduct } from '../utils/interfaces';

export const products: IProduct[] = [
	{
		id: '1',
		title: "Men's Chill Crew Neck Sweatshirt",
		description: 'Introducing the Tesla Chill Collection',
		images: ['1740176-00-A_0_2000.jpg', '1740176-00-A_1.jpg'],
		category: 'cards',
		price: 75,
		tags: ['sweatshirt'],
	},
	{
		id: '2',
		title: "Men's Raven Lightweight Zip Up Bomber Jacket",
		description: 'Introducing the Tesla Raven Collection.',
		images: ['1740250-00-A_0_2000.jpg', '1740250-00-A_1.jpg'],
		category: 'covers',
		price: 130,
		tags: ['shirt'],
	},
	{
		id: '3',
		title: "Women's Turbine Cropped Short Sleeve Tee",
		description: 'Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle.',
		images: ['1741441-00-A_0_2000.jpg'],
		category: 'logos',
		price: 40,
		tags: ['shirt'],
	},
	{
		id: '4',
		title: "Men's Chill Crew Neck Sweatshirt",
		description: 'Introducing the Tesla Chill Collection',
		images: ['1740176-00-A_0_2000.jpg', '1740176-00-A_1.jpg'],
		category: 'cards',
		price: 75,
		tags: ['sweatshirt'],
	},
	{
		id: '5',
		title: "Men's Chill Crew Neck Sweatshirt",
		description: 'Introducing the Tesla Chill Collection',
		images: ['1740176-00-A_0_2000.jpg', '1740176-00-A_1.jpg'],
		category: 'cards',
		price: 75,
		tags: ['sweatshirt'],
	},
	{
		id: '6',
		title: "Men's Raven Lightweight Zip Up Bomber Jacket",
		description: 'Introducing the Tesla Raven Collection.',
		images: ['1740250-00-A_0_2000.jpg', '1740250-00-A_1.jpg'],
		category: 'covers',
		price: 130,
		tags: ['shirt'],
	},
	{
		id: '7',
		title: "Women's Turbine Cropped Short Sleeve Tee",
		description: 'Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle.',
		images: ['1741441-00-A_0_2000.jpg'],
		category: 'logos',
		price: 40,
		tags: ['shirt'],
	},
	{
		id: '8',
		title: "Men's Chill Crew Neck Sweatshirt",
		description: 'Introducing the Tesla Chill Collection',
		images: ['1740176-00-A_0_2000.jpg', '1740176-00-A_1.jpg'],
		category: 'cards',
		price: 75,
		tags: ['sweatshirt'],
	},
];

export const getProductByCategory = (category: string):IProduct[] => {
	return products.filter(product => product.category === category);
};

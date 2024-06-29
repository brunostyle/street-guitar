import { IProduct } from '../utils/interfaces';

export const products: IProduct[] = [
	{
		_id: '1',
		title: "Men's Chill Crew Neck Sweatshirt",
		description: 'Introducing the Tesla Chill Collection',
		images: ['1740176-00-A_0_2000.jpg', '1740176-00-A_1.jpg'],
		category: 'cards',
		price: 75,
		slug: 'mens_chill_crew_neck_sweatshirt',
		tags: ['sweatshirt'],
	},
	{
		_id: '2',
		title: "Men's Raven Lightweight Zip Up Bomber Jacket",
		description: 'Introducing the Tesla Raven Collection.',
		images: ['1740250-00-A_0_2000.jpg', '1740250-00-A_1.jpg'],
		category: 'covers',
		price: 130,
		slug: 'men_raven_lightweight_zip_up_bomber_jacket',
		tags: ['shirt'],
	},
	{
		_id: '3',
		title: "Women's Turbine Cropped Short Sleeve Tee",
		description: 'Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle.',
		images: ['1741441-00-A_0_2000.jpg'],
		category: 'logos',
		price: 40,
		slug: 'women_turbine_cropped_short_sleeve_tee',
		tags: ['shirt'],
	},
];

export const getProductBySlug = (slug: string) => {
	return products.find(product => product.slug === slug);
};

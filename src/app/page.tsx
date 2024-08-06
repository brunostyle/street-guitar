import { Spinner } from '@nextui-org/react';
import { Banner, ProductList } from '@components';
import { BiFilter } from '@icons';
import { useProducts } from '@hooks';

const Home = () => {
	const { products, isLoading } = useProducts();
	return (
		<section>
			<Banner />
			{isLoading
				? <Spinner className="flex justify-center" />
				: <ProductList category="Todos los productos" icon={<BiFilter />} products={products ?? []} />
			}
		</section>
	)
}

export default Home;
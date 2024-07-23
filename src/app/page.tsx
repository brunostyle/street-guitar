import { Spinner } from '@nextui-org/react';
import { Banner, LayoutApp, ProductList } from '../components';
import { BiFilter } from '../assets/icons';
import { useProducts } from '../hooks';

const Home = () => {
	const { products, isLoading } = useProducts();
	return (
			<LayoutApp title="LB Digital - Inicio" description="Encuentra las mejores tablaturas de LB Digital aquí">
				<Banner />
				{isLoading
					? <Spinner className="flex justify-center" />
					: <ProductList category="Todos los productos" icon={<BiFilter />} products={products ?? []} />
				}
			</LayoutApp>
	)
}

export default Home;
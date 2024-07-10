import { Spinner } from '@nextui-org/react';
import { Banner, LayoutApp, ProductList } from '../components';
import { BiFilter } from '../assets/icons';
import { Gradient } from '../styles';
import { useProducts } from '../hooks';

const Home = () => {
	const { products, isLoading } = useProducts();
	return (
		<Gradient>
			<LayoutApp title="LB Digital - Inicio" description="Encuentra los mejores productos de LB Digital aquí">
				<Banner />
				{isLoading
					? <Spinner className="flex justify-center" />
					: <ProductList category="Todos los productos" icon={<BiFilter />} products={products ?? []} />
				}
			</LayoutApp>
		</Gradient>
	)
}

export default Home;
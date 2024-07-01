import { Banner, FullScreenLoading, LayoutApp, ProductList } from '../components';
import { BiFilter } from '../assets/icons';
import { Gradient } from '../styles';
// import { useProducts } from '../hooks';
import { products } from '../assets/products';
const isLoading = false;

const Home = () => {
	// const { data: products, isLoading } = useProducts();

	return (
		<Gradient>
			<LayoutApp title="LB Digital - Inicio" description="Encuentra los mejores productos de LB Digital aquí">
				<Banner />
				{isLoading
					? <FullScreenLoading />
					: <ProductList category="Todos los productos" icon={<BiFilter />} products={products ?? []} />
				}
			</LayoutApp>
		</Gradient>
	)
}

export default Home;
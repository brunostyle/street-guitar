import { LayoutApp, Nothing, ProductList } from '../../components';
import { useParams } from 'react-router-dom';
import { products } from '../../assets/products';

const Search = () => {
   const { query } = useParams();

   return (
      <LayoutApp title="LB Digital - Inicio" description="Encuentra los mejores productos de LB Digital aquí">
         {products.length === 0 ?
            <Nothing text={"No se encontraron resultados para " + query} svg="/search-empty.svg" />
            :
            <ProductList category={query!} products={products} />
         }
      </LayoutApp>
   )
}

export default Search;
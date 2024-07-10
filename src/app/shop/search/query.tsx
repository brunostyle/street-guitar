import { FullScreenLoading, LayoutApp, Nothing, ProductList } from '../../../components';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../../hooks';

const Search = () => {
   const { query } = useParams();
   const { products, isLoading } = useGetProductsQuery(query!);

   return (
      <LayoutApp title="LB Digital - Inicio" description="Encuentra los mejores productos de LB Digital aquí">
         {isLoading
            ? <FullScreenLoading />
            : products?.length === 0 ?
               <Nothing text={"No se encontraron resultados para " + query} svg="/search-empty.svg" />
               :
               <ProductList category={query!} products={products} />
         }
      </LayoutApp>
   )
}

export default Search;
import { useParams } from 'react-router-dom';
import { FullScreenLoading, LayoutApp, Nothing, ProductList } from '@components';
import { useGetProductsQuery } from '@hooks';

const Search = () => {
   const { query } = useParams();
   const { products, isEmpty, isLoading } = useGetProductsQuery(query!);

   return (
      <LayoutApp title="LB Digital - Inicio" description="Encuentra los mejores productos de LB Digital aquí">
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text={"No se encontraron resultados para " + query} svg="/nothing.svg" />
               : <ProductList category={query!} products={products ?? []} />
         }
      </LayoutApp>
   )
}

export default Search;
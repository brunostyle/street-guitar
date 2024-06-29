import { FullScreenLoading, LayoutApp, ProductList } from "../../components";
import { BsFillCreditCard2FrontFill } from "../../assets/icons";
// import { useProducts } from "../../hooks";
import { products } from "../../assets/products";
const isLoading = true;

const Cards = () => {
   // const { data: products, isLoading } = useProducts({key: "cards", path: "/products?category=cards"});
   
   return (
      <LayoutApp title="LB Digital - Tarjetas digitales" description="Encuentra las mejores tarjetas digitales de LB Digital">
         {isLoading
            ? <FullScreenLoading />
            : <ProductList category="Tarjetas digitales" icon={<BsFillCreditCard2FrontFill />} products={products ?? []} />
         }
      </LayoutApp>
   )
};

export default Cards;

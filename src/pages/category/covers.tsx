import { FullScreenLoading, LayoutApp, ProductList } from "../../components";
import { BsFillGrid3X3GapFill } from "../../assets/icons";
import { useProducts } from "../../hooks";

const Covers = () => {
   const { data: products, isLoading } = useProducts({key: "covers", path: "/products?category=covers"});
   
   return (
      <LayoutApp title="LB Digital - Portadas" description="Encuentra las mejores portadas de LB Digital">
         {isLoading 
            ? <FullScreenLoading />
            : <ProductList category="Portadas" icon={<BsFillGrid3X3GapFill />} products={products ?? []} />
         }
      </LayoutApp>
   )
};

export default Covers;

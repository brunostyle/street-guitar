import { FullScreenLoading, LayoutApp, ProductList } from "../../components";
import { IoLogoPolymer } from "../../assets/icons";
import { useProducts } from "../../hooks";

const Logos = () => {
   const { data: products, isLoading } = useProducts({key: "logos", path: "/products?category=logos"});
   
   return (
      <LayoutApp title="LB Digital - Logos" description="Encuentra los mejores logos en LB Digital">
         {isLoading
            ? <FullScreenLoading />
            : <ProductList category="Logos" icon={<IoLogoPolymer />} products={products ?? []} />
         }
      </LayoutApp>
   )
};

export default Logos;
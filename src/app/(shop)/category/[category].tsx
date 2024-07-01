import { FullScreenLoading, LayoutApp, ProductList } from "../../../components";
import { BsFillCreditCard2FrontFill, BsFillGrid3X3GapFill, IoLogoPolymer } from "../../../assets/icons";
import { getProductByCategory } from "../../../assets/products";
import { useParams } from "react-router-dom";
const isLoading = false;

const categories = {
   cards: {
      title: "LB Digital - Tarjetas digitales",
      description: "Encuentra las mejores tarjetas digitales de LB Digital",
      category: "Tarjetas digitales",
      icon: <BsFillCreditCard2FrontFill />
   },
   covers: {
      title: "LB Digital - Portadas",
      description: "Encuentra las mejores portadas de LB Digital",
      category: "Portadas",
      icon: <BsFillGrid3X3GapFill />
   },
   logos: {
      title: "LB Digital - Logos",
      description: "Encuentra los mejores logos en LB Digital",
      category: "Logos",
      icon: <IoLogoPolymer />
   }, 
}

const Category = () => {
   // const { data: products, isLoading } = useProducts({key: "cards", path: "/products?category=cards"});
   const { category = "cards" } = useParams();
   const products = getProductByCategory(String(category));
   return (
      <LayoutApp title={categories[category].title} description={categories[category].description}>
         {isLoading
            ? <FullScreenLoading />
            : <ProductList category={categories[category].category} icon={categories[category].icon} products={products || []} />
         }
      </LayoutApp>
   )
};

export default Category;

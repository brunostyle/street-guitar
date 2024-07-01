import { FullScreenLoading, LayoutApp, ProductList } from "../../../components";
import { BsFillCreditCard2FrontFill, BsFillGrid3X3GapFill, IoLogoPolymer } from "../../../assets/icons";
import { getProductByCategory } from "../../../assets/products";
import { useParams } from "react-router-dom";
const isLoading = false;

const categories = {
   cards: {
      title: "LB Digital - Tarjetas digitales",
      description: "Encuentra las mejores tarjetas digitales de LB Digital",
      categorys: "Tarjetas digitales",
      icon: <BsFillCreditCard2FrontFill />
   },
   covers: {
      title: "LB Digital - Portadas",
      description: "Encuentra las mejores portadas de LB Digital",
      categorys: "Portadas",
      icon: <BsFillGrid3X3GapFill />
   },
   logos: {
      title: "LB Digital - Logos",
      description: "Encuentra los mejores logos en LB Digital",
      categorys: "Logos",
      icon: <IoLogoPolymer />
   },
}

const Category = () => {
   // const { data: products, isLoading } = useProducts({key: "cards", path: "/products?category=cards"});
   const { category } = useParams();

   const products = getProductByCategory(String(category));
   const { title, description, categorys, icon } = categories[category];

   return (
      <LayoutApp title={title} description={description}>
         {isLoading
            ? <FullScreenLoading />
            : <ProductList category={categorys} icon={icon} products={products || []} />
         }
      </LayoutApp>
   )
};

export default Category;

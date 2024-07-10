import { FullScreenLoading, LayoutApp, Nothing, ProductList } from "../../../components";
import { BsFillCreditCard2FrontFill, BsFillGrid3X3GapFill, IoLogoPolymer } from "../../../assets/icons";
import { useParams } from "react-router-dom";
import { useGetCategory } from "../../../hooks";

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
   const { category } = useParams();
   const { products, isLoading } = useGetCategory(String(category));
   const { title, description, categorys, icon } = categories[category];

   return (
      <LayoutApp title={title} description={description}>
         {isLoading
            ? <FullScreenLoading />
            : products?.length === 0
               ? <Nothing text={"No se encontraron resultados para " + category} svg="/search-empty.svg" />
               : <ProductList category={categorys} icon={icon} products={products ?? []} />
         }
      </LayoutApp>
   )
};

export default Category;
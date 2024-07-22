import { FullScreenLoading, LayoutApp, Nothing, ProductList } from "../../../components";
import { BsFillCreditCard2FrontFill, BsFillGrid3X3GapFill, IoLogoPolymer } from "../../../assets/icons";
import { useParams } from "react-router-dom";
import { useGetCategory } from "../../../hooks";

const categories = {
   rock: {
      title: "LB Digital - Rock",
      description: "Encuentra las mejores canciones de rock en LB Digital",
      categoryName: "Rock",
      icon: <BsFillCreditCard2FrontFill />
   },
   folclore: {
      title: "LB Digital - Folclore",
      description: "Encuentra las mejores canciones de folclore en LB Digital",
      categoryName: "Folclore",
      icon: <BsFillGrid3X3GapFill />
   },
   pop: {
      title: "LB Digital - Pop",
      description: "Encuentra los mejores canciones de pop en LB Digital",
      categoryName: "Pop",
      icon: <IoLogoPolymer />
   },
}

const Category = () => {
   const { category } = useParams();
   const { products, isEmpty, isLoading } = useGetCategory(String(category));
   const { title, description, categoryName, icon } = categories[category as keyof typeof categories];

   return (
      <LayoutApp title={title} description={description}>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text={"No se encontraron resultados para " + category} svg="/search-empty.svg" />
               : <ProductList category={categoryName} icon={icon} products={products ?? []} />
         }
      </LayoutApp>
   )
};

export default Category;
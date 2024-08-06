import { useParams } from "react-router-dom";
import { FullScreenLoading, Nothing, ProductList } from "@components";
import { BsFillCreditCard2FrontFill, BsFillGrid3X3GapFill, IoLogoPolymer } from "@icons";
import { useGetCategory } from "@hooks";

const categories = {
   rock: {
      categoryName: "Rock",
      icon: <BsFillCreditCard2FrontFill />
   },
   folclore: {
      categoryName: "Folclore",
      icon: <BsFillGrid3X3GapFill />
   },
   pop: {
      categoryName: "Pop",
      icon: <IoLogoPolymer />
   },
}

const Category = () => {
   const { category } = useParams();
   const { products, isEmpty, isLoading } = useGetCategory(String(category));
   const { categoryName, icon } = categories[category as keyof typeof categories];

   return (
      <section>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text={"No se encontraron resultados para " + category} svg="/search-empty.svg" />
               : <ProductList category={categoryName} icon={icon} products={products ?? []} />
         }
      </section>
   )
};

export default Category;
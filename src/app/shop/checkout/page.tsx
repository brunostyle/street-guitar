import { useParams } from "react-router-dom";
import { Grid, GridContainer, SectionSubTitle, SectionTitle } from "@styles";
import { FullScreenLoading, LayoutApp, ProductCard, ProductOrder, ProductPay } from "@components";
import { useGetOrder } from "@hooks";

const Checkout = () => {
   const { id } = useParams();
   const { products, total, items, paid, isLoading } = useGetOrder(id!);
   return (
      <LayoutApp title="Resumen de orden" description="Resumen de la orden">
         <SectionTitle>Orden: {id}</SectionTitle>
         <SectionSubTitle>Resumen de la orden</SectionSubTitle>
         {isLoading ?
            <FullScreenLoading />
            :
            <GridContainer>
               <Grid>
                  <ProductCard cart={products} paid={paid} />
               </Grid>
               <Grid>
                  <ProductOrder total={total} items={items}>
                     <ProductPay />
                  </ProductOrder>
               </Grid>
            </GridContainer>
         }
      </LayoutApp>
   )
};

export default Checkout;

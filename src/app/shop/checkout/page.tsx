import { Grid, GridContainer, SectionSubTitle, SectionTitle } from "../../../styles";
import { useCart } from "../../../state";
import { LayoutApp, ProductCard, ProductOrder, ProductPay } from "../../../components";

const Summary = () => {
   const { cart, total, numberOfItems } = useCart();

   return (
      <LayoutApp title="Resumen de orden" description="Resumen de la orden">
         <SectionTitle>Orden: ABC123</SectionTitle>
         <SectionSubTitle>Resumen de la orden</SectionSubTitle>
         <GridContainer>
            <Grid>
               <ProductCard cart={cart} />
            </Grid>
            <Grid>
               <ProductOrder total={total} numberOfItems={numberOfItems}>
                  <ProductPay />
               </ProductOrder>
            </Grid>
         </GridContainer>
      </LayoutApp>
   )
};

export default Summary;

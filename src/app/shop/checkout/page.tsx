import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ConfettiExplosion from 'react-confetti-explosion';
import toast from "react-hot-toast";
import { Grid, GridContainer, SectionSubTitle, SectionTitle } from "@styles";
import { FullScreenLoading, ProductCard, ProductOrder } from "@components";
import { useGetOrder } from "@hooks";

const Checkout = () => {
   const { id } = useParams();
   const { products, total, items, paid, isLoading } = useGetOrder(id!);
   useEffect(() => {
      !isLoading && toast.success('Disfruta las tablaturas!!!');
   }, [isLoading]);
   return (
      <section>
         <SectionTitle>Orden: {id}</SectionTitle>
         <SectionSubTitle>Resumen de la orden</SectionSubTitle>
         {!isLoading && <ConfettiExplosion force={0.8} duration={3000} particleCount={250} width={1600} />}
         {isLoading ?
            <FullScreenLoading />
            :
            <GridContainer>
               <Grid>
                  <ProductCard cart={products} paid={paid} />
               </Grid>
               <Grid>
                  <ProductOrder total={total} items={items}>
                     {/* <ProductPay /> */}
                  </ProductOrder>
               </Grid>
            </GridContainer>
         }
      </section>
   )
};

export default Checkout;

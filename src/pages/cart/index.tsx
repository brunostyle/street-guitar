import { useEffect } from "react";
import { useNavigate as useRouter } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { AiOutlineCreditCard } from '../../assets/icons'
import { SectionTitle, SectionSubTitle, GridContainer, Grid } from "../../styles";
import { useCart, useUser } from "../../state";
import { LayoutApp, ProductCard, ProductOrder } from "../../components";
import { IOrderSummary } from "../../utils/interfaces";

const Cart = () => {
   const router = useRouter();
   const { cart, total, numberOfItems } = useCart();
   const { user } = useUser();

   useEffect(() => {
      numberOfItems < 1 && router('/cart/empty')
   }, [cart]);

   const handleCart = () => {
      const order: IOrderSummary = { user, numberOfItems, total, orderItems: cart, paid: false }
      console.log(order);
      router('/checkout/summary');
   }

   return (
      <LayoutApp title="Carrito" description="Carrito de compras de la tienda">
         <SectionTitle>Carrito de compras</SectionTitle>
         <SectionSubTitle>Mis productos</SectionSubTitle>
         <GridContainer>
            <Grid>
               <ProductCard editable cart={cart} />
            </Grid>
            <Grid>
               <ProductOrder editable total={total} numberOfItems={numberOfItems}>
                  <Button fullWidth size="sm" color="primary" startContent={<AiOutlineCreditCard />} onPress={handleCart}>Comprar</Button>
               </ProductOrder>
            </Grid>
         </GridContainer>
      </LayoutApp>
   )
};

export default Cart;

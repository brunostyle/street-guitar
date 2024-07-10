import { useEffect } from "react";
import { useNavigate as useRouter } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { AiOutlineCreditCard } from '../../../assets/icons'
import { SectionTitle, SectionSubTitle, GridContainer, Grid } from "../../../styles";
import { useCart, useUser } from "../../../state";
import { LayoutApp, ProductCard, ProductOrder } from "../../../components";
import { IOrderCheckout } from "../../../utils/interfaces";
import { useAddOrder } from "../../../hooks";

const Cart = () => {
   const router = useRouter();
   const { addOrder, isAddingOrder } = useAddOrder();
   const { cart, total, items } = useCart();
   const { user } = useUser();

   useEffect(() => {
      items < 1 && router('/cart/empty')
   }, [cart]);

   const handleCart = () => {
      const order: IOrderCheckout = { 
         items, 
         total, 
         paid: false, 
         user: user?.id, 
         products: cart.map(p => p.id) 
      }
      addOrder(order);
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
               <ProductOrder editable total={total} items={items}>
                  <Button fullWidth size="sm" color="primary" isLoading={isAddingOrder} startContent={!isAddingOrder && <AiOutlineCreditCard />} onPress={handleCart}>Comprar</Button>
               </ProductOrder>
            </Grid>
         </GridContainer>
      </LayoutApp>
   )
};

export default Cart;
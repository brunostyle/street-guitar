import { Navigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { AiOutlineCreditCard } from '../../../assets/icons'
import { SectionTitle, SectionSubTitle, GridContainer, Grid } from "../../../styles";
import { useCart, useUser } from "../../../state";
import { LayoutApp, ProductCard, ProductOrder } from "../../../components";
import { IOrderCheckout } from "../../../utils/interfaces";
import { useAddOrder } from "../../../hooks";
import toast from "react-hot-toast";

const Cart = () => {
   const { addOrder, isAddingOrder } = useAddOrder();
   const { cart, total, items } = useCart();
   const { isLogged, user } = useUser();

   const handleCart = () => {
      if (!isLogged) return toast.error("Debes iniciar sesión para comprar");
      const order: IOrderCheckout = {
         items,
         total,
         paid: false,
         user: user?.id,
         products: cart.map(product => product.id)
      }
      addOrder(order);
   }

   return (
      (items < 1)
         ? <Navigate to="/cart/empty" />
         :
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
import { useNavigate as useRouter } from "react-router-dom";
import { LayoutApp, Nothing } from "../../components";
import { Button } from "@nextui-org/react";

const Empty = () => {
   const router = useRouter();

   return (
      <LayoutApp title="Carrito vació" description="No hay artículos en el carrito de compras">
         <Nothing text="Tu carrito esta vacío." svg="/cart-empty.svg">
            <Button color="primary" onPress={() => router('/')}>Ir a la tienda</Button>
         </Nothing>
      </LayoutApp>
   )
};

export default Empty;

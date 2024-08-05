import { Button } from "@nextui-org/react";
import { useNavigate as useRouter } from "react-router-dom";
import { LayoutApp, Nothing } from "@components";
import { AiOutlineHome } from '@icons';

const Empty = () => {
   const router = useRouter();

   return (
      <LayoutApp title="Carrito vació" description="No hay artículos en el carrito de compras">
         <Nothing text="Tu carrito esta vacío." svg="/cart.svg">
            <Button size="sm" color="primary" onPress={() => router('/')} startContent={<AiOutlineHome />}>Ir a la tienda</Button>
         </Nothing>
      </LayoutApp>
   )
};

export default Empty;

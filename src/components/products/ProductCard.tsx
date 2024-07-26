import { Button, Card, CardBody, CardFooter, Spacer } from "@nextui-org/react";
import { IProduct } from "../../utils/interfaces"
import { AiFillDelete } from '../../assets/icons'
import { HiddenTitle, Subtitle, Title, ChipCategory } from "../../styles";
import { useCart } from "../../state";
import { Link } from "react-router-dom";

interface IProductCard {
   cart?: IProduct[];
   editable?: boolean;
}

export const ProductCard = ({ cart = [], editable = false }: IProductCard) => {
   const { removeProductToCart } = useCart();
   return <>
      {cart.map(product => (
         <Card isFooterBlurred key={product.id} className="grid grid-cols-12 mb-4">
            <Link to={"/product/" + product.id} className="col-span-2">
               <img src={product.images[0]} alt={product.title} className="w-full h-full rounded-none object-cover" />
            </Link>
            <CardBody className="col-span-8">
               <HiddenTitle>{product.title}</HiddenTitle>
               <Subtitle>{product.description}</Subtitle>
               <Spacer y={4} />
               <ChipCategory>{product.category}</ChipCategory>
            </CardBody>
            <CardFooter className="col-span-2 flex flex-col justify-between">
               <Title>${product.price}</Title >
               {editable && <Button isIconOnly variant="faded" size="sm" onPress={() => removeProductToCart(product)}><AiFillDelete /></Button>}
            </CardFooter>
         </Card>
      ))}
   </>
}
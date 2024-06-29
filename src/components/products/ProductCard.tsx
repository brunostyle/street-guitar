import { Button, Card, CardBody, CardFooter, Chip, Image, Spacer } from "@nextui-org/react";
import { IProduct, categories } from "../../utils/interfaces"
import { AiFillDelete } from '../../assets/icons'
import { HiddenTitle, Subtitle, Title } from "../../styles";
import { useCart } from "../../state";
import { Link } from "react-router-dom";

interface IProductCard {
   cart: IProduct[];
   editable?: boolean;
}

export const ProductCard = ({ cart, editable = false }: IProductCard) => {
   const { removeProductToCart } = useCart();
   return <>
      {cart.map(product => (
         <Card isFooterBlurred key={product._id} className="grid grid-cols-12 mb-4">
            <Link to={"/product/" + product.slug} className="col-span-2">
               <Image src={'/products/' + product.images[0]} alt={product.title} width="100%" height="100%" />
            </Link>
            <CardBody className="col-span-8">
               <HiddenTitle>{product.title}</HiddenTitle>
               <Subtitle>{product.description}</Subtitle>
               <Spacer />
               <Chip variant="flat" size="sm" color={categories[product.category]}>{product.category}</Chip>
            </CardBody>
            <CardFooter className="col-span-2 flex flex-col justify-between">
               <Title>${product.price}</Title >
               {editable && <Button isIconOnly variant="faded" size="sm" onPress={() => removeProductToCart(product)}><AiFillDelete /></Button>}
            </CardFooter>
         </Card>
      ))}
   </>
}
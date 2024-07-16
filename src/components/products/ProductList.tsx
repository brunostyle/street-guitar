import { Card, CardBody, CardFooter, Chip, Image } from '@nextui-org/react';
import { Between, HiddenTitle, Wrap, Title } from '../../styles';
import { IProduct, categories } from "../../utils/interfaces"
import { useNavigate as useRouter } from 'react-router-dom';

interface IProps {
   category: string;
   icon?: React.ReactNode;
   products: IProduct[];
}

export const ProductList = ({ category, icon, products }: IProps) => {
   const router = useRouter();
   return <>
      <div className='flex items-center gap-4 mb-4'>
         {icon && icon}
         <Title>{category}</Title>
      </div>
      <Wrap>
         {products.map(product => (
            <Card key={product.id} isPressable onPress={() => router('/product/' + product.id)}>
               <Image src={product.images.at(0)} alt={product.title} width="100%" height="100%" className="rounded-none" />
               <CardBody>
                  <HiddenTitle>{product.title}</HiddenTitle>
               </CardBody>
               <CardFooter>
                  <Between>
                     <Chip variant="flat" size="sm" color={categories[product.category]}>{product.category}</Chip>
                     <Title>${product.price}</Title>
                  </Between>
               </CardFooter>
            </Card>
         ))}
      </Wrap>
   </>
}
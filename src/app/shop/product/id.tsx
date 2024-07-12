import { Button, Card, CardBody, Chip, Divider, Skeleton, Spacer } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { FiShoppingCart } from "../../../assets/icons";
import { Between, Grid, GridContainer, Subtitle, Title } from "../../../styles";
import { useCart } from "../../../state";
import { LayoutApp } from "../../../components";
import { categories } from "../../../utils/interfaces";
import { useGetProduct } from "../../../hooks";
import ImageGallery from 'react-image-gallery';

const Product = () => {
   const { id } = useParams();
   const { addProductToCart } = useCart();
   const { product, isLoading } = useGetProduct(String(id));

   const images = product?.images.map(img => ({ original: img }))

   const handleAddToCart = () => addProductToCart(product!);
   return (
      <LayoutApp title={product?.title} description={product?.description}>
         <Card className="max-w-[1200px] mx-auto">
            <GridContainer>
               <Grid>
                  <Skeleton className="rounded-md" isLoaded={!isLoading}>
                     <div className="min-h-96">
                        <ImageGallery autoPlay slideDuration={1000} showPlayButton={false} showFullscreenButton={false} items={images ?? []} />
                     </div>
                  </Skeleton>
               </Grid>
               <Grid>
                  <CardBody>
                     <Skeleton className="rounded-md" isLoaded={!isLoading} >
                        <Title>{product?.title}</Title>
                     </Skeleton>
                     <Divider />
                     <Spacer y={4} />
                     <Between>
                        <Skeleton className="rounded-md" isLoaded={!isLoading} >
                           <Title>${product?.price}</Title>
                        </Skeleton>
                        <Skeleton className="rounded-md" isLoaded={!isLoading} >
                           <Chip variant="flat" size="sm" color={categories[product?.category]}>{product?.category}</Chip>
                        </Skeleton>
                     </Between>
                     <Spacer y={4} />
                     <Skeleton className="rounded-md" isLoaded={!isLoading} >
                        <Title>Descripción</Title>
                     </Skeleton>
                     <Spacer y={4} />
                     <Skeleton className="rounded-md" isLoaded={!isLoading} >
                        <Subtitle>{product?.description}</Subtitle>
                     </Skeleton>
                     <Spacer y={4} />
                     <Skeleton className="rounded-md" isLoaded={!isLoading} >
                        <Button fullWidth color="primary" size="sm" startContent={<FiShoppingCart />} onPress={handleAddToCart}>Agregar al carrito</Button>
                     </Skeleton>
                  </CardBody>
               </Grid>
            </GridContainer>
         </Card>
      </LayoutApp>
   )
}

export default Product;
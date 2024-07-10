import { Button, Card, CardBody, Chip, Divider, Spacer } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { FiShoppingCart } from "../../../assets/icons";
import { Between, Grid, GridContainer, Subtitle, Title } from "../../../styles";
import { useCart } from "../../../state";
import { FullScreenLoading, LayoutApp } from "../../../components";
import { categories } from "../../../utils/interfaces";
import { useGetProduct } from "../../../hooks";
import ImageGallery from 'react-image-gallery';

const Product = () => {
   const { id } = useParams();
   const { addProductToCart } = useCart();
   const { product, isLoading } = useGetProduct(String(id))!;
   const images = product?.images.map(img => ({ original: img }))

   const handleAddToCart = () => addProductToCart(product!);

   return (
      <LayoutApp title={product?.title} description={product?.description}>
         {isLoading ?
            <FullScreenLoading />
            :
            <Card>
               <GridContainer>
                  <Grid>
                     <ImageGallery autoPlay slideDuration={1000} showPlayButton={false} showFullscreenButton={false} items={images} />
                  </Grid>
                  <Grid>
                     <CardBody>
                        <Title>{product?.title}</Title>
                        <Divider />
                        <Spacer y={4} />
                        <Between>
                           <Title>${product?.price}</Title>
                           <Chip variant="flat" size="sm" color={categories[product?.category]}>{product?.category}</Chip>
                        </Between>
                        <Spacer y={4} />
                        <Title>Descripción</Title>
                        <Subtitle>{product?.description}</Subtitle>
                        <Spacer y={4} />
                        <Button color="primary" size="sm" startContent={<FiShoppingCart />} onPress={handleAddToCart}>Agregar al carrito</Button>
                     </CardBody>
                  </Grid>
               </GridContainer>
            </Card>
         }
      </LayoutApp>
   )
}

export default Product;
import { Button, Card, CardBody, Chip, Divider, Spacer } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { FiShoppingCart } from "../../../assets/icons";
import { getProductBySlug } from "../../../assets/products";
import { Between, Grid, GridContainer, Subtitle, Title } from "../../../styles";
import { useCart } from "../../../state";
import { LayoutApp } from "../../../components";
import ImageGallery from 'react-image-gallery';
import { categories } from "../../../utils/interfaces";

const Product = () => {
   const { slug } = useParams();
   const { addProductToCart } = useCart();
   const product = getProductBySlug(String(slug))!;
   const images = product.images.map(img => ({ original: '/products/' + img }))

   const handleAddToCart = () => addProductToCart(product!);

   return (
      <LayoutApp title={product.title} description={product.description}>
         <Card>
            <GridContainer>
               <Grid>
                  <ImageGallery showPlayButton={false} showFullscreenButton={false} showThumbnails={false} items={images} />
               </Grid>
               <Grid>
                  <CardBody>
                     <Title>{product.title}</Title>
                     <Divider />
                     <Spacer y={4} />
                     <Between>
                        <Title>${product.price}</Title>
                        <Chip variant="flat" size="sm" color={categories[product.category]}>{product.category}</Chip>
                     </Between>
                     <Spacer y={4} />
                     <Title>Descripción</Title>
                     <Subtitle>{product.description}</Subtitle>
                     <Spacer y={4} />
                     <Button color="primary" size="sm" startContent={<FiShoppingCart />} onPress={handleAddToCart}>Agregar al carrito</Button>
                  </CardBody>
               </Grid>
            </GridContainer>
         </Card>
      </LayoutApp>
   )
}

export default Product;
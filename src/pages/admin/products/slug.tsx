import { Card, CardBody, Button, Spacer } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { File, Images, Input, LayoutAdmin, Radio, Tags, Textarea } from "../../../components";
import { AiFillDelete, AiOutlineSave, BiPencil, FaPlus } from "../../../assets/icons";
import { ChangeEvent, useState } from "react";
import { TValidCategory } from "../../../utils/interfaces";
import { productSchema } from "../../../assets/validations";
import { Grid, GridContainer, SectionTitle } from "../../../styles";
import { getProductBySlug } from "../../../assets/products";

const ProductSlug = () => {
   const { slug } = useParams();
   const product = getProductBySlug(String(slug));
   const [tags, setTags] = useState<string[]>(product ? product.tags : []);
   const [category, setCategory] = useState<TValidCategory>(product ? product.category : 'cards');
   const initial = { title: '', description: '', slug: '', price: '' }

   const validate = (values: any) => {
      values.slug = values.title.trim().replaceAll(' ', '_').replaceAll("'", '').toLowerCase()
   }

   const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
      const file = new FormData();
      const [files] = e.target.files!;
      file.append('file', files);
   };

   const handleSubmit = (values: any) => {
      console.log({ ...values, tags, category })
   }

   return (
      <LayoutAdmin isProductPage showTitle={false} title={product ? 'Actualizar' : 'Agregar'} icon={product ? <BiPencil /> : <FaPlus />}>
         <SectionTitle>{product ? 'Actualizar un producto' : 'Agregar un producto'}</SectionTitle>
         <Spacer y={4} />
         <Card><CardBody>
            <Formik initialValues={product ? product : initial} onSubmit={handleSubmit} enableReinitialize validationSchema={productSchema} validate={validate}>
               {({ handleSubmit }) => (
                  <Form>
                     <GridContainer>
                        <Grid>
                           <Input name="title" label="Titulo" />
                           <Input name="slug" label="URL" />
                           <Textarea name="description" label="Descripción" />
                           <Input type="number" name="price" label="Precio" />
                           <Tags tags={tags} setTags={setTags} />
                        </Grid>
                        <Grid>
                           <Radio label="Categoria" defaultValue={category} onChange={setCategory} />
                           {product && <Images images={product.images} />}
                           <File onChange={handleImage} />
                           <Button variant="bordered" fullWidth startContent={<AiOutlineSave />} color="success" size="sm" onPress={() => handleSubmit()}>Guardar</Button>
                           {product && <Button variant="bordered" fullWidth startContent={<AiFillDelete />} color="danger" size="sm">Eliminar</Button>}
                        </Grid>
                     </GridContainer>

                  </Form>
               )}
            </Formik>
         </CardBody></Card>
      </LayoutAdmin>
   )
};

export default ProductSlug;
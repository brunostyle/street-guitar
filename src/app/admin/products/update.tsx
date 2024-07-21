import { Card, CardBody, Button, Spacer, Skeleton } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { Images, Input, LayoutAdmin, Category, Tags, Textarea } from "../../../components";
import { AiFillDelete, AiOutlineSave, BiPencil } from "../../../assets/icons";
import { productSchema } from "../../../assets/validations";
import { Grid, GridContainer, SectionTitle } from "../../../styles";
import { useDeleteProduct, useGetProduct, useUpdateProduct } from "../../../hooks";

const UpdateProduct = () => {
    const { id } = useParams();
    const { product, isLoading } = useGetProduct(String(id));
    const { updateProduct, isUpdating } = useUpdateProduct();
    const { deleteProduct, isDeleting } = useDeleteProduct();

    const handleSubmit = (values: any) => updateProduct({ ...values, id })

    return (
        <LayoutAdmin isProductPage title="Actualizar" icon={<BiPencil />}>
            <SectionTitle>Actualizar un producto</SectionTitle>
            <Spacer y={4} />
            <Card><CardBody>
                <Formik enableReinitialize initialValues={product} onSubmit={handleSubmit} validationSchema={productSchema}>
                    {form => (
                        <Form><GridContainer>
                            <Grid>
                                <Skeleton isLoaded={!isLoading}>
                                    <Input name="title" label="Titulo" />
                                </Skeleton>
                                <Skeleton isLoaded={!isLoading}>
                                    <Textarea name="description" label="Descripción" />
                                </Skeleton>
                                <Skeleton isLoaded={!isLoading}>
                                    <Input type="number" name="price" label="Precio" />
                                </Skeleton>
                                <Skeleton isLoaded={!isLoading}>
                                    <Tags />
                                </Skeleton>
                            </Grid>
                            <Grid>
                                <Skeleton isLoaded={!isLoading}>
                                    <Category />
                                </Skeleton>
                                <Images />
                                <Button fullWidth variant="bordered" size="sm" color="success" isLoading={isUpdating} startContent={!isUpdating && <AiOutlineSave />} onPress={() => form.handleSubmit()}>Actualizar</Button>
                                <Button fullWidth variant="bordered" size="sm" color="danger" isLoading={isDeleting} startContent={!isDeleting && <AiFillDelete />} onPress={() => deleteProduct(String(id))}>Eliminar</Button>
                            </Grid>
                        </GridContainer></Form>
                    )}
                </Formik>
            </CardBody></Card>
        </LayoutAdmin>
    )
};

export default UpdateProduct;
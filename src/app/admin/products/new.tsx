import { Card, CardBody, Button, Spacer } from "@nextui-org/react";
import { Form, Formik } from "formik";
import { Images, Input, LayoutAdmin, Category, Tags, Textarea, PDF } from "@components";
import { AiOutlineSave, FaPlus } from "@icons";
import { productSchema } from "@validations";
import { Grid, GridContainer, SectionTitle } from "@styles";
import { useAddProduct } from "@hooks";
const initial = { title: '', description: '', price: '', tab: '', pdf: '', category: 'rock', tags: [], images: [] }

const NewProduct = () => {
    const { addProduct, isAdding } = useAddProduct();

    const handleSubmit = (values: any) => {
        addProduct({ ...values })
    };

    return (
        <LayoutAdmin isProductPage title="Agregar" icon={<FaPlus />}>
            <SectionTitle>Agregar un producto</SectionTitle>
            <Spacer y={4} />
            <Card><CardBody>
                <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={productSchema}>
                    {form => (
                        <Form><GridContainer>
                            <Grid>
                                <Input name="title" label="Titulo" />
                                <Textarea name="description" label="Descripción" />
                                <Input type="number" name="price" label="Precio" />
                                <Tags />
                            </Grid>
                            <Grid>
                                <Category />
                                <PDF />
                                <Images />
                                <Button variant="bordered" fullWidth isLoading={isAdding} startContent={!isAdding && <AiOutlineSave />} size="sm" onPress={() => form.handleSubmit()}>Guardar</Button>
                            </Grid>
                        </GridContainer></Form>
                    )}
                </Formik>
            </CardBody></Card>
        </LayoutAdmin>
    )
};

export default NewProduct;
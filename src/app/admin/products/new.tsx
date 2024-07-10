import { ChangeEvent, useState } from "react";
import { Card, CardBody, Button, Spacer } from "@nextui-org/react";
import { Form, Formik } from "formik";
import { File, Images, Input, LayoutAdmin, Radio, Tags, Textarea } from "../../../components";
import { AiOutlineSave, FaPlus } from "../../../assets/icons";
import { TValidCategory } from "../../../utils/interfaces";
import { productSchema } from "../../../assets/validations";
import { Grid, GridContainer, SectionTitle } from "../../../styles";
import { uploadFile, useAddProduct } from "../../../hooks";

const NewProduct = () => {
    const { addProduct, isAdding } = useAddProduct();
    const [category, setCategory] = useState<TValidCategory>('cards');
    const [tags, setTags] = useState<string[]>([]);
    const [images, setImages] = useState<string[]>([]);
    const initial = { title: '', description: '', price: '' }

    const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            const url = await uploadFile(e);
            setImages([...images, url]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (values: any) => addProduct({ ...values, tags, category, images })

    return (
        <LayoutAdmin isProductPage showTitle={false} title="Agregar" icon={<FaPlus />}>
            <SectionTitle>Agregar un producto</SectionTitle>
            <Spacer y={4} />
            <Card><CardBody>
                <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={productSchema}>
                    {({ handleSubmit }) => (
                        <Form><GridContainer>
                            <Grid>
                                <Input name="title" label="Titulo" />
                                <Textarea name="description" label="Descripción" />
                                <Input type="number" name="price" label="Precio" />
                                <Tags tags={tags} setTags={setTags} />
                            </Grid>
                            <Grid>
                                <Radio label="Categoria" value={category} onChange={setCategory} />
                                <Images images={images} setImages={setImages} />
                                <File onChange={handleImage} />
                                <Button variant="bordered" fullWidth isLoading={isAdding} startContent={!isAdding && <AiOutlineSave />} color="success" size="sm" onPress={() => handleSubmit()}>Guardar</Button>
                            </Grid>
                        </GridContainer></Form>
                    )}
                </Formik>
            </CardBody></Card>
        </LayoutAdmin>
    )
};

export default NewProduct;
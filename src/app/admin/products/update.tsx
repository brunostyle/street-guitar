import { Card, CardBody, Button, Spacer, Skeleton } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { File, Images, Input, LayoutAdmin, Radio, Tags, Textarea } from "../../../components";
import { AiFillDelete, AiOutlineSave, BiPencil } from "../../../assets/icons";
import { ChangeEvent, useEffect, useState } from "react";
import { TValidCategory } from "../../../utils/interfaces";
import { productSchema } from "../../../assets/validations";
import { Grid, GridContainer, SectionTitle } from "../../../styles";
import { uploadFile, useDeleteProduct, useGetProduct, useUpdateProduct } from "../../../hooks";

const UpdateProduct = () => {
    const { id } = useParams();
    const { product, isLoading } = useGetProduct(String(id));
    const { updateProduct, isUpdating } = useUpdateProduct();
    const { deleteProduct, isDeleting } = useDeleteProduct();
    const [category, setCategory] = useState<TValidCategory>("cards");
    const [tags, setTags] = useState<string[]>([]);
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        if (product) {
            setCategory(product.category);
            setTags(product.tags);
            setImages(product.images);
        }
    }, [product]);

    const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            const url = await uploadFile(e);
            setImages([...images, url]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (values: any) => updateProduct({ ...values, id, tags, category, images })

    return (
        <LayoutAdmin isProductPage showTitle={false} title="Actualizar" icon={<BiPencil />}>
            <SectionTitle>Actualizar un producto</SectionTitle>
            <Spacer y={4} />
            <Card><CardBody>
                <Formik initialValues={product} onSubmit={handleSubmit} enableReinitialize validationSchema={productSchema}>
                    {({ handleSubmit }) => (
                        <Form><GridContainer>
                            <Grid>
                                <Skeleton className="rounded-md" isLoaded={!isLoading}>
                                    <Input name="title" label="Titulo" />
                                </Skeleton>
                                <Skeleton className="rounded-md" isLoaded={!isLoading}>
                                    <Textarea name="description" label="Descripción" />
                                </Skeleton>
                                <Skeleton className="rounded-md" isLoaded={!isLoading}>
                                    <Input type="number" name="price" label="Precio" />
                                </Skeleton>
                                <Skeleton className="rounded-md" isLoaded={!isLoading}>
                                    <Tags tags={tags} setTags={setTags} />
                                </Skeleton>
                            </Grid>
                            <Grid>
                                <Skeleton className="rounded-md" isLoaded={!isLoading}>
                                    <Radio label="Categoria" value={category} onChange={setCategory} />
                                </Skeleton>
                                <Images images={images} setImages={setImages} />
                                <File onChange={handleImage} />
                                <Button variant="bordered" fullWidth isLoading={isUpdating} startContent={!isUpdating && <AiOutlineSave />} color="success" size="sm" onPress={() => handleSubmit()}>Actualizar</Button>
                                <Button variant="bordered" fullWidth isLoading={isDeleting} startContent={!isDeleting && <AiFillDelete />} color="danger" size="sm" onPress={() => deleteProduct(String(id))}>Eliminar</Button>
                            </Grid>
                        </GridContainer></Form>
                    )}
                </Formik>
            </CardBody></Card>
        </LayoutAdmin>
    )
};

export default UpdateProduct;
import { Avatar, Button, Chip, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { AiOutlineTags, BiPencil } from "../../assets/icons";
import { FullScreenLoading, LayoutAdmin, Nothing } from "../../components";
import { HiddenTitle, HiddenSubtitle } from "../../styles";
import { categories } from "../../utils/interfaces";
// import { useProducts } from "../../hooks";
import { products } from "../../assets/database.json";
const isLoading = false;

const Products = () => {
   const router = useNavigate();
   // const { data: products = [], isLoading } = useProducts();
   return (
      <LayoutAdmin showTitle={products.length !== 0} funtional title="Productos" icon={<AiOutlineTags />}>
         {isLoading
            ? <FullScreenLoading />
            : products.length === 0 ? <Nothing text="Aún no hay productos" svg="/no-results.svg" />
               :
               <Table removeWrapper className="opacity" selectionMode="single" aria-label="Products" bottomContent={<Pagination className="flex justify-center" size="sm" showControls total={2} page={1} />}>
                  <TableHeader>
                     <TableColumn>IMAGEN</TableColumn>
                     <TableColumn>TITULO</TableColumn>
                     <TableColumn>DESCRIPCIÓN</TableColumn>
                     <TableColumn>PRECIO</TableColumn>
                     <TableColumn>CATEGORIA</TableColumn>
                     <TableColumn>EDITAR</TableColumn>
                  </TableHeader>
                  <TableBody>
                     {products.map(product => (
                        <TableRow key={product._id} >
                           <TableCell><Avatar color="secondary" radius="sm" size="sm" src={'/products/' + product.images[0]} /></TableCell>
                           <TableCell><HiddenTitle>{product.title}</HiddenTitle></TableCell>
                           <TableCell><HiddenSubtitle>{product.description}</HiddenSubtitle></TableCell>
                           <TableCell><h4>${product.price}</h4></TableCell>
                           <TableCell><Chip variant="flat" size="sm" color={categories[product.category]}>{product.category}</Chip></TableCell>
                           <TableCell><Button isIconOnly variant="faded" size="sm" onPress={() => router(product.slug)}><BiPencil /></Button></TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
         }
      </LayoutAdmin>
   )
}

export default Products;
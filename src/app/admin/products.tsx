import { Avatar, Button, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineTags, BiPencil, FaRegEye } from "@icons";
import { FullScreenLoading, LayoutAdmin, Nothing } from "@components";
import { HiddenTitle, HiddenSubtitle, ChipCategory } from "@styles";
import { usePaginate, usePaginateProducts } from "@hooks";

const Products = () => {
   const router = useNavigate();
   const { page, limit, total, setPage } = usePaginate('products');
   const { products = [], isEmpty, isLoading } = usePaginateProducts(page, limit);
   return (
      <LayoutAdmin funtional title="Productos" icon={<AiOutlineTags />}>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text="Aún no hay productos" svg="/no-results.svg" />
               :
               <Table removeWrapper className="table" selectionMode="single" aria-label="Products" bottomContent={
                  <Pagination className="flex justify-center" size="sm" showControls page={page} total={total} onChange={setPage} />}>
                  <TableHeader>
                     <TableColumn>IMAGEN</TableColumn>
                     <TableColumn>TITULO</TableColumn>
                     <TableColumn>DESCRIPCIÓN</TableColumn>
                     <TableColumn>PRECIO</TableColumn>
                     <TableColumn>CATEGORIA</TableColumn>
                     <TableColumn>TAB</TableColumn>
                     <TableColumn>EDITAR</TableColumn>
                  </TableHeader>
                  <TableBody>
                     {products.map(product => (
                        <TableRow key={product.id}>
                           <TableCell><Avatar color="secondary" radius="sm" size="sm" src={product.images.at(0)} /></TableCell>
                           <TableCell><HiddenTitle>{product.title}</HiddenTitle></TableCell>
                           <TableCell><HiddenSubtitle>{product.description}</HiddenSubtitle></TableCell>
                           <TableCell><h4>${product.price}</h4></TableCell>
                           <TableCell><ChipCategory>{product.category}</ChipCategory></TableCell>
                           <TableCell><Button as={Link} to={product.pdf} target="_blank" isDisabled={!product.pdf} isIconOnly variant="bordered" size="sm"><FaRegEye  /></Button></TableCell>
                           <TableCell><Button isIconOnly variant="bordered" size="sm" onPress={() => router(String(product.id))}><BiPencil /></Button></TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
         }
      </LayoutAdmin>
   )
}

export default Products;
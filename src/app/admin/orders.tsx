import { Button, Checkbox, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@nextui-org/react";
import { AiOutlineFolderOpen, MdOutlineChangeHistory } from '../../assets/icons';
import { useNavigate } from "react-router-dom";
import { FullScreenLoading, LayoutAdmin, Nothing } from "../../components";
import { usePaginateOrders, usePaginate } from "../../hooks";

const Orders = () => {
   const { page, limit, total, setPage } = usePaginate('orders');
   const { orders = [], isLoading } = usePaginateOrders(page, limit);
   const router = useNavigate();
   return (
      <LayoutAdmin showTitle={orders.length !== 0} title="Ordenes" icon={<MdOutlineChangeHistory />}>
         {isLoading
            ? <FullScreenLoading />
            : orders.length === 0 ?
               <Nothing text="Aún no hay ordenes" svg="/no-results.svg" />
               :
               <Table removeWrapper className="opacity" aria-label="Historial de ordenes" selectionMode="single" bottomContent={
                  <Pagination className="flex justify-center" size="sm" showShadow showControls page={page} total={total} onChange={setPage} />}>
                  <TableHeader>
                     <TableColumn>CLIENTE</TableColumn>
                     <TableColumn>ITEMS</TableColumn>
                     <TableColumn>TOTAL</TableColumn>
                     <TableColumn>CREADA</TableColumn>
                     <TableColumn>PAGADA</TableColumn>
                     <TableColumn>ORDEN</TableColumn>
                  </TableHeader>
                  <TableBody>
                     {orders.map(order => (
                        <TableRow key={order.id}>
                           <TableCell><User name={order.user.name} description={order.user.email} avatarProps={{ src: order.user.avatar, color: 'secondary' }} /></TableCell>
                           <TableCell><h4>{order.items}</h4></TableCell>
                           <TableCell><h4>${order.total}</h4></TableCell>
                           <TableCell><h4>{new Date(order.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' })}</h4></TableCell>
                           <TableCell><Checkbox aria-label="Pagada" isSelected={order.paid} isReadOnly /></TableCell>
                           <TableCell><Button isIconOnly variant="faded" size="sm" onPress={() => router('/checkout/' + order.id)}><AiOutlineFolderOpen /></Button></TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
         }
      </LayoutAdmin>
   )
}

export default Orders;
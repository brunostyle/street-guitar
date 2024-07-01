import { Button, Checkbox, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@nextui-org/react";
import { AiOutlineFolderOpen, MdOutlineChangeHistory } from '../../assets/icons';
import { Link } from "react-router-dom";
import { FullScreenLoading, LayoutAdmin, Nothing } from "../../components";
// import { useOrders } from "../../hooks";
import { orders } from "../../assets/database.json";
const isLoading = false;

const Orders = () => {
   // const { data: orders = [], isLoading } = useOrders({ key: "orders", path: "/orders" })
   return (
      <LayoutAdmin showTitle={orders.length !== 0} title="Ordenes" icon={<MdOutlineChangeHistory />}>
         {isLoading
            ? <FullScreenLoading />
            : orders.length === 0 ?
               <Nothing text="Aún no hay ordenes" svg="/no-results.svg" />
               :
               <Table removeWrapper className="opacity" aria-label="Historial de ordenes" selectionMode="single" bottomContent={<Pagination className="flex justify-center" size="sm" showShadow showControls total={2} page={2} />}>
                  <TableHeader>
                     <TableColumn>CLIENTE</TableColumn>
                     <TableColumn>ITEMS</TableColumn>
                     <TableColumn>TOTAL</TableColumn>
                     <TableColumn>PAGADA</TableColumn>
                     <TableColumn>ORDEN</TableColumn>
                  </TableHeader>
                  <TableBody>
                     {orders.map(order => (
                        <TableRow key={order._id}>
                           <TableCell><User name={order.name} description={order.email} avatarProps={{ src: order.avatar, color: 'secondary' }} /></TableCell>
                           <TableCell><h4>{order.numberOfItems}</h4></TableCell>
                           <TableCell><h4>${order.total}</h4></TableCell>
                           <TableCell><Checkbox aria-label="Pagada" isSelected={order.paid} isReadOnly /></TableCell>
                           <TableCell><Link to="/"><Button isIconOnly variant="faded" size="sm"><AiOutlineFolderOpen /></Button></Link></TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
         }
      </LayoutAdmin>
   )
}

export default Orders;
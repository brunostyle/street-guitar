import { Avatar, Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { HiddenTitle, HiddenSubtitle } from "../../styles";
import { IOrderDashboard } from "../../utils/interfaces";
import { AiOutlineFolderOpen } from '../../assets/icons';
import { useNavigate } from "react-router-dom";

interface ISells {
    sells?: IOrderDashboard[];
}

export const Sells = ({ sells = [] }: ISells) => {
    const router = useNavigate();
    return (
        <Table aria-label="Ultimas ventas" hideHeader>
            <TableHeader>
                <TableColumn>AVATAR</TableColumn>
                <TableColumn>NOMBRE</TableColumn>
                <TableColumn>CORREO</TableColumn>
                <TableColumn>ORDEN</TableColumn>
            </TableHeader>
            <TableBody emptyContent="Aun no hay ventas">
                {sells.map(sell => (
                    <TableRow key={sell.id}>
                        <TableCell><Avatar isBordered color="primary" size="sm" showFallback name={sell.user.name.charAt(0).toUpperCase()} src={sell.user.avatar} /></TableCell>
                        <TableCell><HiddenTitle>{sell.user.name}</HiddenTitle></TableCell>
                        <TableCell className="show"><HiddenSubtitle>{sell.user.email}</HiddenSubtitle></TableCell>
                        <TableCell><Button isIconOnly variant="faded" size="sm" onPress={() => router('/checkout/' + sell.id)}><AiOutlineFolderOpen /></Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
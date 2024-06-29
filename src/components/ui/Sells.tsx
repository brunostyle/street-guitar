import { Avatar, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { HiddenTitle, HiddenSubtitle } from "../../styles";
import { IOrderDashboard } from "../../utils/interfaces";

interface ISells {
    sells?: IOrderDashboard[];
}

export const Sells = ({ sells = [] }: ISells) => (
    <Table aria-label="Ultimas ventas" hideHeader>
        <TableHeader>
            <TableColumn>AVATAR</TableColumn>
            <TableColumn>NOMBRE</TableColumn>
            <TableColumn>CORREO</TableColumn>
        </TableHeader>
        <TableBody emptyContent="Aun no hay ventas">
            {sells.map(sell => (
                <TableRow key={sell._id}>
                    <TableCell><Avatar isBordered color="primary" size="sm" showFallback name={sell.name.charAt(0).toUpperCase()} src={sell.avatar} /></TableCell>
                    <TableCell><HiddenTitle>{sell.name}</HiddenTitle></TableCell>
                    <TableCell className="show"><HiddenSubtitle>{sell.email}</HiddenSubtitle></TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
)
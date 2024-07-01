import { Avatar, Chip, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { FullScreenLoading, LayoutAdmin, Nothing } from "../../components";
import { FiUsers } from "../../assets/icons";
import { HiddenTitle, HiddenSubtitle } from "../../styles";
import { roles } from "../../utils/interfaces";
// import { useUsers } from "../../hooks";
import { users } from "../../assets/database.json";
const isLoading = false;

const Users = () => {
   // const { data: users = [], isLoading } = useUsers({ key: "users", path: "/users" });
   return (
      <LayoutAdmin showTitle={users.length !== 0} title="Usuarios" icon={<FiUsers />}>
         {isLoading
            ? <FullScreenLoading />
            : users.length === 0
               ? <Nothing text="Aún no hay usuarios" svg="/no-results.svg" />
               :
               <Table removeWrapper className="opacity" aria-label="Usuarios" selectionMode="multiple" bottomContent={<Pagination className="flex justify-center" size="sm" showShadow showControls total={2} page={2} />}>
                  <TableHeader>
                     <TableColumn>AVATAR</TableColumn>
                     <TableColumn>NOMBRE</TableColumn>
                     <TableColumn>CORREO</TableColumn>
                     <TableColumn>ROLE</TableColumn>
                  </TableHeader>
                  <TableBody>
                     {users.map(user => (
                        <TableRow key={user._id}>
                           <TableCell><Avatar radius="sm" size="sm" showFallback name={user.name.charAt(0).toUpperCase()} src={user.avatar} /></TableCell>
                           <TableCell><HiddenTitle>{user.name}</HiddenTitle></TableCell>
                           <TableCell><HiddenSubtitle>{user.email}</HiddenSubtitle></TableCell>
                           <TableCell><Chip variant="flat" size="sm" color={roles[user.role]}>{user.role}</Chip></TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
         }
      </LayoutAdmin>
   )
}
export default Users;
import { Avatar, Popover, Spacer, User as NextUser, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import { BiExit } from "../../assets/icons";
import { useUser } from "../../state";
import { IAuth } from "../../utils/interfaces";

interface IProps {
   user: IAuth;
}

export const User = ({ user }: IProps) => {
   const { logout } = useUser();
   return (
      <Popover radius="sm" offset={20}>
         <PopoverTrigger>
            <Button isIconOnly size="sm" variant="light">
               <Avatar size="sm" color="primary" name={user.name.charAt(0).toUpperCase()} src={user.avatar} />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="p-2">
            <NextUser
               avatarProps={{ src: user.avatar, color: 'primary' }}
               name={user.name}
               description={user.email}
            />
            <Spacer y={4} />
            <Button fullWidth size="sm" variant="bordered" startContent={<BiExit />} onPress={logout}>Cerrar sesion</Button>
         </PopoverContent>
      </Popover>
   )
}
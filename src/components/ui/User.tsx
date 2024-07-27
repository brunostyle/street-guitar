import { Avatar, Popover, Spacer, User as NextUser, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import { BiExit } from "../../assets/icons";
import { useCart, useUser } from "../../state";

export const User = () => {
   const { user, logout } = useUser();
   const { purgateCart } = useCart();
   
   const handleLogout = () => {
      logout();
      purgateCart();
   }
   
   return (
      <Popover radius="sm" offset={20}>
         <PopoverTrigger>
            <Button isIconOnly size="sm" variant="light">
               <Avatar size="sm" color="primary" name={user?.name.charAt(0).toUpperCase()} src={user?.avatar} />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="p-3">
            <NextUser
               avatarProps={{ src: user?.avatar, color: 'primary' }}
               name={user?.name}
               description={user?.email}
            />
            <Spacer y={4} />
            <Button fullWidth size="sm" variant="flat" startContent={<BiExit />} onPress={handleLogout}>Cerrar sesion</Button>
         </PopoverContent>
      </Popover>
   )
}
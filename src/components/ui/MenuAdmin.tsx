import { Navbar, Spacer, NavbarBrand, NavbarContent, NavbarMenuToggle } from '@nextui-org/react';
import { Link as NextLink } from 'react-router-dom'
import { Collapse, Logo, User } from '@components';
import { useUser } from '@state';
import { Title } from '@styles';

export const MenuAdmin = () => {
   const { isLogged } = useUser();
   return (
      <Navbar isBordered maxWidth="full">
         <NavbarBrand>
            <NextLink to="/"><Logo /></NextLink>
            <Spacer x={2} />
            <Title>Street Guitar</Title>
         </NavbarBrand>

         <NavbarContent justify="end">
            {isLogged && <User />}
         </NavbarContent>
         <NavbarMenuToggle />
         <Collapse />
      </Navbar>
   )
};

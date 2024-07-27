import { Navbar, Spacer, NavbarBrand, NavbarContent, NavbarMenuToggle } from '@nextui-org/react';
import { Collapse, Logo, User } from '../index';
import { Link as NextLink } from 'react-router-dom'
import { useUser } from '../../state';
import { Title } from '../../styles';

export const MenuAdmin = () => {
   const { isLogged } = useUser();
   return (
      <Navbar isBordered maxWidth="full">
         <NavbarBrand>
            <NextLink to="/"><Logo /></NextLink>
            <Spacer x={2} />
            <Title>LB Digital</Title>
         </NavbarBrand>

         <NavbarContent justify="end">
            {isLogged && <User />}
         </NavbarContent>
         <NavbarMenuToggle />
         <Collapse />
      </Navbar>
   )
};

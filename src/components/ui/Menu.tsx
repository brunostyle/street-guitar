import { Navbar, Dropdown, Spacer, Badge, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from '@nextui-org/react';
import { IoMdSearch, FiShoppingCart, BsFillCreditCard2FrontFill, BsFillGrid3X3GapFill, IoLogoPolymer, BiFilter } from '../../assets/icons'
import { Formik, Form, FormikHelpers } from 'formik'
import { Collapse, User, InputBordered } from '../index';
import { searchSchema } from '../../assets/validations';
import { useCart, useUser } from '../../state';
import { Logo } from './Logo';
import { useNavigate, Link as NextLink } from 'react-router-dom'
import { Title } from '../../styles';

interface ISearch { query: string }
const values: ISearch = { query: '' }

export const Menu = () => {
   const router = useNavigate();
   const { numberOfItems } = useCart();
   const { isLogged, user } = useUser();
   const handleSubmit = ({ query }: ISearch, { resetForm }: FormikHelpers<ISearch>) => {
      router('/search/' + query);
      resetForm();
   }

   return (
      <Navbar isBordered maxWidth="full">
         <NavbarBrand>
            <NextLink to="/"><Logo /></NextLink>
            <Spacer x={2} />
            <Title>LB Digital</Title>
         </NavbarBrand>

         <NavbarContent justify="end" className="gap-5">
            <NavbarItem className="hidden lg:block">
               <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={searchSchema}>
                  <Form>
                     <InputBordered name="query" label="Buscar..." icon={<IoMdSearch />} />
                  </Form>
               </Formik>
            </NavbarItem>

            <NavbarItem>
               <Dropdown>
                  <DropdownTrigger>
                     <Button variant="light" startContent={<BiFilter />}>Filtrar</Button>
                  </DropdownTrigger>
                  <DropdownMenu variant="bordered" aria-label="filtrado de productos" onAction={category => router('/category/' + category)}>
                     <DropdownSection title="Categorias">
                        <DropdownItem showDivider key="cards" startContent={<BsFillCreditCard2FrontFill />}>Tarjetas</DropdownItem>
                        <DropdownItem key="covers" startContent={<BsFillGrid3X3GapFill />}>Portadas</DropdownItem>
                        <DropdownItem key="logos" startContent={<IoLogoPolymer />}>Logos</DropdownItem>
                     </DropdownSection>
                  </DropdownMenu>
               </Dropdown>
            </NavbarItem>

            <NavbarItem>
               <Badge isInvisible={numberOfItems === 0} content={numberOfItems < 10 ? numberOfItems : "+9"} showOutline={false} color="primary" size="sm" >
                  <Button isIconOnly variant="light" onPress={() => router('/cart')}><FiShoppingCart /></Button>
               </Badge>
            </NavbarItem>

            <NavbarItem>
               {isLogged && <User user={user!} />}
            </NavbarItem>

            <NavbarMenuToggle />
         </NavbarContent>

         <Collapse />
      </Navbar>
   )
};

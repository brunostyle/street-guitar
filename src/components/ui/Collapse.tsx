import { Button, Divider, NavbarMenuItem, NavbarMenu } from '@nextui-org/react';
import { Formik, Form } from 'formik'
import { IoMdSearch, AiOutlineHome, BsKey, FiUsers, BiGridAlt, AiOutlineTags, MdOutlineChangeHistory, BiSun, MdOutlineNightlight } from '../../assets/icons'
import { InputBordered } from './Input';
import { Between, Subtitle } from '../../styles';
import { searchSchema } from '../../assets/validations';
import { useTheme, useUser } from '../../state';
import { useNavigate as useRouter, useLocation } from 'react-router-dom'

interface ISearch { query: string }
const values: ISearch = { query: '' }

export const Collapse = () => {
   const router = useRouter();
   const { isLight, changeTheme } = useTheme();
   const { user, isLogged } = useUser();
   const handleSubmit = ({ query }: ISearch) => {
      router('/search/' + query);
   }

   return (
      <NavbarMenu className="min-w-52 max-w-max left-auto">
         <NavbarMenuItem className="lg:hidden">
            <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={searchSchema}>
               <Form>
                  <InputBordered name="query" label="Buscar..." icon={<IoMdSearch />} />
               </Form>
            </Formik>
         </NavbarMenuItem>

         <Divisor text="Menu" />
         <Item text="Inicio" to="/" icon={<AiOutlineHome />} />
         {!isLogged && <Item text="Ingresar" to="/auth/login" icon={<BsKey />} />}

         {user?.role === "admin" &&
            <>
               <Divisor text="Administración" />
               <Item text="Dashboard" to="/admin" icon={<BiGridAlt />} />
               <Item text="Productos" to="/admin/products" icon={<AiOutlineTags />} />
               <Item text="Ordenes" to="/admin/orders" icon={<MdOutlineChangeHistory />} />
               <Item text="Usuarios" to="/admin/users" icon={<FiUsers />} />
            </>
         }

         <Divisor text="Tema" />
         <Between>
            <NavbarMenuItem>
               <Button size="sm" variant={isLight ? 'bordered' : 'light'} startContent={<BiSun />} onPress={() => changeTheme(true)}>Claro</Button>
            </NavbarMenuItem>
            <NavbarMenuItem>
               <Button size="sm" variant={isLight ? 'light' : 'bordered'} startContent={<MdOutlineNightlight />} onPress={() => changeTheme(false)}>Oscuro</Button>
            </NavbarMenuItem>
         </Between>
      </NavbarMenu>
   )
};

interface IItem {
   to: string,
   text: string,
   icon: JSX.Element;
}

export const Item = ({ to, text, icon }: IItem) => {
   const router = useRouter();
   const location = useLocation();
   return (
      <NavbarMenuItem>
         <Button fullWidth color={location.pathname === to ? "primary" : "default"} className="justify-start" size="md" startContent={icon} variant={location.pathname === to ? "flat" : "light"} onPress={() => router(to)}>
            {text}
         </Button>
      </NavbarMenuItem>
   )
}

export const Divisor = ({ text }: { text: string }) => (
   <NavbarMenuItem>
      <Subtitle>{text}</Subtitle>
      <Divider />
   </NavbarMenuItem>
)
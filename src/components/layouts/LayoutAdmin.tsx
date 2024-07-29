import { Between, SectionTitle } from '../../styles';
import { AiOutlineHome, AiOutlineTags, FaPlus, IoMdSearch } from "../../assets/icons";
import { BreadcrumbItem, Breadcrumbs, Button, Input, Spacer } from '@nextui-org/react';
import { MenuAdmin } from '../ui/MenuAdmin';
import { useNavigate } from 'react-router-dom';

interface ILayout {
   children: JSX.Element | JSX.Element[];
   title: string;
   showTitle?: boolean;
   funtional?: boolean;
   icon?: JSX.Element;
   isProductPage?: boolean;
}

export const LayoutAdmin = ({ children, title, icon, showTitle = false, funtional = false, isProductPage }: ILayout) => {
   const router = useNavigate();
   return <>
      <MenuAdmin />
      <div className="container mx-auto py-6 px-4 flex flex-col gap-4 min-h-screen overflow-x-hidden">
         <Breadcrumbs separator="/">
            <BreadcrumbItem onPress={() => router('/')} startContent={<AiOutlineHome />}>Home</BreadcrumbItem>
            {isProductPage && <BreadcrumbItem onPress={() => router('/admin/products')} startContent={<AiOutlineTags />}>Productos</BreadcrumbItem>}
            <BreadcrumbItem startContent={icon}>{title}</BreadcrumbItem>
         </Breadcrumbs>
         {funtional &&
            <div>
               <SectionTitle>{title}</SectionTitle>
               <Spacer y={4} />
               <Between>
                  <Input size="sm" placeholder="Buscar producto" startContent={<IoMdSearch />} className="w-80 max-w-[50%]" />
                  <Button size="sm" color="primary" startContent={<FaPlus />} onPress={() => router('/admin/products/new')}>Agregar</Button>
               </Between>
            </div>}
         {showTitle &&
            <Between>
               <SectionTitle>{title}</SectionTitle>
               <Input size="sm" placeholder={'Buscar ' + title.toLocaleLowerCase()} startContent={<IoMdSearch />} className="max-w-80" />
            </Between>}
         <div className="overflow-x-scroll overflow-y-hidden">
            {children}
         </div>
      </div>
   </>
}
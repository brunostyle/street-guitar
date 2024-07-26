import { Badge, Image } from "@nextui-org/react";
import { MdClose } from "../../assets/icons";
import { useAddImage, useDeleteImage } from "../../hooks";
import { File } from "./File";
import { ChangeEvent } from "react";
import { useField } from "formik";
import toast from "react-hot-toast";

export const Images = () => {
   const { addImage } = useAddImage();
   const { deleteImage } = useDeleteImage();
   const [field, _meta, helpers] = useField('images');

   const handleDelete = (img: string) => {
      const promise = deleteImage(img, {
         onSuccess: () => {
            helpers.setValue(field.value.filter((image: string) => image !== img))
         }
      });
      toast.promise(promise, {
         loading: 'Eliminando imagen',
         success: 'Imagen eliminada',
         error: 'No se pudo eliminar la imagen',
      });
   }

   const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
      const promise = addImage(e, {
         onSuccess: (url) => helpers.setValue([...field.value, url])
      })
      toast.promise(promise, {
         loading: 'Subiendo imagen',
         success: 'Imagen subida',
         error: 'No se pudo subir la imagen',
      });
   };

   return (
      <div className="flex gap-2 justify-evenly flex-wrap">
         {field.value && field.value.map((img: string) => <Badge key={img} content={<MdClose />} onClick={() => handleDelete(img)} size="lg" color="primary" variant="shadow" isOneChar className="cursor-pointer">
            <Image src={img} width="120px" height="120px" className="object-cover" />
         </Badge>
         )}
         <File onChange={handleImage} />
      </div>
   )
}
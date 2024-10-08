import { Badge, Image, Progress } from "@nextui-org/react";
import { ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { useField } from "formik";
import { MdClose } from "@icons";
import { useAddImage, useDeleteImage } from "@hooks";
import { File } from "@components";
import { supabase } from "@database";

export const Images = () => {
   const { id } = useParams();
   const { addImage, isAdding } = useAddImage();
   const { deleteImage, isDeleting } = useDeleteImage();
   const [field, _meta, helpers] = useField('images');

   const handleDelete = (img: string) => {
      deleteImage(img, {
         onSuccess: async () => {
            const images = field.value.filter((image: string) => image !== img)
            helpers.setValue(images);
            if (id) {
               await supabase.from('products').update({ images }).eq('id', id);
            }
         }
      });
   }

   const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
      addImage(e, {
         onSuccess: async (url) => {
            const images = [...field.value, url];
            helpers.setValue(images);
            if (id) {
               await supabase.from('products').update({ images }).eq('id', id);
            }
         }
      })
   };

   return (
      <div className="flex gap-2 justify-evenly flex-wrap">
         {field.value && field.value.map((img: string) => (
            <Badge key={img} content={<MdClose />} onClick={() => handleDelete(img)} size="lg" color="primary" variant="shadow" isOneChar className="cursor-pointer">
               <Image src={img} width="120px" height="120px" className="object-cover" />
            </Badge>
         ))}
         {isAdding && <Progress label="Subiendo imagen" size="sm" className="mb-4" isIndeterminate />}
         {isDeleting && <Progress label="Eliminando imagen" size="sm" className="mb-4" isIndeterminate />}
         <File onChange={handleImage} />
      </div>
   )
}
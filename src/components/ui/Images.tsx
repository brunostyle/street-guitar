import { Badge, Image } from "@nextui-org/react";
import { MdClose } from "../../assets/icons";
import { deleteFile, uploadFile } from "../../hooks";
import { File } from "./File";
import { ChangeEvent } from "react";
import { useField } from "formik";

export const Images = () => {
   const [input, _meta, helpers] = useField('images');

   const deleteImage = (img: string) => {
      try {
         deleteFile(img);
         helpers.setValue(input.value.filter((image: string) => image !== img))
      } catch (error) {
         console.log(error);
      }
   }

   const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
      try {
         const url = await uploadFile(e);
         helpers.setValue([...input.value, url]);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="flex gap-2 justify-evenly flex-wrap">
         {input.value && input.value.map((img: string) => <Badge key={img} content={<MdClose />} onClick={() => deleteImage(img)} size="lg" color="primary" variant="shadow" isOneChar className="cursor-pointer">
            <Image src={img} width="120px" height="120px" className="object-cover" />
         </Badge>
         )}
         <File onChange={handleImage} />
      </div>
   )
}
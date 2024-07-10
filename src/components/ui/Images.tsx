import { Badge, Image } from "@nextui-org/react";
import { MdClose } from "../../assets/icons";
import { deleteFile } from "../../hooks";

interface IProps {
   images: string[];
   setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Images = ({ images, setImages }: IProps) => {
   const deleteImage = (img: string) => {
      try {
         setImages(images.filter(image => image !== img))
         deleteFile(img);
      } catch (error) {
         console.log(error);
      }
   }
   
   return (
      <div className="flex gap-2 justify-evenly flex-wrap">
         {images && images.map(img => <Badge key={img} content={<MdClose />} onClick={() => deleteImage(img)} size="lg" color="primary" variant="shadow" isOneChar className="cursor-pointer">
            <Image src={img} width="120px" height="120px" />
         </Badge>
         )}
      </div>
   )
}

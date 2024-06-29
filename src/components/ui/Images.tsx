import { Badge, Image } from "@nextui-org/react";
import { MdClose } from "../../assets/icons";

interface IProps {
   images: string[];
}

export const Images = ({ images }: IProps) => (
   <div className="flex gap-4 justify-evenly">
      {images.map(img => <Badge key={img} content={<MdClose />} size="lg" color="primary" variant="shadow" isOneChar className="cursor-pointer">
         <Image src={'/products/' + img} width="150px" height="150px" />
      </Badge>
      )}
   </div>
)

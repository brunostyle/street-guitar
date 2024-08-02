import { Image } from "@nextui-org/react";
import { Center } from "@styles";

interface INothing {
   text: string;
   svg: string;
   children?: JSX.Element | JSX.Element[];
}

export const Nothing = ({ text, svg, children }: INothing) => (
   <Center>
      <Image isBlurred className="opacity" src={svg} width="300px" height="300px" alt="No se encontraron resultados" />
      <h4>{text}</h4>
      {children}
   </Center>
)

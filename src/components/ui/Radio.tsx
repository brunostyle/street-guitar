import { RadioGroup, Radio as RadioNext } from "@nextui-org/react";
import { TValidCategory } from "../../utils/interfaces";

interface IProps {
   label: string;
   defaultValue: TValidCategory;
   onChange: any;
}

export const Radio = ({ label, defaultValue, onChange }:IProps) => (
   <div>
      <h4 className="text-xs mb-2">{label}</h4>
      <RadioGroup aria-label="categoria" defaultValue={defaultValue} size="sm" orientation="horizontal" onValueChange={onChange}>
         <RadioNext value="cards">Tarjetas</RadioNext>
         <RadioNext value="covers">Portadas</RadioNext>
         <RadioNext value="logos">Logos</RadioNext>
      </RadioGroup>
   </div>
);
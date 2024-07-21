import { RadioGroup, Radio as RadioNext } from "@nextui-org/react";
import { useField } from "formik";

export const Category = () => {
   const [input, _meta, helpers] = useField('category');
   return (
      <div>
         <h4 className="text-xs mb-2">Categoria</h4>
         <RadioGroup 
            aria-label="categoria" 
            size="sm" 
            orientation="horizontal" 
            defaultValue="cards" 
            value={input.value}
            onValueChange={helpers.setValue}
         >
            <RadioNext value="cards">Tarjetas</RadioNext>
            <RadioNext value="covers">Portadas</RadioNext>
            <RadioNext value="logos">Logos</RadioNext>
         </RadioGroup>
      </div>
   );
}
import { RadioGroup, Radio as RadioNext } from "@nextui-org/react";
import { ErrorMessage, useField } from "formik";

export const Category = () => {
   const [input, _meta, helpers] = useField('category');
   return (
      <div>
         <h4 className="text-xs mb-2">Categoria</h4>
         <RadioGroup 
            aria-label="categoria" 
            size="sm" 
            orientation="horizontal" 
            defaultValue="rock" 
            value={input.value}
            onValueChange={helpers.setValue}
            errorMessage={<ErrorMessage name={input.name} />}
         >
            <RadioNext value="rock">Rock</RadioNext>
            <RadioNext value="folclore">Folclore</RadioNext>
            <RadioNext value="pop">Pop</RadioNext>
         </RadioGroup>
      </div>
   );
}
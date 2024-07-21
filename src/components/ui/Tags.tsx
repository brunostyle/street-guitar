import { useState } from "react";
import { Button, Chip } from "@nextui-org/react";
import { InputTags } from "./Input";
import { GrAdd } from "../../assets/icons";
import { useField } from "formik";

export const Tags = () => {
   const [input, _meta, helpers] = useField('tags');
   const [tagValue, setTagValue] = useState<string>('');

   const removeTag = (tag: string) => {
      helpers.setValue(input.value.filter((t: string) => t !== tag))
   }

   const addTag = () => {
      if (tagValue === "") return;
      const newTag = tagValue.trim().toLowerCase();
      if (input.value.includes(newTag)) return;
      setTagValue('');
      helpers.setValue([...input.value, newTag])
   }

   return (
      <div>
         <InputTags label="Etiquetas" value={tagValue} onChange={setTagValue} addTag={addTag} content={
            <Button isIconOnly variant="ghost" size="sm" onPress={addTag}><GrAdd /></Button>
         } />
         <div className="flex gap-1 mt-4">
            {input.value && input.value.map((tag: string) => <div key={tag}><Chip color="primary" size="sm" variant="flat" onClose={() => removeTag(tag)}>{tag}</Chip></div>)}
         </div>
      </div>

   )
};

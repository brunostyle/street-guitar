import { useState } from "react";
import { Button, Chip } from "@nextui-org/react";
import { InputTags } from "./Input";
import { GrAdd } from "../../assets/icons";

interface IProps {
   tags: string[];
   setTags: any;
}

export const Tags = ({ tags, setTags }: IProps) => {
   const [tagValue, setTagValue] = useState<string>('');

   const removeTag = (tag: string) => {
      setTags(tags.filter(t => t !== tag))
   }

   const addTag = () => {
      if (tagValue === "") return;
      const newTag = tagValue.trim().toLowerCase();
      if (tags.includes(newTag)) return;
      setTagValue('');
      setTags([...tags, newTag])
   }

   return (
      <div>
         <InputTags label="Etiquetas" value={tagValue} onChange={setTagValue} addTag={addTag} content={
            <Button isIconOnly variant="ghost" size="sm" onPress={addTag}><GrAdd /></Button>
         } />
         <div className="flex gap-1 mt-4">
            {tags.length > 0 && tags.map(tag => <div key={tag}><Chip color="primary" size="sm" variant="flat" onClose={() => removeTag(tag)}>{tag}</Chip></div>)}
         </div>
      </div>

   )
};

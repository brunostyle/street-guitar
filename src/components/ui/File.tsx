import { Button } from '@nextui-org/react';
import { AiOutlineCloudUpload } from "../../assets/icons";

interface IProps {
	label?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const file = {
	cursor: 'pointer',
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	opacity: 0,
}

export const File = ({ label, onChange }: IProps) => (
	// <Button size="sm" variant="bordered" startContent={<AiOutlineCloudUpload />} css={file}>
	<Button fullWidth size="sm" variant="bordered" color="primary" startContent={<AiOutlineCloudUpload />}>
		<span>
			{label ? label : 'Cargar imagen'}
		</span>
		<input style={file} onChange={onChange} type="file" name="file" id="file" />
	</Button>
);

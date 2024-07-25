import { Card, Button, CardBody, Progress } from "@nextui-org/react";
import { IoDocumentText } from "react-icons/io5";
import { MdClose } from "../../assets/icons";
import { TitlePDF } from "../../styles";
import { useAddPDF, useDeletePDF } from "../../hooks";
import { ChangeEvent } from "react";
import { useField } from "formik";
import { File } from "./File";
import { Link } from "react-router-dom";

export const PDF = () => {
    const { addPDF, isAdding } = useAddPDF();
    const { deletePDF, isDeleting } = useDeletePDF();
    const [fieldPDF, _metaPDF, helpersPDF] = useField('pdf');
    const [fieldTAB, _metaTAB, helpersTAB] = useField('tab');
    
    const handleDelete = () => {
        deletePDF(fieldPDF.value, {
            onSuccess: () => {
                helpersPDF.setValue('');
                helpersTAB.setValue('');
            }
        });
    }

    const handlePDF = (e: ChangeEvent<HTMLInputElement>) => {
        const [file] = e.target.files!;
        helpersTAB.setValue(file.name);
        addPDF(file, {
            onSuccess: (url) => helpersPDF.setValue(url)
        });
    };

    return (
        <div>
            {fieldTAB.value &&
                <Card className="flex flex-row items-center mb-4 px-2">
                    <IoDocumentText size="2rem" className="text-primary mx-2" />
                    <CardBody>
                        <Link to={fieldPDF.value} target="_blank"><TitlePDF>{fieldTAB.value}</TitlePDF></Link>
                        {(isAdding || isDeleting) && <Progress size="sm" className="mt-4" isIndeterminate />}
                    </CardBody>
                    <Button isIconOnly variant="light" size="sm" onPress={handleDelete}><MdClose /></Button>
                </Card>
            }
            <File label="Cargar PDF" onChange={handlePDF} />
        </div>
    )
}
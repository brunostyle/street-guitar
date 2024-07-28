import { Spacer, Spinner, Button, DatePicker } from "@nextui-org/react"
import { Formik, Form } from "formik"
import { Between } from "../../styles"
import { Input } from "../index"
import { AiOutlineCreditCard, BsPaypal, MdClose } from "../../assets/icons";
import { useState } from "react";
import { paySchema } from "../../assets/validations";
import { useParams } from "react-router-dom";
import { usePayOrder } from "../../hooks";
const initial = { name: '', number: '', expires: '', csc: '' };

export const ProductPay = () => {
   const { id } = useParams();
   const [showPay, setShowPay] = useState(false);
   const { payOrder, isPayingOrder } = usePayOrder(id!);

   const handleSubmit = (values: any) => {
      console.log(values)
   }

   const payWithPaypal = () => {
      payOrder();
   }

   return (
      <div className="w-full">
         <Button fullWidth size="sm" color="warning" startContent={isPayingOrder ? <Spinner size="sm" color="current" /> : <BsPaypal />} onPress={payWithPaypal}>
            <h4 className="font-extrabold text-blue-700">Pay</h4><h4 className="font-extrabold text-white">Pal</h4>
         </Button>
         <Spacer y={4} />
         <Button fullWidth size="sm" color="primary" startContent={showPay ? <MdClose /> : <AiOutlineCreditCard />} onPress={() => setShowPay(!showPay)}>
            {showPay ? 'Cancelar' : 'Tarjeta de credito'}
         </Button>
         {showPay &&
            <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={paySchema}>
               <Form className="opacity">
                  <Spacer y={2} />
                  <Input name="name" label="Nombre" />
                  <Spacer y={2} />
                  <Input type="number" name="number" label="Numero tarjeta" />
                  <Spacer y={2} />
                  <Between>
                     <DatePicker granularity="day" size="sm" label="Expiracion" labelPlacement="outside" />
                     <Input type="number" name="csc" label="Nro seguridad" />
                  </Between>
                  <Spacer y={4} />
                  <Button fullWidth size="sm" color="primary" type="submit" startContent={<AiOutlineCreditCard />}>Pagar</Button>
               </Form>
            </Formik>
         }
      </div>
   )
}
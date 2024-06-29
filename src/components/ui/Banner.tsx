import { Button, Image } from "@nextui-org/react";
import { BsInstagram, FaFacebookF } from "../../assets/icons";
import { Subtitle } from "../../styles";

export const Banner = () => (
   <div className="grid gap-4 md:grid-cols-2 min-h-screen items-center">
      <div className="flex flex-col gap-4 mb-36">
         <h1 className="text-5xl leading-snug font-bold">
            Encontra productos de calidad en
            <span className="bg-gradient-to-bl from-blue-500 to-pink-500 bg-clip-text text-transparent leading-normal"> LB Digital </span>
            porque diseñar es hacerlo visual
         </h1>
         <Subtitle>Tarjetas, Portadas, Logos, Diseños personalizados, etc</Subtitle>
         <div className="flex gap-4">
            <Button color="primary" size="sm" startContent={<FaFacebookF />}>Facebook</Button>
            <Button color="primary" as="a" size="sm" variant="bordered" startContent={<BsInstagram />} href="https://www.instagram.com/lb_digitaloficial/" target="_blank">Instagram</Button>
         </div>
      </div>
      <div className="hidden md:block mb-36">
         <Image className="flot" src="illustration.png" alt="Ilustracion" />
      </div>
   </div>
)
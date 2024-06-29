import { useEffect } from "react";
import { useAuthRenew } from "../../hooks";

interface ILayout {
   children: JSX.Element | JSX.Element[];
}

export const LayoutMain = ({ children }: ILayout) => {
   const { mutate } = useAuthRenew();
   const token = localStorage.getItem('token');

   useEffect(() => {
      if (token) mutate(token);
   }, []);

   return <div>{children}</div>
};

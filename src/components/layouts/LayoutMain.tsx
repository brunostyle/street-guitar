import { useEffect } from "react";
import { useAuthRenew } from "@hooks";
import { supabase } from "@database";

interface ILayout {
   children: JSX.Element | JSX.Element[];
}

export const LayoutMain = ({ children }: ILayout) => {
   const { renew } = useAuthRenew();

   useEffect(() => {
      const { data } = supabase.auth.onAuthStateChange((_event, session) => {
         renew(session?.user.id!)
      })
      return () => data.subscription.unsubscribe();
   }, []);

   return <div>{children}</div>
};

import { useMutation } from "@tanstack/react-query"
import { ILogin, IRegister } from "../utils/interfaces";
import { useNavigate } from "react-router-dom"
import { useUser } from "../state";
import { supabase } from "../assets/database";

export const useLogin = () => {
   const router = useNavigate();
   const { login } = useUser();
   return useMutation({
      mutationFn: async (user: ILogin) => {
         try {
            const { data } = await supabase.auth.signInWithPassword({ email: user.email, password: user.password });
            const userData = {
               id: data.user?.id,
               name: data.user?.user_metadata.name,
               email: data.user?.email,
               role: data.user?.user_metadata.roles,
            }
            return userData;
         } catch (error) {
            console.log(error);
         }
      },
      onSuccess: (user) => {
         login(user);
         router('/');
      }
   })
}

export const useRegister = () => {
   const router = useNavigate();
   const { login } = useUser();
   return useMutation({
      mutationFn: async (user: IRegister) => {
         try {
            const { data } = await supabase.auth.signUp({ email: user.email, password: user.password, options: { data: { name: user.name, roles: 'client' } } })
            const userData = {
               id: data.user?.id,
               name: data.user?.user_metadata.name,
               email: data.user?.email,
               role: data.user?.user_metadata.roles,
            }
            await supabase.from('users').insert(userData);
            return userData;
         } catch (error) {
            console.log(error);
         }
      },
      onSuccess: (user) => {
         login(user!);
         router('/');
      }
   })
}

export const useAuthRenew = () => {
   const { login } = useUser();
   const { mutate: renew } = useMutation({
      mutationFn: async (id: string) => {
         const { data, error } = await supabase.from('users').select().eq('id', id).single()
         if (error) throw new Error("No existe el usuario");
         return data;
      },
      onSuccess: (user) => {
         login(user);
      },
   });
   return { renew }
};
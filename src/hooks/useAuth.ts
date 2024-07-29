import { useMutation } from "@tanstack/react-query"
import { IAuth, ILogin, IRegister } from "../utils/interfaces";
import { useNavigate } from "react-router-dom"
import { useUser } from "../state";
import { supabase } from "../assets/database";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";

export const useLogin = () => {
   const router = useNavigate();
   const { login } = useUser();
   return useMutation({
      mutationFn: async (user: ILogin) => {
         const { data, error } = await supabase.auth.signInWithPassword({ email: user.email, password: user.password });
         if (error) throw new Error('El usuario no existe');
         const { data: userAvatar } = await supabase.from('users').select('avatar').eq('id', data.user.id).single()
         if (error) throw new Error("No existe el usuario");
         const userData = {
            id: data.user?.id,
            name: data.user?.user_metadata.name,
            email: data.user?.email,
            role: data.user?.user_metadata.roles,
            avatar: userAvatar?.avatar
         }
         return userData;
      },
      onError: (error) => {
         toast.error(error.message);
      },
      onSuccess: (user) => {
         login(user as IAuth);
         router('/');
      }
   })
}

export const useRegister = () => {
   const router = useNavigate();
   const { login } = useUser();
   return useMutation({
      mutationFn: async (user: IRegister) => {
         const { data, error } = await supabase.auth.signUp({ email: user.email, password: user.password, options: { data: { name: user.name, roles: 'client', avatar: null } } })
         if (error) throw new Error('No se pudo registrar el usuario');
         const userData = {
            id: data.user?.id,
            name: data.user?.user_metadata.name,
            email: data.user?.email,
            role: data.user?.user_metadata.roles,
         }
         await supabase.from('users').insert(userData);
         return userData;
      },
      onError: (error) => {
         toast.error(error.message);
      },
      onSuccess: (user) => {
         login(user as IAuth);
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

export const useAddUserImage = ({ user }: { user?: IAuth }) => {
   const { login } = useUser();
   const { mutate: addUserImage, isPending: isAdding } = useMutation({
      mutationFn: async (file: File) => {
         if (user?.avatar) {
            const fileName = user?.avatar.split('/').at(-1)!;
            await supabase.storage.from('user-images').remove([fileName])
         }
         const { data } = await supabase.storage.from('user-images').upload(uuid(), file, { cacheControl: '3600', upsert: false });
         const URL = import.meta.env.VITE_SUPABASE_URL_FILE;
         const { data: userAvatar, error } = await supabase.from('users').update({ avatar: URL + data?.fullPath }).eq('id', user?.id).select().single();
         if (error) throw new Error('No se pudo actualizar la imagen');
         return userAvatar;
      },
      onSuccess: (user) => {
         login(user!);
      }
   })
   return { addUserImage, isAdding }
}
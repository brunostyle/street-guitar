import { create } from 'zustand';
import { IAuth } from '../utils/interfaces';
import { supabase } from '../assets/database';

interface IUser {
   isLogged: boolean;
   user?: IAuth;
   login: (user?: IAuth) => void;
   logout: () => void;
}

export const useUser = create<IUser>(set => ({
   isLogged: true,
   user: {
      "id": "1",
      "name": "Prueba",
      "email": "prueba@gmail.com",
      "role": "admin"
    },
   // isLogged: false,
   // user: undefined,
   login: user => set({ isLogged: true, user }),
   logout: async () => {
      await supabase.auth.signOut();
      set({ isLogged: false, user: undefined })
   }
}))
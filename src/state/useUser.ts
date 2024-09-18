import { create } from 'zustand';
import { IAuth } from '@interfaces';
import { supabase } from '@database';

interface IUser {
   isLogged: boolean;
   user?: IAuth;
   login: (user?: IAuth) => void;
   logout: () => void;
}

export const useUser = create<IUser>(set => ({
   isLogged: false,
   user: undefined,
   login: user => set({ isLogged: true, user }),
   logout: async () => {
      set({ isLogged: false, user: undefined })
      await supabase.auth.signOut();
   }
}))
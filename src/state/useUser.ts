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
   // isLogged: true,
   // user: {
   //    "id": "c0b5a502-de94-4b21-8134-02ada3a59dd1",
   //    "name": "brunooo",
   //    "email": "bruno@gmail.com",
   //    "role": "admin"
   //  },
   isLogged: false,
   user: undefined,
   login: user => set({ isLogged: true, user }),
   logout: async () => {
      set({ isLogged: false, user: undefined })
      await supabase.auth.signOut();
   }
}))
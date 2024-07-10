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
   // isLogged: false,
   // user: undefined,
   isLogged: true,
   user: {
      id: "1",
      name: "Bruno Brian Millalipe",
      email: "brunobrianmillalipe123456@gmail.com",
      role: "admin",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
   },
   login: user => set({ isLogged: true, user }),
   logout: async () => {
      await supabase.auth.signOut();
      set({ isLogged: false, user: undefined })
   }
}))
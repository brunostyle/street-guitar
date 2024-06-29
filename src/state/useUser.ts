import { create } from 'zustand';
import { IAuth } from '../utils/interfaces';

interface IUser {
   isLogged: boolean;
   user?: IAuth;
   login: (user: IAuth) => void;
   logout: () => void;
}

export const useUser = create<IUser>(set => ({
   isLogged: false,
   user: {
    "_id": "1",
    "name": "Bruno Brian Millalipe",
    "email": "bruno@gmail.com",
    "avatar": "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "token": "a04258114e29026702da04258114e29026702da04258114e29026702da04258114e29026702d",
    "role": "admin"
  },
   login: user => set({ isLogged: true, user }),
   logout: () => {
      localStorage.removeItem('token')
      set({ isLogged: false, user: undefined })
   }
}))
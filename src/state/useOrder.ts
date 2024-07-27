import { create } from 'zustand';

interface IOrder {
    paid: boolean;
    setPaid: () => void;
}

export const useOrder = create<IOrder>((set, get) => ({
    paid: false,
    setPaid: () => set({ paid: !get().paid }),
}))
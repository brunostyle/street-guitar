import { create } from 'zustand';
import { IProduct } from "../utils/interfaces"

interface ICart {
   cart: IProduct[];
   total: number;
   numberOfItems: number;
   addProductToCart: (product: IProduct) => void;
   removeProductToCart: (product: IProduct) => void;
}

export const useCart = create<ICart>((set, get) => ({
   cart: [
      {
         _id: '1',
         title: "Men's Chill Crew Neck Sweatshirt",
         description: 'Introducing the Tesla Chill Collection',
         images: ['1740176-00-A_0_2000.jpg', '1740176-00-A_1.jpg'],
         category: 'cards',
         price: 75,
         slug: 'mens_chill_crew_neck_sweatshirt',
         tags: ['sweatshirt'],
      },
      {
         _id: '2',
         title: "Men's Raven Lightweight Zip Up Bomber Jacket",
         description: 'Introducing the Tesla Raven Collection.',
         images: ['1740250-00-A_0_2000.jpg', '1740250-00-A_1.jpg'],
         category: 'covers',
         price: 130,
         slug: 'men_raven_lightweight_zip_up_bomber_jacket',
         tags: ['shirt'],
      },
   ],
   total: 0,
   numberOfItems: 2,

   addProductToCart: product => {
      if(get().cart.find(p => p._id === product._id)) return
      set(state => ({
         cart: [...state.cart, product], 
         total: state.total + product.price,
         numberOfItems: get().numberOfItems + 1
      }))
   },

   removeProductToCart: product => set(state => ({
      cart: state.cart.filter(p => p._id !== product._id),
      total: state.total - product.price,
      numberOfItems: get().numberOfItems - 1
   }))

}))
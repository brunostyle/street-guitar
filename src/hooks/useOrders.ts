import { useMutation, useQuery } from "@tanstack/react-query"
import { supabase } from "../assets/database";
import { useNavigate } from "react-router-dom";
import { IOrderCheckout, IProduct } from "../utils/interfaces";

export const usePaginateOrders = (page: number, limit: number) => {
   const { data: orders, isLoading } = useQuery({
      queryKey: ["orders", page],
      queryFn: async () => {
         const { data, error } = await supabase.from('orders').select('*, user:users(name, email)').range((page - 1) * limit, page * limit - 1);
         if (error) throw new Error(error.message);
         return data;
      }
   })
   return { orders, isEmpty: orders?.length === 0, isLoading }
}
//--------------------------------- GET ---------------------------------
export const useGetOrder = (id: string) => {
   const { data, isLoading } = useQuery({
      queryKey: ["order", id],
      queryFn: async () => {
         const { data: order, error } = await supabase.from('orders').select().eq('id', id).single();
         if (error) throw new Error("Error fetching order with ID")
         const { data: products } = await supabase.from('products').select().in('id', order.products);
         const { items, total } = order;
         interface IResponse {
            products?: IProduct[];
            total: number;
            items: number;
         }
         const response: IResponse = { products, total, items } as any;
         return response;
      }
   })
   return {
      products: data?.products,
      total: data?.total,
      items: data?.items,
      isLoading
   }
}
//--------------------------------- ADD ---------------------------------
export const useAddOrder = () => {
   const router = useNavigate();
   const { mutate: addOrder, isPending: isAddingOrder } = useMutation({
      mutationFn: async (order: IOrderCheckout) => {
         const { data, error } = await supabase.from('orders').insert(order).select().single();
         if (error) throw new Error("Error adding order")
         return data;
      },
      onSuccess: (order) => {
         router('/checkout/' + order?.id);
      }
   })
   return { addOrder, isAddingOrder }
}
//--------------------------------- DELETE ---------------------------------
export const useDeleteOrder = () => {
   const router = useNavigate();
   const { mutate: deleteOrder, isPending: isDeletingOrder } = useMutation({
      mutationFn: async (id: string) => await supabase.from('orders').delete().eq('id', id),
      onSuccess: () => {
         router('/cart')
      }
   })
   return { deleteOrder, isDeletingOrder }
}
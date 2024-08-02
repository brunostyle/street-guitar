import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { supabase } from "@database";
import { IOrderCheckout, IProduct } from "@interfaces";

export const usePaginateOrders = (page: number, limit: number) => {
   const { data: orders, isLoading } = useQuery({
      queryKey: ["orders", page],
      queryFn: async () => {
         const { data, error } = await supabase.from('orders').select('*, user:users(name, email, avatar)').order('id').range((page - 1) * limit, page * limit - 1);
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
         const { items, total, paid } = order;
         interface IResponse {
            products?: IProduct[];
            total: number;
            items: number;
            paid: boolean;
         }
         const response: IResponse = { products, total, items, paid } as any;
         return response;
      }
   })
   return {
      products: data?.products,
      total: data?.total,
      items: data?.items,
      paid: data?.paid,
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
//--------------------------------- PAY ---------------------------------
export const usePayOrder = (id: string) => {
   const queryClient = useQueryClient();
   const { mutate: payOrder, isPending: isPayingOrder } = useMutation({
      mutationFn: async () => await supabase.from('orders').update({ paid: true }).eq('id', id),
      onSuccess: () => {
         queryClient.refetchQueries({queryKey: ["order", id]});
      }
   })
   return { payOrder, isPayingOrder }
}
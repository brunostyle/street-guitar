import { useQuery } from "@tanstack/react-query"
import { supabase } from "../assets/database";
import { IDashboard } from "../utils/interfaces";

export const useDashboard = () => {
   const { data, isLoading } = useQuery({
      queryKey: ["dashboard"],
      queryFn: async (): Promise<IDashboard | undefined> => {
         try {
            const [
               { count: numberOfClients },
               { count: numberOfProducts },
               { count: numberOfOrders },
               { data: lastSells, error }
            ] = await Promise.all([
               supabase.from('users').select('id', { count: 'exact', head: true }),
               supabase.from('products').select('id', { count: 'exact', head: true }),
               supabase.from('orders').select('id', { count: 'exact', head: true }).eq('paid', true),
               supabase.from('orders').select('id, createdAt, user:users(name, email, avatar)').eq('paid', true).order('id').limit(10)
            ]);
            if (error) throw new Error("Error fetching lastSells")
            return {
               numberOfClients: numberOfClients!,
               numberOfProducts: numberOfProducts!,
               numberOfOrders: numberOfOrders!,
               lastSells: lastSells as any,
               chart: {
                  clients: [31, 40, 28, 51, 42, 109, 100],
                  sells: [11, 32, 45, 32, 34, 52, 41]
               }
            }
         } catch (error) {
            console.log(error);
         }
      }
   })
   return {
      numberOfClients: data?.numberOfClients,
      numberOfProducts: data?.numberOfProducts,
      numberOfOrders: data?.numberOfOrders,
      lastSells: data?.lastSells,
      clients: data?.chart.clients,
      sells: data?.chart.sells,
      isLoading
   }
}
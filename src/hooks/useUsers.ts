import { useQuery } from "@tanstack/react-query"
import { supabase } from "@database";

export const usePaginateUsers = (page: number, limit: number) => {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users", page],
    queryFn: async () => {
      const { data, error } = await supabase.from('users').select().range((page - 1) * limit, page * limit - 1);
      if (error) throw new Error(error.message);
      return data;
    }
  })
  return { users, isEmpty: users?.length === 0, isLoading }
}
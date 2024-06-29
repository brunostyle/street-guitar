import { useQuery } from "@tanstack/react-query"
import { baseURL } from "../utils/database/api";
import { IOrder } from "../utils/interfaces";

const getOrders = async (path: string): Promise<IOrder[]> => {
   const data = await fetch(baseURL + path);
   return data.json();
}

interface IProps {
   key: string;
   path: string;
}

export const useOrders = ({ key, path }: IProps) => {
   return useQuery({
      queryKey: [key],
      queryFn: () => getOrders(path)
   })
}
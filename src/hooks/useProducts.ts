import { useQuery } from "@tanstack/react-query"
import { baseURL } from "../utils/database/api";
import { IProduct } from "../utils/interfaces";

const getProducts = async (path: string): Promise<IProduct[]> => {
   const data = await fetch(baseURL + path);
   return data.json();
}

interface IProps {
   key: string;
   path: string;
}

export const useProducts = ({ key, path }: IProps) => {
   return useQuery({
      queryKey: [key],
      queryFn: () => getProducts(path)
   })
}
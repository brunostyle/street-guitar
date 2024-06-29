import { useQuery } from "@tanstack/react-query"
import { baseURL } from "../utils/database/api";
import { IDashboard } from "../utils/interfaces";

const getDashboard = async (path: string):Promise<IDashboard> => {
   const data = await fetch(baseURL + path);
   return data.json();
}

interface IProps {
   key: string;
   path: string;
}

export const useDashboard = ({key, path}:IProps) => {
   return useQuery({
      queryKey: [key],
      queryFn: () => getDashboard(path),                         
      // refetchInterval: 30 * 1000
   })
}
import { useQuery } from "@tanstack/react-query"
import { baseURL } from "../utils/database/api";
import { IUser } from "../utils/interfaces";

const getUsers = async (path: string):Promise<IUser[]> => {
   const data = await fetch(baseURL + path);
   return data.json();
}

interface IProps {
   key: string;
   path: string;
}

export const useUsers = ({key, path}:IProps) => {
   return useQuery({
      queryKey: [key],
      queryFn: () => getUsers(path)
   })
}
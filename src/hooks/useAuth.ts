import { useMutation } from "@tanstack/react-query"
import { useUser } from "../state";
import { baseURL } from "../utils/database/api";
import { IAuth, ILogin, IRegister } from "../utils/interfaces";
import { useNavigate as useRouter } from "react-router-dom"

const auth = async (path: string, data: ILogin | IRegister):Promise<IAuth> => {
   const res = await fetch(baseURL + path);
   // const res = await fetch(baseURL + path, {
   //    method: 'POST',
   //    headers: { 'Content-Type': 'application/json' },
   //    body: JSON.stringify(data)
   // });

   // if (!res.ok) {
	// 	data.map((err: string) => toast.error(err));
	// 	throw new Error();
	// }
   return res.json();
}

interface IProps {
   path: string;
}

export const useAuth = ({path}:IProps) => {
   const router = useRouter();
   const { login } = useUser();
   return useMutation({
      mutationFn: (data: ILogin | IRegister) => auth(path, data),
      onSuccess: (user) => {
         localStorage.setItem('token', user.token);
         login(user);
         router('/');
      }
   })
}

const renew = async (token: string):Promise<IAuth> => {
   const res = await fetch(baseURL + '/validate-token');
   // const res = await fetch(baseURL + '/validate-token', {
   //    headers: { 'Content-Type': 'application/json', 'access-token': token },
   // });
   return res.json();
}


export const useAuthRenew = () => {
   const router = useRouter();
	const { login } = useUser();
	return useMutation({
      mutationFn: renew,
		onSuccess: (user) => {
			localStorage.setItem('token', user.token);
			login(user);
         router('/');
		},
	});
};

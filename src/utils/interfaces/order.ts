import { IProduct, IAuth } from "./index";

export interface IOrder {
   _id: string;
   name: string;
   email: string;
   avatar?: string;
   paid: boolean;
   numberOfItems: number;
   total: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface IOrderSummary {
   user?: IAuth;
   orderItems: IProduct[];
   paid: boolean;
   numberOfItems: number;
   total: number;
	createdAt?: Date;
	updatedAt?: Date;
}

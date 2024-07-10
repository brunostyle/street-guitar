export interface IUser {
   name: string;
   email: string;
   avatar?: string;
}

export interface IOrder {
   id: string;
   user: IUser;
   paid: boolean;
   items: number;
   total: number;
	createdAt: Date;
}

export interface IOrderCheckout {
   user?: string;
   products: string[];
   paid: boolean;
   items: number;
   total: number;
}
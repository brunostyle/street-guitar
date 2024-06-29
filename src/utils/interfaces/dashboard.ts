export interface IOrderDashboard {
	_id: string;
	name: string;
	email: string;
	avatar?: string;
}

export interface IChart {
	clients: number[];
	sells: number[];
}

export interface IDashboard {
	numberOfClients: number;
	numberOfProducts: number;
	numberOfOrders: number;
	lastSells: IOrderDashboard[];
	chart: IChart;
}
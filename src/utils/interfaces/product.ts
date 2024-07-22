import { ChipProps } from "@nextui-org/react";

export type TValidCategory = 'rock' | 'folclore' | 'pop';

export interface IProduct {
	id: string;
	createdAt?: string;
	updatedAt?: string;
	title: string;
	description: string;
	images: string[];
	category: TValidCategory;
	price: number;
	tags: string[];
}

export const categories: Record<string, ChipProps["color"]> = {
	rock: 'warning',
	folclore: 'danger',
	pop: 'secondary',
 }
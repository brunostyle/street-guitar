import { ChipProps } from "@nextui-org/react";

export type TValidCategory = 'cards' | 'covers' | 'logos';

export interface IProduct {
	id: string;
	createdAt?: string;
	updatedAt?: string;
	title: string;
	description: string;
	images: string[];
	price: number;
	tags: string[];
	category: TValidCategory;
}

export const categories: Record<string, ChipProps["color"]> = {
	cards: 'warning',
	covers: 'danger',
	logos: 'secondary',
 }
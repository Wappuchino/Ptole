export enum ItemUnits {
	Weight,
	Length,
	Volume,
	Piece
}

export interface ItemType {
	readonly id: number;
	readonly name: string;
	readonly units: ItemUnits;
	readonly weight: number;
	readonly description: string;
}

export interface Item {
	readonly itemType: ItemType;
	readonly inventory: Inventory;
	readonly amount: number;
}

export interface Inventory {
	readonly id: number;
	readonly name: string;
	readonly items: Item[];
}
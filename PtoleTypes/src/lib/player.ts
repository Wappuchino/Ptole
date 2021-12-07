export interface Player {
	readonly id: number;
	readonly name: string;
	readonly characters: Character[];
}

export interface Character {
	readonly id: number;
	readonly name: string;
	readonly owner: Player;
}
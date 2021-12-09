export interface AbilityScore {
    score: number
}

export class SimpleAbilityScore implements AbilityScore {
    constructor(
        public score: number
    ) {}

    public get modifier(): number {
        return Math.floor((this.score - 10) / 2)
    }
}

export enum AbilityScoreType {
    Strength,
    Dexterity,
    Constitution,
    Intelligence,
    Wisdom,
    Charisma
}

export type AbilityScoreCollection = {
    [type in AbilityScoreType]: AbilityScore
}

export enum ProficiencyLevel {
    Proficient,
    Expert
}



export type Proficiencies = {
    [type in AbilityScoreType | string]: ProficiencyLevel
}

export interface Character {
    classLevels: {
        [className: string]: number;
    };
    hitPoints: number;
    temporaryHitPoints: number;
    abilityScores: AbilityScoreCollection;
    proficiencies: Proficiencies;
}

const c: Character | undefined = undefined;
const s = c?.abilityScores[AbilityScoreType.Constitution]
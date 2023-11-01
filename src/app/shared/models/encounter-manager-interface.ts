export interface Encounter {
    entities: Entity[];
    encounterName: string;
}

export interface Entity {
    armorClass: number;
    name: string;
    initiativeScore: number;
    currentHitPoints: number;
    totalHitPoints: number;
}
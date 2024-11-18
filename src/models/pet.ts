import { calculateYearDifference } from "../functions/helpers/date";
import { PetType } from "./petType";

export interface Pet {
    guid : string;
    name : string;
    bornAt : Date;
    type : PetType;
}

export class PetResponse {
    guid : string;
    name : string;
    bornAt: Date;
    price : number;

    constructor(pet : Pet) {
        this.guid= pet.guid;
        this.name= pet.name;
        this.bornAt = pet.bornAt
        const age = calculateYearDifference(pet.bornAt)
        this.price = age > 1 ? pet.type.subType.baseValue / age : pet.type.subType.baseValue 
    }
}
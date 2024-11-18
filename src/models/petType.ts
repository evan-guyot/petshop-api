export interface PetType {
    id : number;
    name : string;
    subType : PetSubType;
}

export interface PetSubType {
    id : number;
    name : string;
    baseValue : number; // Used to determinate the value of a pet    
}
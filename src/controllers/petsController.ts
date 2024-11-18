import { Request, Response } from 'express';
import { Pet, PetResponse } from '../models/pet';

const pets: Pet[] = [
  { guid : "017c5aa7-0a46-48b7-bbf1-0df752a33c8b", name : "Max", bornAt: new Date(2018, 0O5, 0O5, 17, 23, 42, 11), type : { id: 1, name : "Dog", subType : { id : 1, name: "Caniche", baseValue : 1200}}},
  { guid : "10963b63-35be-43e8-abed-1c59ed2ca9da", name : "Johnny", bornAt: new Date(2014, 0O5, 0O5, 17, 23, 42, 11), type : { id: 1, name : "Dog", subType : { id : 1, name: "Berger Allemand", baseValue : 800}}},
];

export const getPets = (req: Request, res: Response) => {
    const petResponses = pets.map(pet => new PetResponse(pet));
    res.status(200).json(petResponses);
};
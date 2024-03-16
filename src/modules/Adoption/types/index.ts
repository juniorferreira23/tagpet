import { z } from "zod";
import { registerAnimalFormSchema } from "../screen/RegisterAnimal/schemas";

export interface ISaveAnimal {
    name: string;
    age: string;
    month?: string;
    breed: string;
    species: string;
    image: string;
    owner: string;
}


export type registerAnimalFormType = z.infer<typeof registerAnimalFormSchema>
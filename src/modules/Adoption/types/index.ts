import { z } from "zod";
import { registerAnimalFormSchema } from "../screen/RegisterAnimal/schemas";

export interface ISaveAnimal {
    name: string;
    age: string;
    month?: string;
    breed: string;
    species: string;
    image: string | null;
    owner: string;
    gender: string;
    description: string;
    adopted: boolean;
}

export interface ISaveAnimalRequest extends ISaveAnimal {
    user_id: string;
}


export type registerAnimalFormType = z.infer<typeof registerAnimalFormSchema>
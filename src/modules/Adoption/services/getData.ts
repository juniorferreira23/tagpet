import firestore from "@react-native-firebase/firestore";
import { ISaveAnimal } from "../types";

export interface IResponseAnimal extends Partial<ISaveAnimal> {
    id: string 
}

type Props = {
    setAnimals: (value: React.SetStateAction<IResponseAnimal[]>) => void
}

export const getAnimal = async ({ setAnimals }: Props) => {
    firestore().collection("Animal").onSnapshot((querySnapShot) => {
        const animals: Array<IResponseAnimal> = [];
        querySnapShot.forEach(doc => {
            animals.push({ id: doc.id, ...doc.data() })
        })
        setAnimals(animals)
    })
}
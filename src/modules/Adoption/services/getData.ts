import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { ISaveAnimal } from "../types";

export interface IResponseAnimal extends Partial<ISaveAnimal> {
    id: string
}

type Props = {
    setAnimals: (value: React.SetStateAction<IResponseAnimal[]>) => void
}

export const getAnimal = async ({ setAnimals }: Props) => {
    firestore()
        .collection("Animal")
        .where("adopted", "==", false)
        .onSnapshot((querySnapShot) => {
            const animals: Array<IResponseAnimal> = [];
            querySnapShot.forEach(doc => {
                animals.push({ id: doc.id, ...doc.data() })
            })
            setAnimals(animals)
        })
}

export interface IResponseAnimalByOwner extends Pick<ISaveAnimal, "name" | "species" | "breed" | "gender" | "image"> { id: string }

export const getByOwnerId = async () => {
    const userId = auth().currentUser?.uid;
    const response = await firestore()
        .collection("Animal")
        .where("adopted", "==", false)
        .where("user_id", "==", userId).get()
    const animals: Array<IResponseAnimalByOwner> = []
    for (let animal of response.docs) {
        const animalWithType = animal.data() as IResponseAnimalByOwner;
        const payload: IResponseAnimalByOwner = {
            breed: animalWithType.breed,
            gender: animalWithType.gender,
            name: animalWithType.name,
            species: animalWithType.species,
            image: animalWithType.image,
            id: animal.id
        }
        animals.push(payload);
    }
    return animals;
}

export interface IResponseAnimalByAnimal extends ISaveAnimal { }

export const getByAnimalId = async (animalId: string) => {
    console.log(animalId)
    const response = await firestore()
        .collection("Animal")
        .doc(animalId)
        .get()
    const payload = response.data()
    console.log(payload)
    return payload as IResponseAnimalByAnimal
}

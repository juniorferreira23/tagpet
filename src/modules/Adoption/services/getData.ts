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
        console.log(animals)
        setAnimals(animals)
    })
}

export interface IResponseAnimalByOwner extends Pick<ISaveAnimal, "name" | "species" | "breed" | "gender" | "image"> {id: string}

export const getByOwnerId = async () => {
    const userId = auth().currentUser?.uid;
    const response = await firestore()
        .collection("Animal")
        .where("adopted", "==", false)
        .where("user_id", "==", userId).get()
    const animals: Array<IResponseAnimalByOwner> = []
    for(let animal of response.docs) {
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


const data = [
    { "age": "12", "breed": "Disgramado", "description": "MEU PET GOSTA DE CAMINHAR POR AI E FICAR POR AI IGUAL UM MALUCO POR AI E ELE NO GOSTA DE HUMANOS", "gender": "Masculino", "image": "https://firebasestorage.googleapis.com/v0/b/tagpet-7eda5.appspot.com/o/animal%2FrqI4404282hjN9Fd6UoQ.png?alt=media&token=104377e2-3cdf-4811-9ecf-057bd5911e13", "month": "0", "name": "Douglas", "owner": "Gabriel Santos", "species": "Cachorro", "user_id": "YVWFatigOgdhRvVGPPttdZJZMxr1" }
]
import firestore from '@react-native-firebase/firestore';
import { ISaveAnimal } from '../types';

export const putAnimal = async (payload: Pick<ISaveAnimal, "image">, animalId: string) => {
    try {
        await firestore().collection('Animal').doc(animalId).update(payload);
        return "ok";
    } catch (error) {
        console.log(error);
        return "error";
    }
}
import firestore from '@react-native-firebase/firestore';
import { ISaveAnimal } from '../types';

export const saveAnimal = async (payload: ISaveAnimal) => {
    try {
        const response = await firestore().collection('Animal').add(payload);
        return response.id;
    } catch (error) {
        console.log(error);
        return "error";
    }
}
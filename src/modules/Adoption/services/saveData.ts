import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { ISaveAnimal, ISaveAnimalRequest } from '../types';

export const saveAnimal = async (payload: ISaveAnimal) => {
    console.log("save")
    try {
        const userId = auth().currentUser?.uid
        const payloadAnimal = {
            ...payload,
            user_id: userId,
        } as ISaveAnimalRequest;
        // console.log(payloadAnimal)
        const response = await firestore().collection('Animal').add(payloadAnimal);
        return response.id;
    } catch (error) {
        console.log(error);
        return "error";
    }
}
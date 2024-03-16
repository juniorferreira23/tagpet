import firestore from '@react-native-firebase/firestore';
import { ISaveAnimal } from '../types';

export const saveAnimal = (payload: ISaveAnimal) => {
    firestore()
        .collection('Animal')
        .add(payload)
        .then(() => {
            console.log('Animal adicionado com sucesso');
        })
        .catch((err) => console.log(err));
}
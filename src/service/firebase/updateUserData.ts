import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { IUserData } from '../../modules/auth/types';

export const updateUserData = async (payload: Partial<IUserData>) => {
    try {
        const userId = auth().currentUser?.uid
        await firestore().collection('Users').doc(userId).update(payload);
        console.log('Criado com sucesso');
    } catch (error) {
        console.log(error);
        return "error";
    }
}
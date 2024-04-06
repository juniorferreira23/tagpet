import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import messaging  from '@react-native-firebase/messaging';
import { IUserData } from '../../types';

export const saveUserData = async (payload: IUserData) => {
    try {
        const userId = auth().currentUser?.uid
        const token = await messaging().getToken();
        payload.fcm_token = token;
        console.log(token)
        await firestore().collection('Users').doc(userId).set(payload);
        console.log('Criado com sucesso');
    } catch (error) {
        console.log(error);
        return "error";
    }
}
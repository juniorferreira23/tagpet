import auth from '@react-native-firebase/auth';
import { signUpUserFormType } from '../../screens/signUp/type';
import { saveUserData } from './saveMoreData';
import { IUserData } from '../../types';

export const signUp = (payload: signUpUserFormType) => {
    auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
            const payloadUser: IUserData = {
                name: payload.name,
                cell_phone: payload.cell_phone,
                city: payload.city,
                zip_code: payload.zip_code,
                fcm_token: null
            }
            saveUserData(payloadUser);
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });
}

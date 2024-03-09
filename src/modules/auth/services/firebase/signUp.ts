import auth from '@react-native-firebase/auth';
import { signUpUserFormType } from '../../screens/signUp/type';

export const signUp = (payload: signUpUserFormType) => {
    auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
            console.log('Criado com sucesso');
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

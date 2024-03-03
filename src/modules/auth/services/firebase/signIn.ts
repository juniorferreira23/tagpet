import auth from '@react-native-firebase/auth';
import { signInUserFormType } from '../../screens/signIn/type';

export const signIn = (payload: signInUserFormType) => {
    auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
            console.log('Entrou com sucesso');
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

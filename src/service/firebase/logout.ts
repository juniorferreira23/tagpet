import auth from "@react-native-firebase/auth"

export const logoutFirebase = async () => {
    try {
        auth().signOut()
        console.log('Usuário deslogado');
    } catch (error) {
        console.log('Error: ', error);
    }
}
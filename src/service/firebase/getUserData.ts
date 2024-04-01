import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

export const getUser = async (otherUser?: string) => {
    console.log(otherUser)
    const userId = !!otherUser ? otherUser : auth().currentUser?.uid
    try {
        const response = await firestore().collection("Users").doc(userId).get();
        return response;
    } catch (error) {
        console.log("Deu erro ao buscar usuario " + error )
    }


}
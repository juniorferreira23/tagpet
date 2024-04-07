import messaging, {FirebaseMessagingTypes} from "@react-native-firebase/messaging";
import {PermissionsAndroid, Platform, PermissionStatus} from 'react-native';
import { updateUserData } from "./updateUserData";

export const saveFCMToken = async () => {
    const token = await messaging().getToken();
    return token;
}

export const requestPermissionPushNotification = async () => {
    let initialAuthStatus = await messaging().hasPermission();
    let enabled =
        initialAuthStatus === messaging.AuthorizationStatus.AUTHORIZED
        || initialAuthStatus === messaging.AuthorizationStatus.PROVISIONAL
    if(!enabled) {
        const authStatus: PermissionStatus | FirebaseMessagingTypes.AuthorizationStatus = Platform.OS === "android" 
        ? await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
        : await messaging().requestPermission();
        if(typeof enabled === "number") {
            enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED
                || authStatus === messaging.AuthorizationStatus.PROVISIONAL
        } else {
            enabled = 
                authStatus === "granted"
        }
    }
    if (enabled) {
        const token = await saveFCMToken();
        updateUserData({fcm_token: token});
    }
}

export const startNotifications = () => {
    requestPermissionPushNotification();
    messaging()
        .onMessage(async(message) => {
            console.log(message);
        })
    messaging()
        .setBackgroundMessageHandler(async(message) => {
            console.log("backgroundMessage", message)
        })
}
import messaging from "@react-native-firebase/messaging";

export const requestPermissionPushNotification = async () => {
    let initialAuthStatus = await messaging().hasPermission();
    let enabled =
        initialAuthStatus === messaging.AuthorizationStatus.AUTHORIZED
        || initialAuthStatus === messaging.AuthorizationStatus.PROVISIONAL
    if(!enabled) {
        const authStatus = await messaging().requestPermission();
        enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED
            || authStatus === messaging.AuthorizationStatus.PROVISIONAL
    }
    if (enabled) {
        console.log('Usuario autorizou as notificações:')
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
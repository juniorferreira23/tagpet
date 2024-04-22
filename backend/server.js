const express = require("express");
const bodyParse = require("body-parser");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

const app = express();
const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
app.use(bodyParse.json());

const port = 3000;
app.listen(port, "192.168.83.16", () => {
console.log(`Listening to requests on http://192.168.83.16:${port}`);
});


const getUserFcmToken = async(city) => {
    try {
        const users = await firebaseAdmin.firestore().collection("Users").get()
        let devicePushToken = [];
        for (let user of users.docs) {
            const userData = user.data();
            if (!!userData.fcm_token && userData.city === city) {
                devicePushToken.push(userData.fcm_token)
            }
        }
        return devicePushToken;
    } catch (error) {
        console.log("getFCM: " + error)
    }
}

const sendPushNotification = async (city, title, body) => {

    try {
        const users = await getUserFcmToken(city);
        
        if(users.length > 0) {
            await firebaseAdmin.messaging().sendEachForMulticast({
                tokens: users,
                notification: {
                    title,
                    body
                }
            })
            return 1
        }
        return 0
    } catch (error) {
        console.log("error firabse: " + error)
    }
}

app.post('/api/send-notification', async(req, res) => {
    const { title, body, city } = req.body;
    const message = await sendPushNotification(city, title, body)
    res.status(Boolean(message) ? 201 : 420).json({ message: "sucess", body: Boolean(message) ? "Sucesso" : "Sem tokens FCM"  });
});
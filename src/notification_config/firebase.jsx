// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABe-1N-6nqTS3oigRGNVJqkoq0mKR3wmE",
    authDomain: "notification-app-c6398.firebaseapp.com",
    projectId: "notification-app-c6398",
    storageBucket: "notification-app-c6398.firebasestorage.app",
    messagingSenderId: "1056693008330",
    appId: "1:1056693008330:web:2c01351aa6ba5075888133",
    measurementId: "G-HQZ5X744GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    console.log(permission);
    if (permission === "granted") {
        const token = await getToken(messaging, {
            vapidKey: "BMTxVce7i_LXah68LKKAtVHJPi-5EBC-OjSllDpppJ_gviXnXR2C41RBt5rNLa9JWzBvVEC-BS3JM4shpf9UzME"
        });
        console.log(token);
    }
}
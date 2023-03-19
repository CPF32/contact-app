import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { memoize } from 'lodash';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv6T8WqcmuNNISWP_o5KNeESzMFo673Ec",
  authDomain: "contact-app-cfcc9.firebaseapp.com",
  projectId: "contact-app-cfcc9",
  storageBucket: "contact-app-cfcc9.appspot.com",
  messagingSenderId: "312191547508",
  appId: "1:312191547508:web:11836c4a5d7c9390313921",
  measurementId: "G-D1PKR34XPS"
};

// Initialize Firebase
export const initFirebase = memoize(() => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  return { app, analytics, auth }
 })
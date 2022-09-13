import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB1IkBdrznm_e7BezAiBtAHfhb3lcp14oo",
  authDomain: "bzone-restaurant.firebaseapp.com",
  projectId: "bzone-restaurant",
  storageBucket: "bzone-restaurant.appspot.com",
  messagingSenderId: "694612335325",
  appId: "1:694612335325:web:7868e2c6c4fa0fccdd5934",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

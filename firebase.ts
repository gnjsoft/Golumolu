import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsK5ZuTia9d1UQ54qq4pJDxMfXU-DQ-J4",
  authDomain: "gnj-worldwide.firebaseapp.com",
  projectId: "gnj-worldwide",
  storageBucket: "gnj-worldwide.firebasestorage.app",
  messagingSenderId: "833871275881",
  appId: "1:833871275881:web:4b8549b29aa565aa103ff8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

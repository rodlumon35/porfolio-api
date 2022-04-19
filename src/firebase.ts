import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUS4XxWPhl6YzfWSXNtFjUiIWQd6axo3M",
  authDomain: "portfolio-422f6.firebaseapp.com",
  projectId: "portfolio-422f6",
  storageBucket: "portfolio-422f6.appspot.com",
  messagingSenderId: "819885974103",
  appId: "1:819885974103:web:9ccc8e63908dcf51a2b912",
  measurementId: "G-SH9ENHDC7R",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const storage: FirebaseStorage = getStorage(app);
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

export { storage, auth, db };

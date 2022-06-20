import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCMJZq9onDDIJmDtG7ukVuza2_CdP9XFGg",
    authDomain: "auth-ae747.firebaseapp.com",
    projectId: "auth-ae747",
    storageBucket: "auth-ae747.appspot.com",
    messagingSenderId: "910041502743",
    appId: "1:910041502743:web:1a30cac281bf96062c3852"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
        })
        .catche((error) => {
            console.log(error)
        });
};
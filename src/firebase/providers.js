import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName, email, photoURL, uid} = result.user;
        return {
            ok: true,
            //User info
            displayName, 
            email, 
            photoURL, 
            uid,
        };
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        };    
    }
};

export const registerUserWithEmailPassword = async({email, password, name}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        console.log(resp);
        //TODO: Actualizar el Name en Firebase
        return {
            ok: true,
            uid,
            photoURL,
            email,
            password,
            name,
        };
    } catch (error) {
        console.log(error);
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        };    
    }
};
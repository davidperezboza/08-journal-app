import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
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
        //TODO: Actualizar el Name en Firebase
        await updateProfile(FirebaseAuth.currentUser, {
            displayName: name,
        });

        return {
            ok: true,
            uid,
            photoURL,
        };
    } catch (error) {
        console.log('entra en el catch');
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        };    
    }
};
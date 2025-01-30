import { signInWithGoogle } from "../../firebase";
import { checkingCredencials } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredencials());
    };
};

export const startGoogleSignIn = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredencials());
        const result = await signInWithGoogle();
        console.log({result});
    };
};
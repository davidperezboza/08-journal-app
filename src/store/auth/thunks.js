import { signInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase } from "../../firebase";
import { clearNotesLogout } from "../journal/";
import { checkingCredencials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredencials());
    };
};

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredencials());
        const result = await signInWithGoogle();
        
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));

    };
};

export const startCreatingUserWithEamilPassword = ({email, password, name}) => {
    return async(dispatch) => {
        dispatch(checkingCredencials());
        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, name});
        if(!ok) return dispatch(logout({errorMessage}));
        dispatch(login({uid, displayName: name, email, photoURL}));

    };
};

export const startLoginWithEmailPassword = ({email, password}) => {
    return async(dispatch) => {
        dispatch(checkingCredencials());
        const {ok, uid, displayName, photoURL, errorMessage} = await loginWithEmailPassword({email, password});
        if(!ok) return dispatch(logout({errorMessage}));
        dispatch(login({uid, displayName, email, photoURL}));
    };
};

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch(clearNotesLogout());
        dispatch(logout());
    };
};
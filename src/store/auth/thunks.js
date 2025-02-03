import { signInWithGoogle, registerUserWithEmailPassword } from "../../firebase";
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
        dispatch(login({uid, name, email, photoURL}));

    };
};
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
        const resp = await registerUserWithEmailPassword({email, password, name});
        console.log(resp);
    };
};
import { checkingCredencials } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredencials());
    };
};

export const startGoogleSignIn = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredencials());
    };
};
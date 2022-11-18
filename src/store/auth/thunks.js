import { checkingCrendentials } from "./auth-slice"

export const checkingAuthentication = ( email, password) => { 
    return async (dispatch) => { 
        dispatch( checkingCrendentials())
    }
}
export const  startGoogleSignIn= () => { 
    return async (dispatch) => { 
        dispatch( checkingCrendentials())
    }
}
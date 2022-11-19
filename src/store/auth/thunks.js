import { singInWithGoogle } from "../../firebase/providers"
import { checkingCrendentials, login, logout } from "./auth-slice"

export const checkingAuthentication = ( email, password) => { 
    return async (dispatch) => { 
        dispatch( checkingCrendentials())
    }
}
export const  startGoogleSignIn= () => { 
    return async (dispatch) => { 
        dispatch(checkingCrendentials());
        const result = await singInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result))
    }
}
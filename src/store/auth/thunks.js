
import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from "../../Firebase/providers"
import { checkingCredentials, logout, login } from "./authSlice"
import {registerWithEmailPassword} from '../../Firebase/providers'
import { async } from "@firebase/util"

export const checkingAuthentication = (email, password)=>{
    
    return async (dispatch)=>{
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn =()=>{

    

    return async(dispatch)=>{
        dispatch(checkingCredentials())

        const result= await signInWithGoogle()

        if(!result.ok) return dispatch(logout( result.errorMessage))
    
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName})=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())

       const {ok, uid, photoURL, errorMessage} = await registerWithEmailPassword({displayName, email, password})
        
       if(!ok) return dispatch( logout({errorMessage}))

        dispatch(login({uid, displayName, email, photoURL}))
        
    }
}

export const startLoginWithEmailPassword = ({email,password})=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())

        const result= await loginWithEmailPassword({email, password})
    

        if(!result.ok) return dispatch( logout(result.errorMessage))
        dispatch(login(result))
    }
}

export const  startLogOut =()=>{
    return async( dispatch)=>{
        await logoutFirebase() //desconecta cualquier lohgin, microsoft, google, etc
        dispatch(logout()) // esto debería limpiar todo
    }
}
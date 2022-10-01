import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FirebaseAuth } from '../Firebase/config'
import { login, logout } from '../store/auth/authSlice'

const useCheckAuth = () => {
  
    const {status}= useSelector(state => state.auth)
    const dispatch= useDispatch()
  
    useEffect(()=>{
  
      onAuthStateChanged(FirebaseAuth, async(user)=>{ //esto es un observable con un callback que se ejecuta cuando se reciba el valor user
        if(!user){
          return dispatch(logout())
        }
        const {uid,email, displayName, photoURL}= user 
        dispatch(login({uid, email, displayName, photoURL}))
  
      }) 
  
    },[])

    return {
        status
    }
}

export default useCheckAuth
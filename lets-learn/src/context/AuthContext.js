import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth'
import React, {useContext, useState, useEffect, createContext} from 'react'
import {auth} from "../firebase"

const AuthContext = createContext({
    currentUser: null
})

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email,password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=> {
            setCurrentUser(user)
            setLoading(false)
            
        })

        return unsubscribe
    },[])

    

    const value = {
        currentUser,
        login,
        signup
    }

    
    

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

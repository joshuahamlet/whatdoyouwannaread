import React, {createContext, useEffect, useState} from 'react'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const localData = localStorage.getItem('accessToken')
    
    const [authState, setAuthState] = useState(localData)


    useEffect(() => {
        localStorage.setItem('accessToken', authState)
        console.log("AUTHSTATE", authState)
    }, [authState])

    return(
        <AuthContext.Provider value={{authState, setAuthState}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

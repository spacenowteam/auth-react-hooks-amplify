import React, { createContext, useReducer, useContext } from 'react';
import { authReducer, initialState } from "../reducers/auth";

export const AuthContext = createContext();

const AuthProvider = props => {

    const contextValue = useReducer(authReducer, initialState);
    
    return (
        <AuthContext.Provider value={contextValue}>
            { props.children }
        </AuthContext.Provider>
    )
    
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}
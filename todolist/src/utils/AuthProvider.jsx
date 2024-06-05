import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {





    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " ;

        } else {
            delete axios.defaults.headers.common["Authorization"];

        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
            token,
        }),
        [token]
    );

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;
import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [token, setToken_] = useState(localStorage.getItem("token"));


    const setToken = (newToken) => {
        setToken_(newToken);
    };
    console.log("setToken", token);

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token',token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
        }
    }, [token]);
    console.log("contextValue", token);

    const contextValue = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token]
    );
    console.log("return AuthContext.Provider", token);

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;
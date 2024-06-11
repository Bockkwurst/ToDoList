import React, {useEffect, useState} from "react";
import axios from "axios";
import {useAuth} from "../../utils/AuthProvider.jsx";
import { jwtDecode } from "jwt-decode";

export default function TodoDisplay({darkMode}) {

    const [data, setData] = useState(null);
    const { token } = useAuth();
    const titleClass = darkMode ? "title dark-mode" : "title light-mode";



    let username = 'Guest';
    if (token) {
        const decodedToken = jwtDecode(token);
        username = decodedToken.username;
    }

    useEffect(() => {
        if (username !== 'Guest') {
            axios.get(`http://localhost:3030/${username}`)
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [username]);

    return (
        <div>
            <div className={titleClass}>Hallo {username}</div>
        </div>
    )
}
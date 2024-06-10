import React, {useEffect, useState} from "react";
import axios from "axios";
import { useAuth } from "../../utils/AuthProvider.jsx";

export default function TodoDisplay({darkMode}) {

    const [data, setData] = useState(null);
    const { currentUser } = useAuth();

    useEffect(() => {
        if (currentUser) {
            axios.get ('http://localhost:3030/${currentUser.id}')
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [currentUser]);

    return (
        <div>
            <h1>Herzlich willkommen {currentUser ? currentUser.username : ""}</h1>
            {data && <div>{JSON.stringify(data)}</div>}
        </div>
    )
}
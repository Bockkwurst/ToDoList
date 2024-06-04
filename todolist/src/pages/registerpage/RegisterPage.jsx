import React from "react";
import RegisterForm from "../../components/registerForm/RegisterForm.jsx";

function RegisterPage({darkmode, setDarkmode}) {
    return (
        <div>
            <RegisterForm darkmode={darkmode} setDarkmode={setDarkmode}/>
        </div>
    )
}
export default RegisterPage;
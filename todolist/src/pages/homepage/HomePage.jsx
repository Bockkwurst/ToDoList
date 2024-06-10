import React from "react";
import TodoDisplay from "../../components/todoDisplay/TodoDisplay.jsx";

export default function HomePage({darkMode, setDarkMode}) {
    return(
        <div>
            <TodoDisplay darkMode={darkMode} setDarkmode={setDarkMode}/>
        </div>
    )
}

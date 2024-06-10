import React from "react";
import TodoOverview from "../../components/todoOverview/TodoOverview.jsx";

 function HomePage({darkMode, setDarkMode}) {
    return(
        <div>
            <h1>Home Page</h1>
            <TodoOverview  darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    )
}
export default HomePage;
import React from 'react';
import TodoDetails from "../../components/todoDetails/TodoDetails.jsx"

function TodoDetailsPage({darkMode, setDarkMode}) {

    return (
        <div>
            <TodoDetails darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    )
}
export default TodoDetailsPage;
import React from 'react';
import TodoForm from "../../components/todoForm/TodoForm.jsx";

function TodoCreatorPage({darkMode, setDarkMode}) {

    return (
        <div>
            <TodoForm darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    )
}
export default TodoCreatorPage;
import React from 'react';
import {Link} from 'react-router-dom';
import TodoForm from "../../components/toDoForm/TodoForm.jsx";

function TodoCreatorPage({darkMode, setDarkMode}) {

    return (
        <div>
            <TodoForm darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    )
}
export default TodoCreatorPage;
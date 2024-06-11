import React from 'react';
import TodoEditorForm from "../../components/todoEditorForm/TodoEditorForm.jsx";

function TodoEditorPage({darkMode, setDarkMode}) {

    return (
        <div>
            <TodoEditorForm darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    );
}
export default TodoEditorPage;
import React from 'react';
import TodoEditorForm from "../../components/todoEditorForm/TodoEditorForm.jsx";

function TodoEditorPage({darkMode, setDarkMode}) {

    return (
            <TodoEditorForm darkMode={darkMode} setDarkMode={setDarkMode} />
    );
}
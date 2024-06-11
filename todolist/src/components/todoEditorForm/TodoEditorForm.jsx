import React, {useEffect} from 'react';
import axios from "axios";
import "./todoeditorform.css"
import {useNavigate} from "react-router-dom";
import DefaultButton from "../defaultButton/DefaultButton.jsx";

const TodoEditorForm = ({darkMode}) => {

    const toDoEditorContainerClass = darkMode ? "todo-editor-container dark-mode" : "todo-editor-container light-mode";

    const navigate = useNavigate();

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");
    const [status, setStatus] = React.useState("");

    const [errorMessage, setErrorMessage] = React.useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3030/todo/:id')
            .then(response => {
                console.log(response.data);

                const todo = response.data;
                setTitle(todo.title);
                setDescription(todo.description);
                setStartDate(todo.startDate);
                setEndDate(todo.endDate);
                setStatus(todo.status);
            })
            .catch(error => {
                console.log('Fetching Data failed: ', error);
            });
    }, []);

    const handleSubmit = async () => {
        try {
            const response = await axios.put('http://localhost:3030/todo/:id',
                {
                    title: title,
                    description: description,
                    startDate: startDate,
                    endDate: endDate,
                    status: status
                },
                {withCredentials: true});
            if (response.status === 200) {
                alert('Änderungen gespeichert.');
                navigate("/home");
            } else {
                alert('Speichern fehlgeschlagen.');
                setErrorMessage('Speichern fehlgeschlagen.');
            }
        } catch (error) {
            console.log('Speichern fehlgeschlagen: ', error);
            setErrorMessage('Speichern fehlgeschlagen: ' + error.message);
            alert('Speichern fehlgeschlagen.');
        }
    }

    return (
        <div className={toDoEditorContainerClass}>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Titel:</label>
                    <input type="text" value={title} placeholder={title}
                           onChange={e => setTitle(e.target.value)}/>
                    <label>Beschreibung:</label>
                    <textarea className="input" value={description} placeholder={description}
                              onChange={e => setDescription(e.target.value)}/>
                    <label>Startdatum:</label>
                    <input type="text" value={startDate} placeholder={startDate}
                           onChange={e => setStartDate(e.target.value)}/>
                    <label>Enddatum:</label>
                    <input type="text" value={endDate} placeholder={endDate}
                           onChange={e => setEndDate(e.target.value)}/>
                    <label>Status:</label>
                    <select className="status-options" value={status}
                            onChange={e => setStatus(e.target.value)}>
                        <option className="input" value="todo">To Do</option>
                        <option className="input" value="inProgress">In Progress</option>
                        <option className="input" value="done">Done</option>
                    </select>
                </div>
                <div className="button-container">
                    <DefaultButton buttonText="Abbrechen" buttonType="cancel"
                                   onClick={(event) => {
                                       event.preventDefault();
                                       navigate("/home");
                                   }}/>
                    <DefaultButton buttonText="Änderungen speichern" buttonType="submit"/>
                </div>
            </form>
            <div className="error-message">
                <label className="error">{errorMessage}</label>
            </div>
        </div>
    )
}
export default TodoEditorForm;
import React from "react";
import axios from "axios";
import "./todoform.css";
import {Link, useNavigate} from "react-router-dom";
import DefaultButton from "../defaultButton/DefaultButton.jsx";

const TodoForm = ({darkMode}) => {

    const toDoFormContainerClass = darkMode ? "todo-form-container dark-mode" : "todo-form-container light-mode";

    const navigate = useNavigate();

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");
    const [status, setStatus] = React.useState("");

    const [errorMessage, setErrorMessage] = React.useState(null);

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:3030/todo/',
                {
                    title: title,
                    description: description,
                    startDate: startDate,
                    endDate: endDate,
                    status: status
                },
                {withCredentials: true});
        } catch (error) {
            console.log('Speichern fehlgeschlagen: ', error)
            setErrorMessage('Speichern fehlgeschlagen: ' + error.message);
            alert('Speichern fehlgeschlagen: ' + error.message);
        }
    }

    return (
        <div className={toDoFormContainerClass}>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <label className="label">Title:</label>
                    <input type="text" value={title}
                           onChange={e => setTitle(e.target.value)} className="input"/>
                    <label className="label">Beschreibung:</label>
                    <textarea value={description}
                              onChange={e => setDescription(e.target.value)}
                              className="input"/>
                    <label className="lable">Startdatum:</label>
                    <input type="text" value={startDate}
                           onChange={e => setStartDate(e.target.value)} className="input"/>
                    <label className="label">Enddatum:</label>
                    <input type="text" value={endDate}
                           onChange={e => setEndDate(e.target.value)} className="input"/>
                    <label className="label">Status:</label>
                    <select value={status} className="status-options"
                            onChange={e => setStatus(e.target.value)}>
                        <option value="">Bitte auwählen</option>
                        <option value="todo" className="input">ToDo</option>
                        <option value="doing" className="input">Doing</option>
                        <option value="done" className="input">Done</option>
                    </select>
                </div>
                <div className="button-container">
                    <DefaultButton buttonText="Abbrechen" buttonType="cancel"
                                   onClick={(event) => {
                                       event.preventDefault();
                                       navigate("/home");
                                   }}/>
                    <DefaultButton buttonText="ToDo erstellen" buttonType="submit"
                                   onClick={() => navigate("/home")}/>
                </div>
            </form>
            <div className="error-message">
                <label className="error">{errorMessage}</label>
            </div>
        </div>

    )
}

export default TodoForm;
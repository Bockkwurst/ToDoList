import React from "react";
import axios from "axios";
import "./todoform.css";
import {Link} from "react-router-dom";
import DefaultButton from "../defaultButton/DefaultButton.jsx";

const TodoForm = ({darkMode}) => {

    const toDoFormContainerClass = darkMode ? "todo-form-container dark-mode" : "todo-form-container light-mode";


    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");
    const [status, setStatus] = React.useState("");

    const [error, setError] = React.useState(null);

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:3000/todo/',
                {
                    title, description, startDate, endDate, status
                }, {withCredentials: true});
        } catch (error) {
            console.log('Save failed:', error)
            setError('Save failed');
        }
    }

    return (
        <div className={toDoFormContainerClass}>
            <form>
                <div className="form">
                    <label className="label">Title:</label>
                    <input type="text" value={title}
                           onChange={e => setTitle(e.target.value)} className="input"/>
                    <label className="label">Description:</label>
                    <input type="text" value={description}
                           onChange={e => setDescription(e.target.value)}
                           className="input"/>
                    <label className="lable">Startdatum:</label>
                    <input type="text" value={startDate}
                           onChange={e => setStartDate(e.target.value)} className="input"/>
                    <label className="label">Enddatum:</label>
                    <input type="text" value={endDate}
                           onChange={e => setEndDate(e.target.value)} className="input"/>
                    <label className="label">Status:</label>
                </div>
            </form>
            <form className="status-options">
                <select value={status} className="status-options" onChange={e => setStatus(e.target.value)}>
                    <option value="todo" className="input">ToDo</option>
                    <option value="doing" className="input">Doing</option>
                    <option value="done" className="input">Done</option>
                </select>
            </form>
            <div className="button-container">
                <Link to="/home">
                    <DefaultButton buttonText="Cancel"></DefaultButton>
                </Link>
                <Link to="/home">
                    <DefaultButton buttonText="Submit" onClick={(event) => handleSubmit(event)}/>
                </Link>
            </div>
            <div className="error-message">
                <label className="error">{error}</label>
            </div>
        </div>

    )
}

export default TodoForm;
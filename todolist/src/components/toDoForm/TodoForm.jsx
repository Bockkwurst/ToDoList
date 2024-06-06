import React from "react";
import axios from "axios";
import ToDoForm from "./todoform.css";
import {Link, useNavigate} from "react-router-dom";
import DefaultButton from "../defaultButton/DefaultButton.jsx";

const TodoForm = ({darkMode}) => {

    const toDoFormContainerClass = darkMode ? "todo-form-container dark-mode" : "todo-form-container light-mode";

    const navigate = useNavigate();

    const [id, setId] = React.useState("");
    const [userId, setUserId] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");
    const [status, setStatus] = React.useState("");

    const [error, setError] = React.useState(null);

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/todo/')
            if (response.data) {

                navigate('/todo')
            }
        } catch (error) {
            console.log('Save failed:', error)
            setError('Save failed');
        }
    }

    return (
        <div className={toDoFormContainerClass}>
            <div className="todo-form-container">
                <form>
                    <input type="hidden" value={id}/>
                    <input type="hidden" value={userId}/>
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
                    <ul>
                        <li>
                            <input type="radio" value={status}
                                   onChange={e => setStatus(e.target.value)} className="input"/>
                        </li>
                        <li>
                            <input type="radio" value={status}
                                   onChange={e => setStatus(e.target.value)} className="input"/>
                        </li>
                        <li>
                            <input type="radio" value={status}
                                   onChange={e => setStatus(e.target.value)} className="input"/>
                        </li>
                    </ul>
                </form>
            </div>
            <div className="button-container">
                <Link to="/home">
                    <DefaultButton buttonText="Cancel"></DefaultButton>
                </Link>
                <Link to="/todo/">
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
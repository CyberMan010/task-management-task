import React, { useState } from "react";
import InputCustom from "./ui/custominput";

function Myform() {
    const [taskName, setTaskName] = useState("");
    const [dueDate, setDueDate] = useState("");


    const handleInputChange = (value) => {
        setTaskName(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.length >= 3) {
            alert(`Your task (${taskName}) was submitted! `);
        } else {
            alert("Please ensure Task Name meets the validation criteria.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Task Form</h2>
            <InputCustom
                name="Task Name"
                placeholder="Enter task name"
                required
                minLength={3}
                onInputChange={handleInputChange}
            />
            <button type="submit" disabled={taskName.length < 3}>
                Submit
            </button>
        </form>
    );
}

export default Myform;

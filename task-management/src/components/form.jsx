import React, { useState } from "react";
import InputCustom from "./ui/custominput";

function Myform() {
    const [taskName, setTaskName] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!taskName || taskName.length < 3) {
            alert("Please provide a valid task name (at least 3 characters).");
            return;
        }

        if (!dueDate || new Date(dueDate) < new Date()) {
            alert("Please provide a valid due date that is not in the past.");
            return;
        }

        if (!priority) {
            alert("Please select a priority.");
            return;
        }

        alert(
            `Task Submitted:\nTask Name: ${taskName}\nDue Date: ${dueDate}\nPriority: ${priority}\nDescription: ${description}`
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a New Task</h2>
            <InputCustom
                name="Task Name"
                placeholder="Enter task name"
                required
                minLength={3}
                onInputChange={setTaskName}
            />
            <InputCustom
                name="Due Date"
                type="date"
                required
                onInputChange={setDueDate}
            />
            <InputCustom
                name="Priority"
                type="select"
                required
                options={["Low", "Medium", "High"]}
                onInputChange={setPriority}
            />
            <InputCustom
                name="Description"
                placeholder="Enter description (optional)"
                maxLength={200}
                onInputChange={setDescription}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Myform;

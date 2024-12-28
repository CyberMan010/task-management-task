import React, { useState } from "react";

function InputCustom({type="text", name, placeholder, required, minLength, onInputChange }) {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);

        // Validate input
        if (required && inputValue.trim() === "") {
            setError(`${name} is required`);
        } else if (minLength && inputValue.length < minLength) {
            setError(`${name} must be at least ${minLength} characters`);
        }
         // Validation for due date
         else if (type === "date" && new Date(inputValue) < new Date()) {
            setError(`${name} cannot be in the past`);
        } else {
            setError("");
        }

        // Pass the input value to the parent form
        onInputChange(inputValue);
    };

    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                style={{
                    border: error ? "1px solid red" : "1px solid #ccc",
                    padding: "0.5em",
                }}
            />
            {error && <p style={{ color: "red", fontSize: "0.8em" }}>{error}</p>}
        </div>
    );
}

export default InputCustom;

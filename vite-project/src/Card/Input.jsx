import React from "react";
import "./Card.css";

const Input = () => {
    const [inputValue, setInputValue] = React.useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="card input-card">
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Escribe algo" />
            <p>{inputValue}</p>
        </div>
    );
}

export default Input;
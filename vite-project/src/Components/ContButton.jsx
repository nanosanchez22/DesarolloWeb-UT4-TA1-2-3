import React, { useEffect } from "react";

const ContButton = () => {
    const [count, setCount] = React.useState(0);

    const add = () => { setCount(count + 1); };
    const subtract = () => { setCount(count - 1) };

    useEffect(() => {
        document.title = `Count: ${count}`;
        
    }, [count]);

    

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
        </div>
    );
};

export default ContButton;
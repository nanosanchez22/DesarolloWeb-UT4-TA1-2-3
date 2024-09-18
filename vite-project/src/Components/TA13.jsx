import React, { useContext } from "react";
import { UserContext } from "../Components/TA12Context";

const TA13 = () => {
    const { user, setUser, saveUser, savedUsers } = useContext(UserContext);

    return (
        <>
            <input 
                type="text" 
                value={user} 
                onChange={(e) => setUser(e.target.value)} 
            />
            <button onClick={saveUser}>Guardar</button>
            <h1>{user}</h1>
            <ul>
                {savedUsers.map((savedUser, index) => (
                    <li key={index}>{savedUser}</li>
                ))}
            </ul>
        </>
    );
};

export default TA13;
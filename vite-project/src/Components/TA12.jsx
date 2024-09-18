import React, {useContext} from "react";
import {UserContext} from "../Components/TA12Context"; 



const TA12 = () => {
    const {user , setUser} = useContext(UserContext);



    return (
        <>
            <input type="text" 
            value={user} 
            onChange={(e) => setUser(e.target.value)} 
            />
            <button onClick={() => setUser(user)}>Guardar</button>
            <h1>{user}</h1>
                  
            
        </>
    );
}

export default TA12;
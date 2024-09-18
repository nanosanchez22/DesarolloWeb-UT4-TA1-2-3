import React, { useContext } from "react";
import {ThemeContext} from "../Components/TA12Context"; 
const TA14 = () => {

    const {darkMode, setDarkMode} = useContext(ThemeContext);



    return (
        <>
            <button className={darkMode? 'darkMode' : 'lightMode'} onClick={() => setDarkMode(!darkMode)}> 
                {darkMode ? 'Modo oscuro' : 'Modo claro'}
            </button>            
        </>
    );
}

export default TA14;
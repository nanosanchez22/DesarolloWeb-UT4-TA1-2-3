import React, { useContext } from "react";
import {LangContext} from "../Components/TA12Context"; 

const TA15 = () => {

    const {lang, setLang} = useContext(LangContext);

    const changeLang = () => { 
        setLang(lang === "es" ? "en" : "es");
    }

    return (
        <>
            <button onClick={changeLang}>Cambiar idioma</button>
            {/* <button onClick={() => setLang("es")}>Español</button>
            <button onClick={() => setLang("en")}>Inglés</button> */}
            <h1>{lang}</h1>
        </>
    );
}

export default TA15;
import React, { createContext, useState } from "react";

export const UserContext = createContext();
export const ThemeContext = createContext();
export const LangContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [savedUsers, setSavedUsers] = useState([]);

    const saveUser = () => {
        setSavedUsers([...savedUsers, user]);
    };

    return (
        <UserContext.Provider value={{ user, setUser, saveUser, savedUsers }}>
            {children}
        </UserContext.Provider>
    );
};

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState("es");
    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    );
}
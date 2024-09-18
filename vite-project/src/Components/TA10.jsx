import React, { useEffect } from "react";

const TA10 = () => {
    const [user, setUser] = React.useState('');
    const [mail, setMail] = React.useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => {
            setUser(data.name);
            setMail(data.email);
        })
        .catch(error => console.log(error));
    }, []);


    return(
        <>
            <h2>Usuario: {user} </h2>
            <h2>Mail: {mail}</h2>
        
        
        
        </>
    );
}

export default TA10;
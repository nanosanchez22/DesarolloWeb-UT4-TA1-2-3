import React from "react";

const TA11 = () => {
//temporizador
    const [time, setTime] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <>
            <h1>{time}</h1>
      
        </>
    );
}

export default TA11;
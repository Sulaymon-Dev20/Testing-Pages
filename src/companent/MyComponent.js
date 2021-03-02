import React from 'react';

const Time = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setSecond] = React.useState(time);
    return (
        <>
            <h1>{time}</h1>
        </>
    );
};
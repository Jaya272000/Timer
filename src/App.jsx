import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import Control from './components/Control';
import './App.css';

const App = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setTime(0);
        setIsRunning(false);
    };

    return (
        <div className="app">
            <h1>React Timer</h1>
            <Timer time={time} />
            <Control
                onStart={handleStart}
                onStop={handleStop}
                onReset={handleReset}
            />
        </div>
    );
};

export default App;

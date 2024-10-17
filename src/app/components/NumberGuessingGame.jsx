"use client";
import React, { useState, useEffect } from 'react';

const NumberGuessingGame = () => {
    const [randomNumber, setRandomNumber] = useState(null);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [attempts, setAttempts] = useState(0);

    useEffect(() => {
        generateRandomNumber();
    }, []);

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
        setRandomNumber(randomNum);
    };

    const handleGuessChange = (event) => {
        setGuess(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const numericGuess = parseInt(guess, 10);
        setAttempts((prevAttempts) => prevAttempts + 1);

        if (numericGuess === randomNumber) {
            setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
        } else if (numericGuess < randomNumber) {
            setMessage('Too low! Try again.');
        } else {
            setMessage('Too high! Try again.');
        }

        setGuess('');
    };

    const handleRestart = () => {
        generateRandomNumber();
        setAttempts(0);
        setMessage('');
        setGuess('');
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Number Guessing Game</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-4">
                <input
                    type="number"
                    value={guess}
                    onChange={handleGuessChange}
                    className="border border-gray-300 rounded p-2"
                    placeholder="Enter your guess (1-100)"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2 mt-2">
                    Submit Guess
                </button>
            </form>
            <p className="mt-4">{message}</p>
            <button onClick={handleRestart} className="bg-green-500 text-white rounded px-4 py-2 mt-2">
                Restart Game
            </button>
        </div>
    );
};

export default NumberGuessingGame;
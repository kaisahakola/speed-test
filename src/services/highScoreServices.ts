import { database } from '../config/firebase.ts';
import { ref, set, get } from "firebase/database";
import React from "react";

const saveHighScore = (score: number) => {
    const highScoreRef = ref(database, 'highScore');
    set(highScoreRef, score)
        .catch((err) => {
            console.error("Failed to save high score: ", err);
        });
}

const getHighScore = (
    setHighScore: React.Dispatch<React.SetStateAction<number>>,
    setDisplayHighScore: React.Dispatch<React.SetStateAction<number>>,
) => {
    const highScoreRef = ref(database, 'highScore');
    get(highScoreRef).then((data) => {
        if(data.exists()) {
            const value = data.val();
            setHighScore(value);
            setDisplayHighScore(value);
        } else {
            console.log("No high score found");
        }
    }).catch((err) => {
        console.error("Error fetching high score: ", err);
    })

}

const resetHighScore = (
    event: KeyboardEvent,
    setHighScore: React.Dispatch<React.SetStateAction<number>>,
    setDisplayHighScore: React.Dispatch<React.SetStateAction<number>>,
) => {
    if (event.shiftKey && event.ctrlKey && event.key.toLowerCase() === 'r') {
        const highScoreRef = ref(database, 'highScore');
        set(highScoreRef, 0)
            .then(() => {
                console.log("High score reset to 0");
                setHighScore(0);
                setDisplayHighScore(0);
            })
            .catch((err) => {
                console.error("Error to reset high score: ", err);
            })
    }
}

export { saveHighScore, getHighScore, resetHighScore };

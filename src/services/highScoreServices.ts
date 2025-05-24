import { database } from '../config/firebase.ts';
import React from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";

const saveHighScore = async (score: number) => {
    const highScoreDocRef = doc(database, 'scores', 'highScore');
    try {
        await setDoc(highScoreDocRef, { value: score });
    } catch (err) {
        console.error("Failed to save high score: ", err);
    }
}

const getHighScore = async (
    setHighScore: React.Dispatch<React.SetStateAction<number>>,
    setDisplayHighScore: React.Dispatch<React.SetStateAction<number>>,
) => {
    const highScoreDocRef = doc(database, 'scores', 'highScore');
    try {
        const docSnap = await getDoc(highScoreDocRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            setHighScore(data.value || 0);
            setDisplayHighScore(data.value || 0);
        } else {
            console.log("No high score found");
        }
    } catch (err) {
        console.error("Error fetching high score: ", err);
    }

}

const resetHighScore = async (
    event: KeyboardEvent,
    setHighScore: React.Dispatch<React.SetStateAction<number>>,
    setDisplayHighScore: React.Dispatch<React.SetStateAction<number>>,
) => {
    if (event.shiftKey && event.ctrlKey && event.key.toLowerCase() === 'r') {
        const highScoreDocRef = doc(database, 'scores', 'highScore');
        try {
            await setDoc(highScoreDocRef, { value: 0 });
            console.log("High score reset to 0");
            setHighScore(0);
            setDisplayHighScore(0);
        } catch (err) {
            console.error("Error to reset high score: ", err);
        }
    }
}

export { saveHighScore, getHighScore, resetHighScore };

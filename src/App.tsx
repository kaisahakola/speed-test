import './App.css'
import CircleContainer from "./components/CircleContainer/CircleContainer.tsx";
import Header from "./components/Header/Header.tsx";
import HighScore from "./components/HighScore/HighScore.tsx";
import Score from "./components/Score/Score.tsx";
import StartGame from "./components/StartGame/StartGame.tsx";
import GameEnded from "./components/GameEnded/GameEnded.tsx";
import {useEffect, useState} from "react";

function App() {
    const [running, setRunning] = useState<boolean>(false);
    const [endGame, setEndGame] = useState<boolean>(false);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "q") {
                setRunning(false);
                setEndGame(true);
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

  return (
    <>
        <StartGame onStartGame={() => setRunning(true)} />
        <GameEnded onStartNewGame={() => {
            setRunning(true);
            setEndGame(false);
        }} endGame={endGame} />
        <Header />
        <div id="scores">
            <HighScore />
            <Score />
        </div>
        <CircleContainer running={running} />
    </>
  )
}

export default App

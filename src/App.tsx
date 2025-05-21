import './App.css'
import CircleContainer from "./components/CircleContainer/CircleContainer.tsx";
import Header from "./components/Header/Header.tsx";
import HighScore from "./components/HighScore/HighScore.tsx";
import Score from "./components/Score/Score.tsx";
import StartGame from "./components/StartGame/StartGame.tsx";
import GameEnded from "./components/GameEnded/GameEnded.tsx";
import {useState} from "react";

function App() {
    const [running, setRunning] = useState<boolean>(false);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);

    const incrementScore = () => {
        setScore(score + 1);
    }

  return (
    <>
        <StartGame onStartGame={() => setRunning(true)} />
        <GameEnded onStartNewGame={() => {
            setRunning(true);
            setGameOver(false);
            setScore(0)
        }} gameOver={gameOver} finalScore={score} />
        <Header />
        <div id="scores">
            <HighScore />
            <Score score={score} />
        </div>
        <CircleContainer
            running={running}
            incrementScore={incrementScore}
            onGameOver={() =>{
                setGameOver(true)
                setRunning(false)
            }} />
    </>
  )
}

export default App

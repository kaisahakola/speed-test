import './App.css'
import CircleContainer from "./components/CircleContainer/CircleContainer.tsx";
import Header from "./components/Header/Header.tsx";
import ScoreContainer from "./components/Scoring/ScoreContainer/ScoreContainer.tsx";
import StartGamePopup from "./components/Popups/StartGamePopup/StartGamePopup.tsx";
import GameOverPopup from "./components/Popups/GameOverPopup/GameOverPopup.tsx";
import {useState} from "react";

function App() {
    const [running, setRunning] = useState<boolean>(false);
    const [showGameOverPopup, setShowGameOverPopup] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);

    const getIntervalTime = (score: number): number => {
        if (score > 5 && score <= 10) return 900;
        if (score > 10 && score <= 20) return 750;
        if (score > 20 && score <= 30) return 600;
        if (score > 30 && score <= 40) return 500;
        if (score > 40 && score <= 60) return 450;
        if (score > 60) return 400;
        return 1500;
    }
    const intervalTime = getIntervalTime(score);

    const incrementScore = () => {
        setScore(score + 1);
    }

    const handleStartNewGame = () => {
        setRunning(true);
        setShowGameOverPopup(false);
        setScore(0);
    }

    const handleGameOver = () => {
        setShowGameOverPopup(true);
        setRunning(false);
    }

  return (
      <>
          <StartGamePopup onStartGame={() => setRunning(true)}/>
          <GameOverPopup
              onStartNewGame={handleStartNewGame}
              showGameOverPopup={showGameOverPopup}
              finalScore={score}/>
          <Header/>
          <CircleContainer
              running={running}
              incrementScore={incrementScore}
              onGameOver={handleGameOver}
              intervalTime={intervalTime}/>
          <ScoreContainer score={score} />
      </>
  )
}

export default App

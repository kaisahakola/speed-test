import './App.css'
import CircleContainer from "./components/CircleContainer/CircleContainer.tsx";
import Header from "./components/Header/Header.tsx";
import ScoreContainer from "./components/Scoring/ScoreContainer/ScoreContainer.tsx";
import StartGamePopup from "./components/Popups/StartGamePopup/StartGamePopup.tsx";
import GameOverPopup from "./components/Popups/GameOverPopup/GameOverPopup.tsx";
import {useState, useEffect, useRef} from "react";
import { incrementScore } from "./scripts/incrementScore.ts";
import { getIntervalTime } from "./scripts/getIntervalTime.ts";
import { getHighScore, saveHighScore, resetHighScore } from './services/highScoreServices.ts';

function App() {
    const [running, setRunning] = useState<boolean>(false);
    const [showGameOverPopup, setShowGameOverPopup] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [finalScore, setFinalScore] = useState<number>(0);
    const [highScore, setHighScore] = useState<number>(0);
    const [displayHighScore, setDisplayHighScore] = useState<number>(0);
    const [showNewHighScoreText, setShowNewHighScoreText] = useState<boolean>(false);
    const intervalTime = getIntervalTime(score);
    const resetActiveIndexRef = useRef<() => void>(() => {});

    useEffect(() => {
        void getHighScore(setHighScore, setDisplayHighScore);

        const handleReset = async (event: KeyboardEvent) => {
            await resetHighScore(event, setHighScore, setDisplayHighScore)
        }

        window.addEventListener('keydown', handleReset);

        return () => {
            window.removeEventListener('keydown', handleReset);
        }
    }, [])

    const handleStartNewGame = () => {
        setRunning(true);
        setShowGameOverPopup(false);
        setScore(0);
    }

    const handleGameOver = async () => {
        setShowGameOverPopup(true);
        setRunning(false);
        resetActiveIndexRef.current();
        setFinalScore(score);

        if (score > highScore) {
            setHighScore(score);
            await saveHighScore(score);
            setShowNewHighScoreText(true);
        } else {
            setShowNewHighScoreText(false);
        }
    }

  return (
      <>
          <StartGamePopup onStartGame={() => setRunning(true)}/>
          <GameOverPopup
              onStartNewGame={handleStartNewGame}
              showGameOverPopup={showGameOverPopup}
              finalScore={finalScore}
              highScore={highScore}
              showNewHighScoreText={showNewHighScoreText}
          />
          <Header/>
          <CircleContainer
              running={running}
              incrementScore={() => incrementScore(setScore, setDisplayHighScore, score, displayHighScore)}
              onGameOver={handleGameOver}
              intervalTime={intervalTime}
              resetActiveIndexRef={resetActiveIndexRef}
          />
          <ScoreContainer score={score} highScore={displayHighScore} />
      </>
  )
}

export default App

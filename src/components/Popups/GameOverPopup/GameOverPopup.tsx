import PopUpWindow from "../PopUpWindow/PopUpWindow.tsx";
import Instructions from "../../Instructions/Instructions.tsx";
import '../InnerPopup.css';

interface GameEndedProps {
    onStartNewGame: () => void;
    showGameOverPopup: boolean;
    finalScore: number;
    highScore: number;
    showNewHighScoreText: boolean;
}

function GameOverPopup({ onStartNewGame, showGameOverPopup, finalScore, highScore, showNewHighScoreText }: GameEndedProps) {

    return (
        <PopUpWindow trigger={showGameOverPopup}>
            <div className="inner-popup">
                <h3>Game over!</h3>
                {showNewHighScoreText ? (
                    <div>
                        <p>You made a new high score! </p>
                        <p>Your score: {highScore}</p>
                    </div>
                ) : (
                    <p>Your score: {finalScore}</p>
                )}
                <button onClick={onStartNewGame}>Play again</button>
                <Instructions />
            </div>
        </PopUpWindow>
    )
}

export default GameOverPopup;

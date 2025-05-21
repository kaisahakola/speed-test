import PopUpWindow from "../PopUpWindow/PopUpWindow.tsx";

interface GameEndedProps {
    onStartNewGame: () => void;
    showGameOverPopup: boolean;
    finalScore: number;
}

function GameOverPopup({ onStartNewGame, showGameOverPopup, finalScore }: GameEndedProps) {

    return (
        <PopUpWindow trigger={showGameOverPopup}>
            <div className="game-ended">
                <h3>Game over!</h3>
                <p>Your score: {finalScore}</p>
                <button onClick={onStartNewGame}>Play again</button>
            </div>
        </PopUpWindow>
    )
}

export default GameOverPopup;

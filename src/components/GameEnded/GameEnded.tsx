import PopUpWindow from "../PopUpWindow/PopUpWindow.tsx";

interface GameEndedProps {
    onStartNewGame: () => void;
    gameOver: boolean;
    finalScore: number;
}

function GameEnded({ onStartNewGame, gameOver, finalScore }: GameEndedProps) {

    return (
        <PopUpWindow trigger={gameOver}>
            <div className="game-ended">
                <h3>Game over!</h3>
                <p>Your score: {finalScore}</p>
                <button onClick={onStartNewGame}>Play again</button>
            </div>
        </PopUpWindow>
    )
}

export default GameEnded;

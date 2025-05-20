import PopUpWindow from "../PopUpWindow/PopUpWindow.tsx";

interface GameEndedProps {
    onStartNewGame: () => void;
    endGame: boolean;
}

function GameEnded({ onStartNewGame, endGame }: GameEndedProps) {

    return (
        <PopUpWindow trigger={endGame}>
            <div className="game-ended">
                <h3>Game ended!</h3>
                <p>Your score: 234234</p>
                <button onClick={onStartNewGame}>Play again</button>
            </div>
        </PopUpWindow>
    )
}

export default GameEnded;

import PopUpWindow from "../PopUpWindow/PopUpWindow.tsx";
import {useState} from "react";

interface StartGameProps {
    onStartGame: () => void;
}

function StartGamePopup({ onStartGame }: StartGameProps) {
    const [trigger, setTrigger] = useState<boolean>(true);

    const startGame = () => {
        setTrigger(false);
        onStartGame();
    }

    return (
        <PopUpWindow trigger={trigger}>
            <div className="start-game">
                <h3>Welcome to The Speed Test game!</h3>
                <button onClick={() => startGame()}>Start Game</button>
            </div>
        </PopUpWindow>
    )
}

export default StartGamePopup;

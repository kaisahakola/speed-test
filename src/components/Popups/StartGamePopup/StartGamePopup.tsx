import PopUpWindow from "../PopUpWindow/PopUpWindow.tsx";
import {useState} from "react";
import '../InnerPopup.css';

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
            <div className="inner-popup">
                <h3>Welcome to The Speed Test game!</h3>
                <br></br>
                <button onClick={() => startGame()}>Start Game</button>
            </div>
        </PopUpWindow>
    )
}

export default StartGamePopup;

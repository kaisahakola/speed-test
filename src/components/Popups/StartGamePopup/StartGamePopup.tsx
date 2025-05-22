import PopUpWindow from "../PopUpWindow/PopUpWindow.tsx";
import {useState} from "react";
import '../InnerPopup.css';
import logo from "../../../assets/speed-test-logo.png";

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
                <h3>Welcome to the Speed Test Game!</h3>
                <img alt="game logo" src={logo} width="100" height="100" />
                <button onClick={() => startGame()}>Start Game</button>
            </div>
        </PopUpWindow>
    )
}

export default StartGamePopup;

import './HighScore.css'
import {useState} from "react";

function HighScore() {
    const [highScore, setHighScore] = useState(0);

    const HandleHighScore = () => {
        setHighScore(highScore + 1);
    }

    return (
        <div>
            <div>High Score: {highScore}</div>
            <button onClick={HandleHighScore}>click</button>
        </div>
    )
}

export default HighScore

import './Score.css'
import {useState} from "react";

function Score() {
    const [score, setScore] = useState(0);

    const HandleScore = () => {
        setScore(score + 1);
    }

    return (
        <div>
            <div>Your score: {score}</div>
            <button onClick={HandleScore}>click</button>
        </div>
    )
}

export default Score;

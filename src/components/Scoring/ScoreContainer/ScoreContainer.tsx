import Score from "../Score/Score.tsx";
import HighScore from "../HighScore/HighScore.tsx";
import './ScoreContainer.css';

interface ScoreContainerProps {
    score: number;
    highScore: number;
}

function ScoreContainer({ score, highScore }: ScoreContainerProps) {
    return (
        <div id='score-container'>
            <Score score={score} />
            <HighScore highScore={highScore} />
        </div>
    )
}

export default ScoreContainer;

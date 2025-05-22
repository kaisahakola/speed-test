import Score from "../Score/Score.tsx";
import HighScore from "../HighScore/HighScore.tsx";
import './ScoreContainer.css';

interface ScoreContainerProps {
    score: number;
}

function ScoreContainer({ score }: ScoreContainerProps) {
    return (
        <div id='score-container'>
            <Score score={score} />
            <HighScore />
        </div>
    )
}

export default ScoreContainer;

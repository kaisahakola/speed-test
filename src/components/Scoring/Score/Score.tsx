import '../ScoreDisplay.css'

interface ScoreProps {
    score: number;
}

function Score({ score }: ScoreProps ) {
    return (
        <div className="score-display">
            <div>Your score: {score}</div>
        </div>
    )
}

export default Score;

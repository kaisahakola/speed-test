import '../ScoreDisplay.css'

interface HighScoreProps {
    highScore: number;
}

function HighScore({ highScore }: HighScoreProps) {
    return (
        <div className="score-display">
            <div>High Score: {highScore}</div>
        </div>
    )
}

export default HighScore

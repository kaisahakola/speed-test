import './Score.css'

interface ScoreProps {
    score: number;
}

function Score({ score }: ScoreProps ) {
    return (
        <div>
            <div>Your score: {score}</div>
        </div>
    )
}

export default Score;

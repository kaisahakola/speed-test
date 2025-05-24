export const incrementScore = (
    setScore: React.Dispatch<React.SetStateAction<number>>,
    setDisplayHighScore: React.Dispatch<React.SetStateAction<number>>,
    score: number,
    displayHighScore: number
) => {
    setScore(score + 1);
    if (score >= displayHighScore) {
        setDisplayHighScore(score + 1);
    }
}

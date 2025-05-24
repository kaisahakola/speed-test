export const getIntervalTime = (score: number): number => {
    if (score > 5 && score <= 10) return 900;
    if (score > 10 && score <= 20) return 750;
    if (score > 20 && score <= 30) return 600;
    if (score > 30 && score <= 40) return 500;
    if (score > 40 && score <= 60) return 450;
    if (score > 60) return 400;
    return 1500;
}

import './CircleContainer.css'
import Circle from "../Circle/Circle.tsx";
import { useEffect, useRef, useState} from "react";
import type {Colors} from "../../types/colors.ts";

interface CircleContainerProps {
    running: boolean;
    incrementScore: () => void;
    onGameOver: () => void;
    intervalTime: number;
}

function CircleContainer({ running, incrementScore, onGameOver, intervalTime }: CircleContainerProps) {
    const activeIndexRef = useRef<number>(-1);
    const previousIndex = useRef<number>(-1);
    const interval = useRef<number | null>(null);
    const hasScored = useRef<boolean>(false)
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const activeCircleIndex = {
        red: 0,
        blue: 1,
        green: 2,
        yellow: 3
    }

    useEffect(() => {
        const keyMap = {
            red: 'a',
            blue: 's',
            green: 'd',
            yellow: 'f'
        }

        const indexToColor: Colors[] = ['red', 'blue', 'green', 'yellow'];

        const handleKeyPress = (event: KeyboardEvent) => {
            if (activeIndexRef.current === -1) return;

            const currentColor = indexToColor[activeIndexRef.current];
            const expectedKey = keyMap[currentColor];

            if (event.key.toLowerCase() === expectedKey) {
                if (!hasScored.current) {
                    incrementScore();
                    hasScored.current = true;
                }
            } else {
                onGameOver();
            }
        };

        if (running) {
            window.addEventListener("keydown", handleKeyPress);

            interval.current = setInterval(() => {
                if (!hasScored.current && activeIndexRef.current !== -1) {
                    onGameOver();
                    return;
                }

                let nextIndex;
                do {
                    nextIndex = Math.floor(Math.random() * 4);
                } while (nextIndex === previousIndex.current);

                setActiveIndex(nextIndex);
                activeIndexRef.current = nextIndex;
                previousIndex.current = nextIndex;
                hasScored.current = false;
            }, intervalTime)
        } else if (interval.current) {
            clearInterval(interval.current);
            interval.current = null;
            activeIndexRef.current = -1;
            setActiveIndex(-1);
        }

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [activeIndexRef, incrementScore, intervalTime, onGameOver, running])

    return (
        <div id="circle-container">
            <Circle
                color="red"
                opacity={activeIndex === activeCircleIndex.red ? 1 : 0.4}
                shadow={hasScored.current && activeIndex === activeCircleIndex.red
                    ? 'inset 10px 10px 10px #ae1515, inset -2px -3px #ae1515, 3px 10px 10px #6594C3FF'
                    : 'inset -5px -10px #7e2c2c, 5px 15px 10px #6594C3FF'}
            />
            <Circle
                color="blue"
                opacity={activeIndex === activeCircleIndex.blue ? 1 : 0.4}
                shadow={hasScored.current && activeIndex === activeCircleIndex.blue
                    ? 'inset 10px 10px 10px #1f1fa3, inset -2px -3px #1d1dc1, 3px 10px 10px #6594C3FF'
                    : 'inset -5px -10px #2b2b77, 5px 15px 10px #6594C3FF'}
            />
            <Circle
                color="green"
                opacity={activeIndex === activeCircleIndex.green ? 1 : 0.4}
                shadow={hasScored.current && activeIndex === activeCircleIndex.green
                    ? 'inset 10px 10px 10px #085508, inset -2px -3px #086008, 3px 10px 10px #6594C3FF'
                    : 'inset -5px -10px #0d490d, 5px 15px 10px #6594C3FF'}
            />
            <Circle
                color="yellow"
                opacity={activeIndex === activeCircleIndex.yellow ? 1 : 0.4}
                shadow={hasScored.current && activeIndex === activeCircleIndex.yellow
                    ? 'inset 10px 10px 10px #acac11, inset -2px -3px #acac11, 3px 10px 10px #6594C3FF'
                    : 'inset -5px -10px #8e8e09, 5px 15px 10px #6594C3FF'}
            />
        </div>
    )
}

export default CircleContainer;

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
    const interval = useRef<ReturnType<typeof setInterval> | null>(null);
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
                interval.current = null;
            }
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [activeIndexRef, incrementScore, intervalTime, onGameOver, running])

    return (
        <div id="circle-container">
            <Circle
                color={activeIndex === activeCircleIndex.red ? "red" : "#752727"}
                shadow={hasScored.current && activeIndex === activeCircleIndex.red
                    ? 'inset 10px 10px 10px #ae1515, inset -2px -3px #ae1515, 3px 10px 10px #9c9999'
                    : 'inset -5px -10px #7e2c2c, 5px 15px 10px #9c9999'}
            />
            <Circle
                color={activeIndex === activeCircleIndex.blue ? "#00d0ff" : "#012b37"}
                shadow={hasScored.current && activeIndex === activeCircleIndex.blue
                    ? 'inset 10px 10px 10px #176f7c, inset -2px -3px #003b4c, 3px 10px 10px #9c9999'
                    : 'inset -5px -10px #003b4c, 5px 15px 10px #9c9999'}
            />
            <Circle
                color={activeIndex === activeCircleIndex.green ? "#04e104" : "#053205"}
                shadow={hasScored.current && activeIndex === activeCircleIndex.green
                    ? 'inset 10px 10px 10px #1c851c, inset -2px -3px #086008, 3px 10px 10px #9c9999'
                    : 'inset -5px -10px #0d490d, 5px 15px 10px #9c9999'}
            />
            <Circle
                color={activeIndex === activeCircleIndex.yellow ? "yellow" : "#777709"}
                shadow={hasScored.current && activeIndex === activeCircleIndex.yellow
                    ? 'inset 10px 10px 10px #acac11, inset -2px -3px #acac11, 3px 10px 10px #9c9999'
                    : 'inset -5px -10px #8e8e09, 5px 15px 10px #9c9999'}
            />
        </div>
    )
}

export default CircleContainer;

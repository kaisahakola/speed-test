import './CircleContainer.css'
import Circle from "../Circle/Circle.tsx";
import { useEffect, useRef, useState} from "react";
import type {Colors} from "../../types/colors.ts";

interface CircleContainerProps {
    running: boolean;
    incrementScore: () => void;
    onGameOver: () => void;
}

function CircleContainer({ running, incrementScore, onGameOver }: CircleContainerProps) {
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
            }, 1500)
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
    }, [activeIndexRef, incrementScore, onGameOver, running])

    return (
        <div id="circle-container">
            <Circle color="red" opacity={activeIndex === activeCircleIndex.red ? 1 : 0.3} />
            <Circle color="blue" opacity={activeIndex === activeCircleIndex.blue ? 1 : 0.3} />
            <Circle color="green" opacity={activeIndex === activeCircleIndex.green ? 1 : 0.3} />
            <Circle color="yellow" opacity={activeIndex === activeCircleIndex.yellow ? 1 : 0.3} />
        </div>
    )
}

export default CircleContainer;

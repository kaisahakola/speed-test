import './CircleContainer.css'
import Circle from "../Circle/Circle.tsx";
import { useEffect, useRef, useState} from "react";

interface CircleContainerProps {
    running: boolean;
}

function CircleContainer({ running }: CircleContainerProps) {
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const previousIndex = useRef<number>(-1);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                let nextIndex;
                do {
                    nextIndex = Math.floor(Math.random() * 4);
                } while (nextIndex === previousIndex.current);

                setActiveIndex(nextIndex);
                previousIndex.current = nextIndex;
            }, 1500)
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [running])

    return (
        <div id="circle-container">
            <Circle color="red" opacity={activeIndex === 0 ? 1 : 0.3} />
            <Circle color="blue" opacity={activeIndex === 1 ? 1 : 0.3} />
            <Circle color="green" opacity={activeIndex === 2 ? 1 : 0.3} />
            <Circle color="yellow" opacity={activeIndex === 3 ? 1 : 0.3} />
        </div>
    )
}

export default CircleContainer;

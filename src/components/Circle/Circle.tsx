import './Circle.css'
import type {Colors} from "../../types/colors.ts";

type CircleProps = {
    color: Colors;
    opacity: number;
}

function Circle({ color, opacity }: CircleProps) {
    return (
        <div style={{backgroundColor: color, opacity: opacity}} id="circle-wrapper"></div>
    )
}

export default Circle;
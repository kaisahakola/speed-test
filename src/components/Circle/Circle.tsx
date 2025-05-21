import './Circle.css'
import type {Colors} from "../../types/colors.ts";

type CircleProps = {
    color: Colors;
    opacity: number;
    shadow: string;
}

function Circle({ color, opacity, shadow }: CircleProps) {
    return (
        <div style={{backgroundColor: color, opacity: opacity, boxShadow: shadow}} id="circle-wrapper"></div>
    )
}

export default Circle;
import './Circle.css'
import type {Colors} from "../../types/colors.ts";

type CircleProps = {
    color: Colors;
}

function Circle({ color }: CircleProps) {
    return (
        <div style={{backgroundColor: color}} id="circle-wrapper"></div>
    )
}

export default Circle;
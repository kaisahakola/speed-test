import './CircleContainer.css'
import Circle from "../Circle/Circle.tsx";

function CircleContainer() {
    return (
        <div id="circle-container">
            <Circle color="red" />
            <Circle color="blue" />
            <Circle color="green" />
            <Circle color="yellow" />
        </div>
    )
}

export default CircleContainer;

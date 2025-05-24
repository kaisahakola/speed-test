import './Circle.css'

type CircleProps = {
    color: string;
    shadow: string;
    pressKey: string;
}

function Circle({ color, shadow, pressKey }: CircleProps) {
    return (
        <div style={{backgroundColor: color, boxShadow: shadow}} id="circle-wrapper">
            <p>{pressKey}</p>
        </div>
    )
}

export default Circle;
import './Circle.css'

type CircleProps = {
    color: string;
    shadow: string;
}

function Circle({ color, shadow }: CircleProps) {
    return (
        <div style={{backgroundColor: color, boxShadow: shadow}} id="circle-wrapper"></div>
    )
}

export default Circle;
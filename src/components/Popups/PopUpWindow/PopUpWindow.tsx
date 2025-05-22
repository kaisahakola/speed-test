import './PopUpWindow.css'
import {type ReactNode} from "react";

interface PopUpWindowProps {
    trigger: boolean;
    children: ReactNode;
}

function PopUpWindow({ trigger, children }: PopUpWindowProps) {
    return trigger ? (
        <div id="pop-up-wrapper">
            <div id="pop-up-container">
                { children }
            </div>
        </div>
    ) : null;
}

export default PopUpWindow;

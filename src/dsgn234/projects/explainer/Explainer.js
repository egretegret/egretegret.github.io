import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import "./explainer.css";
import background from "./paper.png";

function Explainer() {

    const [count, setCount] = useState(1);
    const instructions = ["Gently boil water in a large pot. Then salt the water.", 
    "Crack your eggs into small individual cups, so they're ready to pour into the water.", 
    "Using a spoon, begin stirring the water in a large, circular motion (like a tornado).", 
    "Once the tornado is really moving, add the eggs. The motion of the water will wrap the egg white around itself so the egg stays together as it cooks.", 
    "Cook the eggs for 2½ to 3 minutes, then remove with a slotted spoon."]
    const cardAngles = [.5, -.6, .9, -.4, .1]

    const counter = () => {
        if (count < 5) {
            setCount(count + 1)
        } else {
            setCount(1)
        }
    }

    return (
        <div class="explainer">
            <h1 class="title">how to poach an egg</h1>
            <div class="counter">{count}/5</div>
            <div class="cardInstruct">click the card below for steps!</div>
            <img class="tape" src="./explainer/tape.png" alt="washi tape" />
                <div class="text-container" onClick={counter} 
                style={{ backgroundImage: `url(${background})`, transform: `rotate(${cardAngles[count-1]}deg)`}}>
                    <div class="number">{count}</div>
                    <div class="instructions">
                        {instructions[count-1]}
                    </div>
                </div>
            <img class="bg topLeft" src="./explainer/pot.png" alt="pot" />
            <img class="bg bottomLeft" src="./explainer/spoon.png" alt="spoon" />
            <img class="bg bottomRight" src="./explainer/clipimage.png" alt="clipped paper for background decoration" />
            <img class="bg topRight" src="./explainer/egg.png" alt="cracked egg shells" />
        </div>
    )

}



export default Explainer;
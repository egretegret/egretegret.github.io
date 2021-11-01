import React, { useState } from 'react';
import "./svgExercise.css";

function SvgExercise() {

    return (
        <div class="svgexercise">
            <div class="svgexercise-container">
                <svg class="circle" expanded="true" height="150px" width="150px">
                    <circle cx="50%" cy="50%" r="35%" stroke="#ffb99c" stroke-width="3%" fill="none" />
                    <circle class="innerCircle" cx="50%" cy="50%" r="25%" fill="#ffab8f" />
                </svg>
                <svg class="circle" expanded="true" height="100px" width="100px">
                    <circle cx="50%" cy="50%" r="35%" stroke="#ffb99c" stroke-width="3%" fill="none" />
                    <circle class="innerCircle" cx="50%" cy="50%" r="25%" fill="#ffab8f" />
                </svg>
                <svg class="circle" expanded="true" height="150px" width="150px">
                    <circle cx="50%" cy="50%" r="35%" stroke="#ffb99c" stroke-width="3%" fill="none" />
                    <circle class="innerCircle" cx="50%" cy="50%" r="25%" fill="#ffab8f" />
                </svg>
            </div>
        </div>
    )

}



export default SvgExercise;
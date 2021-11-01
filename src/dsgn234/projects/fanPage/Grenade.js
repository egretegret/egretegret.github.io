import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

function Grenade(props) {

    return (
        <div class="grenade">
            <img src="../../../home.svg" alt="home button" onClick={()=>props.setDisplay(0)}/>
            <br/>
            displaying la soiree dans grenade
        </div>
    );

}



export default Grenade;
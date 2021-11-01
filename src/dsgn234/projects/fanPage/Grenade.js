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
             displaying la soiree dans grenade
             <div class="home-button" onClick={()=>props.setDisplay(0)}>home</div>
        </div>
    );

}



export default Grenade;
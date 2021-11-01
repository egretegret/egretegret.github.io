import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

function Jardins(props) {


    return (
        <div class="jardins">
             displaying jardins sous la pluie
             <div class="home-button" onClick={()=>props.setDisplay(0)}>home</div>
        </div>
    );

}



export default Jardins;
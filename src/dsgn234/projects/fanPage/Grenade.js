import React, { useState } from 'react';
import {
    Link,
} from "react-router-dom";
import "./grenade.css";

function Grenade(props) {

    return (
        <div class="grenade">
            <Link to={props.path}><img src="../../../home.svg" alt="home button"/></Link>
            <br/>
            displaying la soiree dans grenade
        </div>
    );

}



export default Grenade;
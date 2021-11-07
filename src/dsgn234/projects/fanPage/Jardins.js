import React, { useState } from 'react';
import {
    Link,
} from "react-router-dom";
import "./jardins.css";
import jardins from "./assets/jardins.mp3";

function Jardins(props) {


    return (
        <div class="jardins">
            displaying jardins sous la pluie
            <Link to={props.path}><img src="../../../home.svg" alt="home button" /></Link>
        </div>
    );

}



export default Jardins;
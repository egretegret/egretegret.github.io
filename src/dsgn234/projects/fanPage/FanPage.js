import React, { useState } from 'react';

import Pagodes from './Pagodes';
import Grenade from './Grenade';
import Jardins from './Jardins';
import './fanPage.css';

function FanPage() {

    const [display, setDisplay] = useState(0);

    if (display === 1) {
        // return <Pagodes setDisplay={setDisplay}/>;
        return (
        <div class="fan-page pagodes">
            <div class="button-container">
                <div class="button-pagodes active" onClick={() => setDisplay(1)}>I</div>
                <div class="button-grenade inactive" onClick={() => setDisplay(2)}>II</div>
                <div class="button-jardin inactive" onClick={() => setDisplay(3)}>III</div>
            </div>
            <div class="text-container">
                <h2>Pagodes</h2>
                <button>enter</button>
                <h3>Delight your senses with pentatonic melodies</h3>
            </div>
        </div>);
    } else if (display === 2) {
        // return <Grenade setDisplay={setDisplay}/>;
        return (
        <div class="fan-page grenade">
            <div class="button-container">
                <div class="button-pagodes inactive" onClick={() => setDisplay(1)}>I</div>
                <div class="button-grenade active" onClick={() => setDisplay(2)}>II</div>
                <div class="button-jardin inactive" onClick={() => setDisplay(3)}>III</div>
            </div>
            <div class="text-container">
                <h2>La soirée dans Grenade</h2>
                <button>enter</button>
                <h3>Spend a vibrant evening in Grenada</h3>
            </div>
        </div>);
    } else if (display === 3) {
        // return <Jardins setDisplay={setDisplay}/>;
        return (
        <div class="fan-page jardin">
            <div class="button-container">
                <div class="button-pagodes inactive" onClick={() => setDisplay(1)}>I</div>
                <div class="button-grenade inactive" onClick={() => setDisplay(2)}>II</div>
                <div class="button-jardin active" onClick={() => setDisplay(3)}>III</div>
            </div>
            <div class="text-container">
                <h2>Jardins sous la pluie</h2>
                <button>enter</button>
                <h3>Enter a world of rain and nature.</h3>
            </div>
        </div>);
    } else {
        return (
            <div class="fan-page">
                <div class="button-container">
                    <div class="button-pagodes" onClick={() => setDisplay(1)}>I</div>
                    <div class="button-grenade" onClick={() => setDisplay(2)}>II</div>
                    <div class="button-jardin" onClick={() => setDisplay(3)}>III</div>
                </div>
                <div class="text-container">
                    <h2>Welcome to Debussy's Estampes</h2>
                    <h3>Choose your mood</h3>
                </div>
            </div>
        );
    }


}



export default FanPage;
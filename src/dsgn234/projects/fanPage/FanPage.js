import React, { useState } from 'react';

import Pagodes from './Pagodes';
import Grenade from './Grenade';
import Jardins from './Jardins';
import './fanPage.css';

function FanPage() {

    const [display, setDisplay] = useState(0);

    if (display === 1) {
        return <Pagodes setDisplay={setDisplay}/>;
    } else if (display === 2) {
        return <Grenade setDisplay={setDisplay}/>;
    } else if (display === 3) {
        return <Jardins setDisplay={setDisplay}/>;
    } else {
        return (
            <div class="fan-page">
                <div class="button-container">
                <div class="button-pagodes" onClick={() => setDisplay(1)}>pagodes</div>
                <div class="button-grenade" onClick={() => setDisplay(2)}>grenade</div>
                <div class="button-jardin" onClick={() => setDisplay(3)}>jardin</div>
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
import React, { useState } from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Pagodes from './Pagodes';
import Grenade from './Grenade';
import Jardins from './Jardins';
import './fanPage.css';

function FanPage() {

    document.title = "Fan Page";

    const [display, setDisplay] = useState(0);
    let { path, url } = useRouteMatch();

    if (display === 1) {
        return (
            <Switch>
                <Route exact path={path}>
                    <div class="fan-page pagodes">
                        <div class="button-container">
                            <div class="button-pagodes active" onClick={() => setDisplay(1)}>I</div>
                            <div class="button-grenade inactive" onClick={() => setDisplay(2)}>II</div>
                            <div class="button-jardins inactive" onClick={() => setDisplay(3)}>III</div>
                        </div>
                        <div class="text-container">
                            <h2>Pagodes</h2>
                            <Link to={`${url}/pagodes`}><button>enter</button></Link>
                            <h3>Delight your senses with pentatonic melodies</h3>
                        </div>
                    </div>
                </Route>
                <Route path={`${path}/pagodes`}>
                    <Pagodes path={path} />
                </Route>
            </Switch>
        );
    } else if (display === 2) {
        return (
            <Switch>
                <Route exact path={path}>
                    <div class="fan-page grenade">
                        <div class="button-container">
                            <div class="button-pagodes inactive" onClick={() => setDisplay(1)}>I</div>
                            <div class="button-grenade active" onClick={() => setDisplay(2)}>II</div>
                            <div class="button-jardins inactive" onClick={() => setDisplay(3)}>III</div>
                        </div>
                        <div class="text-container">
                            <h2>La soirée dans Grenade</h2>
                            <Link to={`${url}/grenade`}><button>enter</button></Link>
                            <h3>Spend a vibrant evening in Grenada</h3>
                        </div>
                    </div>
                </Route>
                <Route path={`${path}/grenade`}>
                    <Grenade path={path} />
                </Route>
            </Switch>
        );
    } else if (display === 3) {
        return (
            <Switch>
                <Route exact path={path}>
                    <div class="fan-page jardins">
                        <div class="button-container">
                            <div class="button-pagodes inactive" onClick={() => setDisplay(1)}>I</div>
                            <div class="button-grenade inactive" onClick={() => setDisplay(2)}>II</div>
                            <div class="button-jardins active" onClick={() => setDisplay(3)}>III</div>
                        </div>
                        <div class="text-container">
                            <h2>Jardins sous la pluie</h2>
                            <Link to={`${url}/jardins`}><button>enter</button></Link>
                            <h3>Enter a world of rain and nature.</h3>
                        </div>
                    </div>
                </Route>
                <Route path={`${path}/jardins`}>
                    <Jardins path={path} />
                </Route>
            </Switch>);
    } else {
        return (
            <Switch>
                <Route exact path={path}>
                    <div class="fan-page">
                        <div class="button-container">
                            <div class="button-pagodes" onClick={() => setDisplay(1)}>I</div>
                            <div class="button-grenade" onClick={() => setDisplay(2)}>II</div>
                            <div class="button-jardins" onClick={() => setDisplay(3)}>III</div>
                        </div>
                        <div class="text-container">
                            <h2>Welcome to Debussy's Estampes</h2>
                            <h3>Choose your mood</h3>
                        </div>
                    </div>
                </Route>
                <Route path={`${path}/pagodes`}>
                    <Pagodes path={path} />
                </Route>
                <Route path={`${path}/grenade`}>
                    <Grenade path={path} />
                </Route>
                <Route path={`${path}/jardins`}>
                    <Jardins path={path} />
                </Route>
            </Switch>
        );
    }


}



export default FanPage;
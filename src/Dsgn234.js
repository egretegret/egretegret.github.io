import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import HoverActivity from "./dsgn234/exercises/HoverActivity";

function Dsgn234() {
    let { path, url } = useRouteMatch();

    return (
        <div className="dsgn234">

            <Switch>
                <Route exact path={path}>
                    <h1>dsgn 234</h1>
                    <h3>make a selection</h3>
                    <ul>
                        <li>
                            <Link to={`${url}/hoveractivity`}>hover</Link>
                        </li>
                    </ul>
                </Route>
                <Route path={`${path}/hoveractivity`}>
                    <HoverActivity />
                </Route>
            </Switch>

        </div>

    );


}

export default Dsgn234;
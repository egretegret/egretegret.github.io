import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Dsgn234 from './Dsgn234';

function Design() {
    let { path, url } = useRouteMatch();

        return (
            <div>
                <Switch>
                <Route exact path={path}>
                <h2>Design Page</h2>
                    <p>This section contains information about design</p>
                    <h3>make a selection</h3>
                    <ul>
                        <li>
                            <Link to={`${url}/dsgn234`}>dsgn 234</Link>
                        </li>
                    </ul>
                </Route>
                <Route path={`${path}/dsgn234`}>
                    <Dsgn234 />
                </Route>
            </Switch>
            </div>
        )
    
}



export default Design;
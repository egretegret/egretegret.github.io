import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import HoverActivity from "./dsgn234/exercises/HoverActivity";
import Explainer from "./dsgn234/projects/explainer/Explainer";
import Wikipedia from "./dsgn234/exercises/Wikipedia";
import Memories from "./dsgn234/exercises/Memories";
import SvgExercise from "./dsgn234/exercises/SvgExercise";
import FanPage from "./dsgn234/projects/fanPage/FanPage";
import JSActivity from "./dsgn234/exercises/JSActivity";
import P5Exercise from "./dsgn234/exercises/P5exercise";
import DataExercise from "./dsgn234/exercises/DataExercise";
import DataVisualization from "./dsgn234/projects/data/DataVisualization";

function Dsgn234() {
    let { path, url } = useRouteMatch();

    return (
        <div className="dsgn234">

            <Switch>
                <Route exact path={path}>
                    <h1>dsgn 234</h1>
                    <h3>make a selection</h3>
                    <ul>
                        <li><Link to={`${url}/hoveractivity`}>hover</Link></li>
                        <li><Link to={`${url}/explainer`}>explainer</Link></li>
                        <li><Link to={`${url}/wikipedia`}>wikipedia</Link></li>
                        <li><Link to={`${url}/fan-page`}>fan page</Link></li>
                        <li><Link to={`${url}/jsactivity`}>js activity</Link></li>
                        <li><Link to={`${url}/p5exercise`}>p5 exercise</Link></li>
                        <li><Link to={`${url}/dataexercise`}>data exercise</Link></li>
                        <li><Link to={`${url}/datavisualization`}>data visualization</Link></li>
                    </ul>
                </Route>
                <Route path={`${path}/hoveractivity`}>
                    <HoverActivity />
                </Route>
                <Route path={`${path}/explainer`}>
                    <Explainer />
                </Route>
                <Route path={`${path}/wikipedia`}>
                    <Wikipedia />
                </Route>
                <Route path={`${path}/memories`}>
                    <Memories />
                </Route>
                <Route path={`${path}/svgexercise`}>
                    <SvgExercise />
                </Route>
                <Route path={`${path}/fan-page`}>
                    <FanPage />
                </Route>
                <Route path={`${path}/jsactivity`}>
                    <JSActivity />
                </Route>
                <Route path={`${path}/p5exercise`}>
                    <P5Exercise />
                </Route>
                <Route path={`${path}/dataexercise`}>
                    <DataExercise />
                </Route>
                <Route path={`${path}/datavisualization`}>
                    <DataVisualization />
                </Route>
            </Switch>

        </div>

    );


}

export default Dsgn234;
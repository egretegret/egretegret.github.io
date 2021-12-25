import React from 'react';

function TuesdayData(props) {

    return (
        <div className="data" id="tuesday-data">
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="tank" src="./data-visualization/tank.png" alt="burnt sienna tank top" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="browntop" src="./data-visualization/browntop.png" alt="brown patchwork top" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="browncardigan" src="./data-visualization/browncardigan.png" alt="lacey brown cardigan" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="blacklace" src="./data-visualization/blacklacesocks.png" alt="black lace up socks" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="greenjacket" src="./data-visualization/greenjacket.png" alt="earthy tone green jacket" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="whitesocks" src="./data-visualization/whitesocks.png" alt="white thigh high socks" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="brownbelt" src="./data-visualization/brownbelt.png" alt="wide brown belt" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="browntights" src="./data-visualization/browntights.png" alt="sheer brown tights" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="thinbrownbelt" src="./data-visualization/thinbrownbelt.png" alt="thin brown belt" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="headband" src="./data-visualization/headband.png" alt="plaid brown headband" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="creamskirt" src="./data-visualization/creamskirt.png" alt="silky cream skirt" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="silvernecklace" src="./data-visualization/silvernecklace.png" alt="layered silver necklaces" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="silverbelt" src="./data-visualization/silverbelt.png" alt="silver chains with a heart" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="docs" src="./data-visualization/docs.png" alt="black doc marten boots" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="tuesday-outfit" id="silverearrings" src="./data-visualization/silverheartearrings.png" alt="silver heart earrings" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="cloud1" src="./data-visualization/cloud.png" alt="cloudy" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="cloud2" src="./data-visualization/cloud.png" alt="low: 30°" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="cloud3" src="./data-visualization/cloud.png" alt="high: 45°" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="sad1" src="./data-visualization/sad.png" alt="kind of stressed" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="sad2" src="./data-visualization/sad.png" alt="lots of hw due tonight" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="sad3" src="./data-visualization/sad.png" alt="oh god why didn't i work sooner" />
        </div>
    )

}

export default TuesdayData;
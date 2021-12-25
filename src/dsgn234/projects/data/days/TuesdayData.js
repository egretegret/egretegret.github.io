import React from 'react';
import DataImg from '../DataImg';

function TuesdayData(props) {

    return (
        <div className="data" id="tuesday-data">
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="tank" src="./data-visualization/tank.png" alt="burnt sienna tank top" />
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="browntop" src="./data-visualization/browntop.png" alt="brown patchwork top" />
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="browncardigan" src="./data-visualization/browncardigan.png" alt="lacey brown cardigan" />
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="blacklace" src="./data-visualization/blacklacesocks.png" alt="black lace up socks" />
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="greenjacket" src="./data-visualization/greenjacket.png" alt="earthy tone green jacket" />
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="whitesocks" src="./data-visualization/whitesocks.png" alt="white thigh high socks" />
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="brownbelt" src="./data-visualization/brownbelt.png" alt="wide brown belt" />
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="browntights" src="./data-visualization/browntights.png" alt="sheer brown tights" />
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="thinbrownbelt" src="./data-visualization/thinbrownbelt.png" alt="thin brown belt" />
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="headband" src="./data-visualization/headband.png" alt="plaid brown headband" />
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="creamskirt" src="./data-visualization/creamskirt.png" alt="silky cream skirt" />
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="silvernecklace" src="./data-visualization/silvernecklace.png" alt="layered silver necklaces" />
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="silverbelt" src="./data-visualization/silverbelt.png" alt="silver chains with a heart" />
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="docs" src="./data-visualization/docs.png" alt="black doc marten boots" />
            <DataImg reveal={props.reveal} hide={props.hide} className="tuesday-outfit" id="silverearrings" src="./data-visualization/silverheartearrings.png" alt="silver heart earrings" />

        </div>
    )

}

export default TuesdayData;
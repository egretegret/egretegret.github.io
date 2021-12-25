import React from 'react';
import DataImg from '../DataImg';

function SaturdayData(props) {

    return (
        <div className="data" id="saturday-data">
            <DataImg reveal={props.reveal} hide={props.hide} className="saturday-outfit" id="blackskirt2" src="./data-visualization/blackskirt2.png" alt="cozy black pleated skirt" />
            <DataImg reveal={props.reveal} hide={props.hide} className="saturday-outfit" id="cowbag" src="./data-visualization/cowbag.png" alt="fuzzy cow print tote bag" />
            <DataImg reveal={props.reveal} hide={props.hide} className="saturday-outfit" id="goldbelt" src="./data-visualization/goldbelt.png" alt="golden pearl chain" />
            <DataImg reveal={props.reveal} hide={props.hide} className="saturday-outfit" id="whitesneakers" src="./data-visualization/whitesneakers.png" alt="platform naked wolfe white sneakers" />
            <DataImg reveal={props.reveal} hide={props.hide} className="saturday-outfit" id="turtleneck" src="./data-visualization/sweater.png" alt="white turtleneck sweater" />
            <DataImg reveal={props.reveal} hide={props.hide} className="saturday-outfit" id="anklewarmers" src="./data-visualization/anklewarmers.png" alt="knitted white ankle warmers" />
            <DataImg reveal={props.reveal} hide={props.hide} className="saturday-outfit" id="pearlearrings" src="./data-visualization/pearlearrings.png" alt="golden safety pin earrings with pearls" />
        </div>
    )

}

export default SaturdayData;
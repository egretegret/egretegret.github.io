import React from 'react';
import DataImg from '../DataImg';

function WednesdayData(props) {

    return (
        <div className="data" id="wednesday-data">
            <DataImg reveal={props.reveal} hide={props.hide} className="wednesday-outfit" id="tantank" src="./data-visualization/tantank.png" alt="ruched tan tank top" />
            <DataImg reveal={props.reveal} hide={props.hide} className="wednesday-outfit" id="tancardigan" src="./data-visualization/tancardigan.png" alt="sand colored tie up cardigan" />
            <DataImg reveal={props.reveal} hide={props.hide} className="wednesday-outfit" id="tanskirt" src="./data-visualization/tanskirt.png" alt="sand colored skirt" />
            <DataImg reveal={props.reveal} hide={props.hide} className="wednesday-outfit" id="whiteshoes" src="./data-visualization/whiteshoes.png" alt="white mary janes" />
            <DataImg reveal={props.reveal} hide={props.hide} className="wednesday-outfit" id="warmtights" src="./data-visualization/warmtights.png" alt="fleece lined black tights" />
            <DataImg reveal={props.reveal} hide={props.hide} className="wednesday-outfit" id="anklewarmers" src="./data-visualization/anklewarmers.png" alt="white knit ankle warmers" />
            <DataImg reveal={props.reveal} hide={props.hide} className="wednesday-outfit" id="wristwarmers" src="./data-visualization/wristwarmers.png" alt="black wrist warmers" />
            <DataImg reveal={props.reveal} hide={props.hide} className="wednesday-outfit" id="whitewristwarmers" src="./data-visualization/whitewristwarmers.png" alt="white knit wrist warmers" />
            <DataImg reveal={props.reveal} hide={props.hide} className="wednesday-outfit" id="pearlbelt" src="./data-visualization/pearlbelt.png" alt="silver pearl belt" />
            <DataImg reveal={props.reveal} hide={props.hide} className="wednesday-outfit" id="silverbelt" src="./data-visualization/silverbelt.png" alt="silver chains with heart" />
            <DataImg reveal={props.reveal} hide={props.hide} className="wednesday-outfit" id="kawaii" src="./data-visualization/kawaiinecklace.png" alt="cute kuromi silver necklace" />
            <DataImg reveal={props.reveal} hide={props.hide} className="wednesday-outfit" id="silverearrings" src="./data-visualization/silverheartearrings.png" alt="silver heart earrings" />
        </div>
    )

}

export default WednesdayData;
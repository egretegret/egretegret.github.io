import React from 'react';

function WednesdayData(props) {

    return (
        <div className="data" id="wednesday-data">
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="wednesday-outfit" id="tantank" src="./data-visualization/tantank.png" alt="ruched tan tank top" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="wednesday-outfit" id="tancardigan" src="./data-visualization/tancardigan.png" alt="sand colored tie up cardigan" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="wednesday-outfit" id="tanskirt" src="./data-visualization/tanskirt.png" alt="sand colored skirt" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="wednesday-outfit" id="whiteshoes" src="./data-visualization/whiteshoes.png" alt="white mary janes" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="wednesday-outfit" id="warmtights" src="./data-visualization/warmtights.png" alt="fleece lined black tights" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="wednesday-outfit" id="anklewarmers" src="./data-visualization/anklewarmers.png" alt="white knit ankle warmers" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="wednesday-outfit" id="wristwarmers" src="./data-visualization/wristwarmers.png" alt="black wrist warmers" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="wednesday-outfit" id="whitewristwarmers" src="./data-visualization/whitewristwarmers.png" alt="white knit wrist warmers" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="wednesday-outfit" id="pearlbelt" src="./data-visualization/pearlbelt.png" alt="silver pearl belt" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="wednesday-outfit" id="silverbelt" src="./data-visualization/silverbelt.png" alt="silver chains with heart" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="wednesday-outfit" id="kawaii" src="./data-visualization/kawaiinecklace.png" alt="cute kuromi silver necklace" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="wednesday-outfit" id="silverearrings" src="./data-visualization/silverheartearrings.png" alt="silver heart earrings" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="rain1" src="./data-visualization/rain.png" alt="rainy" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="rain2" src="./data-visualization/rain.png" alt="high: 52°" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="rain3" src="./data-visualization/rain.png" alt="low: 36°"/>
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="sad1" src="./data-visualization/sad.png" alt="omg crunch time" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="sad2" src="./data-visualization/sad.png" alt="are we going to even finish" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="sad3" src="./data-visualization/sad.png" alt="help" />
        </div>
    )

}

export default WednesdayData;
import React from 'react';

function SundayData(props) {

    return (
        <div className="data" id="sunday-data">
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="sunday-outfit" id="docs" src="./data-visualization/docs.png" alt="doc marten boots" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="sunday-outfit" id="coat" src="./data-visualization/coat.png" alt="black winter coat" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="sunday-outfit" id="turtleneck" src="./data-visualization/sweater.png" alt="cream turtleneck sweater" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="sunday-outfit" id="blackjeans" src="./data-visualization/blackpants.png" alt="black jeans" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="sunday-outfit" id="hoops" src="./data-visualization/goldhoopearrings.png" alt="golden hoop earrings" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="weather" id="wind1" src="./data-visualization/wind.png" alt="windy" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="weather" id="wind2" src="./data-visualization/wind.png" alt="low: 45°" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="weather" id="wind3" src="./data-visualization/wind.png" alt="high: 54°" />
        </div>
    )

}

export default SundayData;
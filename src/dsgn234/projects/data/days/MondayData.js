import React from 'react';

function MondayData(props) {

    return (
        <div className="data" id="monday-data">
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="monday-outfit" id="blackturtleneck" src="./data-visualization/blackturtleneck.png" alt="black turtleneck" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="monday-outfit" id="blackskirt" src="./data-visualization/blackskirt.png" alt="black skirt" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="monday-outfit" id="cardigan" src="./data-visualization/cardigan.png" alt="white cardigan" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="monday-outfit" id="coat" src="./data-visualization/coat.png" alt="black coat" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="monday-outfit" id="blacksocks" src="./data-visualization/blacksocks.png" alt="thich high black socks" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="monday-outfit" id="silvernecklace" src="./data-visualization/silvernecklace.png" alt="layered silver necklaces" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="monday-outfit" id="docs" src="./data-visualization/docs.png" alt="black doc martens" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="monday-outfit" id="silverearrings" src="./data-visualization/silverheartearrings.png" alt="silver heart earrings" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="cloud1" src="./data-visualization/cloud.png" alt="cloudy" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="cloud2" src="./data-visualization/cloud.png" alt="low: 34°" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="cloud3" src="./data-visualization/cloud.png" alt="high: 45°" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="neutral1" src="./data-visualization/neutral.png" alt="back to classes..." />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="neutral2" src="./data-visualization/neutral.png" alt="big group project due wed" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="neutral3" src="./data-visualization/neutral.png" alt="wish it was sunny" />
        </div>
    )
}

export default MondayData;
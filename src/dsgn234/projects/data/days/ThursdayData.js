import React from 'react';

function ThursdayData(props) {

    return (
        <div className="data" id="thursday-data">
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="thursday-outfit" id="sleeveless" src="./data-visualization/sleeveless.png" alt="black sleeveless mock top" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="thursday-outfit" id="miniskirt" src="./data-visualization/blackminiskirt.png" alt="black denim miniskirt" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="thursday-outfit" id="blacktights" src="./data-visualization/blacktights.png" alt="black fishnetty tights" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="thursday-outfit" id="blacksocks2" src="./data-visualization/blacksocks2.png" alt="black thigh high socks" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="thursday-outfit" id="newspaper" src="./data-visualization/newspapershirt.png" alt="newspaper shirt" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="thursday-outfit" id="coat" src="./data-visualization/coat.png" alt="warm black coat" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="thursday-outfit" id="silverbelt" src="./data-visualization/silverbelt.png" alt="silver chains with a heart" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="thursday-outfit" id="kawaii" src="./data-visualization/kawaiinecklace.png" alt="cute silver kuromi necklace" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="thursday-outfit" id="wristwarmers" src="./data-visualization/wristwarmers.png" alt="black wrist warmers" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="thursday-outfit" id="boots" src="./data-visualization/boots.png" alt="black knee high platform boots" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="thursday-outfit" id="silverearrings" src="./data-visualization/silverheartearrings.png" alt="silver heart earrings" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="weather" id="sun1" src="./data-visualization/sun.png" alt="sunny" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="weather" id="sun2" src="./data-visualization/sun.png" alt="high: 61°" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="weather" id="sun3" src="./data-visualization/sun.png" alt="low: 46°"/>
        </div>
    )

}

export default ThursdayData;
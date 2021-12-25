import React from 'react';
import DataImg from '../DataImg';

function MondayData(props) {

    return (
        <div className="data" id="monday-data">
            <DataImg reveal={props.reveal} hide={props.hide} className="monday-outfit" id="blackturtleneck" src="./data-visualization/blackturtleneck.png" alt="black turtleneck" />
            <DataImg reveal={props.reveal} hide={props.hide} className="monday-outfit" id="blackskirt" src="./data-visualization/blackskirt.png" alt="black skirt" />
            <DataImg reveal={props.reveal} hide={props.hide} className="monday-outfit" id="cardigan" src="./data-visualization/cardigan.png" alt="white cardigan" />
            <DataImg reveal={props.reveal} hide={props.hide} className="monday-outfit" id="coat" src="./data-visualization/coat.png" alt="black coat" />
            <DataImg reveal={props.reveal} hide={props.hide} className="monday-outfit" id="blacksocks" src="./data-visualization/blacksocks.png" alt="thich high black socks" />
            <DataImg reveal={props.reveal} hide={props.hide} className="monday-outfit" id="silvernecklace" src="./data-visualization/silvernecklace.png" alt="layered silver necklaces" />
            <DataImg reveal={props.reveal} hide={props.hide} className="monday-outfit" id="docs" src="./data-visualization/docs.png" alt="black doc martens" />
            <DataImg reveal={props.reveal} hide={props.hide} className="monday-outfit" id="silverearrings" src="./data-visualization/silverheartearrings.png" alt="silver heart earrings" />
        
        </div>
    )
}

export default MondayData;
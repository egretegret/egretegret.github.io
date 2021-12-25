import React from 'react';
import DataImg from '../DataImg';

function ThursdayData(props) {

    return (
        <div className="data" id="thursday-data">
            <DataImg reveal={props.reveal} hide={props.hide} className="thursday-outfit" id="sleeveless" src="./data-visualization/sleeveless.png" alt="black sleeveless mock top" />
            <DataImg reveal={props.reveal} hide={props.hide} className="thursday-outfit" id="miniskirt" src="./data-visualization/blackminiskirt.png" alt="black denim miniskirt" />
            <DataImg reveal={props.reveal} hide={props.hide} className="thursday-outfit" id="blacktights" src="./data-visualization/blacktights.png" alt="black fishnetty tights" />
            <DataImg reveal={props.reveal} hide={props.hide} className="thursday-outfit" id="blacksocks2" src="./data-visualization/blacksocks2.png" alt="black thigh high socks" />
            <DataImg reveal={props.reveal} hide={props.hide} className="thursday-outfit" id="newspaper" src="./data-visualization/newspapershirt.png" alt="newspaper shirt" />
            <DataImg reveal={props.reveal} hide={props.hide} className="thursday-outfit" id="coat" src="./data-visualization/coat.png" alt="warm black coat" />
            <DataImg reveal={props.reveal} hide={props.hide} className="thursday-outfit" id="silverbelt" src="./data-visualization/silverbelt.png" alt="silver chains with a heart" />
            <DataImg reveal={props.reveal} hide={props.hide} className="thursday-outfit" id="kawaii" src="./data-visualization/kawaiinecklace.png" alt="cute silver kuromi necklace" />
            <DataImg reveal={props.reveal} hide={props.hide} className="thursday-outfit" id="wristwarmers" src="./data-visualization/wristwarmers.png" alt="black wrist warmers" />
            <DataImg reveal={props.reveal} hide={props.hide} className="thursday-outfit" id="boots" src="./data-visualization/boots.png" alt="black knee high platform boots" />
            <DataImg reveal={props.reveal} hide={props.hide} className="thursday-outfit" id="silverearrings" src="./data-visualization/silverheartearrings.png" alt="silver heart earrings" />
        </div>
    )

}

export default ThursdayData;
import React from 'react';
import DataImg from '../DataImg';

function SundayData(props) {

    return (
        <div className="data" id="sunday-data">
            <DataImg reveal={props.reveal} hide={props.hide} className="sunday-outfit" id="docs" src="./data-visualization/docs.png" alt="doc marten boots" />
            <DataImg reveal={props.reveal} hide={props.hide} className="sunday-outfit" id="coat" src="./data-visualization/coat.png" alt="black winter coat" />
            <DataImg reveal={props.reveal} hide={props.hide} className="sunday-outfit" id="turtleneck" src="./data-visualization/sweater.png" alt="cream turtleneck sweater" />
            <DataImg reveal={props.reveal} hide={props.hide} className="sunday-outfit" id="blackjeans" src="./data-visualization/blackpants.png" alt="black jeans" />
            <DataImg reveal={props.reveal} hide={props.hide} className="sunday-outfit" id="hoops" src="./data-visualization/goldhoopearrings.png" alt="golden hoop earrings" />
        </div>
    )

}

export default SundayData;
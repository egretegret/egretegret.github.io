import React from 'react';

function SaturdayData(props) {

    return (
        <div className="data" id="saturday-data">
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="saturday-outfit" id="blackskirt2" src="./data-visualization/blackskirt2.png" alt="cozy black pleated skirt" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="saturday-outfit" id="cowbag" src="./data-visualization/cowbag.png" alt="fuzzy cow print tote bag" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="saturday-outfit" id="goldbelt" src="./data-visualization/goldbelt.png" alt="golden pearl chain" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="saturday-outfit" id="whitesneakers" src="./data-visualization/whitesneakers.png" alt="platform naked wolfe white sneakers" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="saturday-outfit" id="turtleneck" src="./data-visualization/sweater.png" alt="white turtleneck sweater" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="saturday-outfit" id="anklewarmers" src="./data-visualization/anklewarmers.png" alt="knitted white ankle warmers" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="saturday-outfit" id="pearlearrings" src="./data-visualization/pearlearrings.png" alt="golden safety pin earrings with pearls" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="sun1" src="./data-visualization/sun.png" alt="low: 37°" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="sun2" src="./data-visualization/sun.png" alt="high: 48°" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="sun3" src="./data-visualization/sun.png" alt="sunny"/>
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="happy1" src="./data-visualization/happy.png" alt="wooooooooooo" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="happy2" src="./data-visualization/happy.png" alt="school? what's that?" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="happy3" src="./data-visualization/happy.png" alt="time for my hobbies!" />
        </div>
    )

}

export default SaturdayData;
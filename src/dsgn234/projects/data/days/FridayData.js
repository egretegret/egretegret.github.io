import React from 'react';

function FridayData(props) {

    return (
        <div className="data" id="friday-data">
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="friday-outfit" id="greencardigan" src="./data-visualization/greencardigan.png" alt="green cropped cardigan" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="friday-outfit" id="whiteskirt" src="./data-visualization/whiteskirt.png" alt="lace detail white skirt" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="friday-outfit" id="whitesocks" src="./data-visualization/whitesocks.png" alt="knee high white socks with ribbons" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="friday-outfit" id="whitesneakers" src="./data-visualization/whitesneakers.png" alt="white platform naked wolfe sneakers" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="friday-outfit" id="clearbelt" src="./data-visualization/clearbelt.png" alt="clear and gold heart belt" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="friday-outfit" id="cardigan" src="./data-visualization/cardigan.png" alt="white oversized knitted cardigan" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="friday-outfit" id="goldnecklace" src="./data-visualization/goldnecklace.png" alt="gold butterfly necklace" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="friday-outfit" id="heartearrings" src="./data-visualization/heartearrings.png" alt="golden heart earrings" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="rain1" src="./data-visualization/rain.png" alt="low: 43° " />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="rain2" src="./data-visualization/rain.png" alt="rainy" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="rain3" src="./data-visualization/rain.png" alt="high: 54°" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="happy1" src="./data-visualization/happy.png" alt="oh well, who cares?" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="happy2" src="./data-visualization/happy.png" alt="i'm almost free" />
            <img onMouseOver={props.reveal} onMouseOut={props.hide} className="doodles" id="happy3" src="./data-visualization/happy.png" alt="my workload isn't that bad" />
        </div>
    )

}

export default FridayData;
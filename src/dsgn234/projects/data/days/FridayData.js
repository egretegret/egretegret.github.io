import React from 'react';
import DataImg from '../DataImg';

function FridayData(props) {

    return (
        <div className="data" id="friday-data">
            <DataImg reveal={props.reveal} hide={props.hide} className="friday-outfit" id="greencardigan" src="./data-visualization/greencardigan.png" alt="green cropped cardigan" />
            <DataImg reveal={props.reveal} hide={props.hide} className="friday-outfit" id="whiteskirt" src="./data-visualization/whiteskirt.png" alt="lace detail white skirt" />
            <DataImg reveal={props.reveal} hide={props.hide} className="friday-outfit" id="whitesocks" src="./data-visualization/whitesocks.png" alt="knee high white socks with ribbons" />
            <DataImg reveal={props.reveal} hide={props.hide} className="friday-outfit" id="whitesneakers" src="./data-visualization/whitesneakers.png" alt="white platform naked wolfe sneakers" />
            <DataImg reveal={props.reveal} hide={props.hide} className="friday-outfit" id="clearbelt" src="./data-visualization/clearbelt.png" alt="clear and gold heart belt" />
            <DataImg reveal={props.reveal} hide={props.hide} className="friday-outfit" id="cardigan" src="./data-visualization/cardigan.png" alt="white oversized knitted cardigan" />
            <DataImg reveal={props.reveal} hide={props.hide} className="friday-outfit" id="goldnecklace" src="./data-visualization/goldnecklace.png" alt="gold butterfly necklace" />
            <DataImg reveal={props.reveal} hide={props.hide} className="friday-outfit" id="heartearrings" src="./data-visualization/heartearrings.png" alt="golden heart earrings" />
        
        </div>
    )

}

export default FridayData;
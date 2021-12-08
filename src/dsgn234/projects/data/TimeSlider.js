import React, { useState } from 'react';

function TimeSlider(props) {

    return (
        <div className="time-slider">
            <div onMouseOver={props.daySelector} class="time-slider-line" id="sunday"></div>
            <div onMouseOver={props.daySelector} className="time-slider-line" id="monday"></div>
            <div onMouseOver={props.daySelector} className="time-slider-line" id="tuesday"></div>
            <div onMouseOver={props.daySelector} className="time-slider-line" id="wednesday"></div>
            <div onMouseOver={props.daySelector} className="time-slider-line" id="thursday"></div>
            <div onMouseOver={props.daySelector} className="time-slider-line" id="friday"></div>
            <div onMouseOver={props.daySelector} className="time-slider-line" id="saturday"></div>
            <div className="time-slider-day">
                {props.day}
            </div>
        </div>
    )

}

export default TimeSlider;
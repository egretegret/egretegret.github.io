import React, { useState } from 'react';
import "./dataVisualization.css";
import MondayData from './days/MondayData';
import SundayData from './days/SundayData';
import TuesdayData from './days/TuesdayData'
// import background from "./paper.png";
import TimeSlider from './TimeSlider';

function DataVisualization() {

    const [day, setDay] = useState("");

    const daySelector = (e) => {
        setDay(e.target.id);

        var all = document.getElementsByClassName('data');
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }

        var showElement = document.getElementById(e.target.id + "-data");

        if (showElement != null) {
            showElement.style.display = "block";
        }

    }

    const reset = () => {
        setDay("");

        var all = document.getElementsByClassName('data');
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = "block";
        }
    }

    return (
        <div className="data-visualization">
            <div className="title" onMouseOver={reset}>outfits<br/>of<br/>the<br/>week</div>
            <TimeSlider daySelector={daySelector.bind(this)} day={day}/>
            <SundayData />
            <MondayData />
            <TuesdayData />
        </div>
    )

}

export default DataVisualization;
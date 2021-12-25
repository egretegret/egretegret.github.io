import React, { useState } from "react";
import "./dataVisualization.css";
import SundayData from "./days/SundayData";
import MondayData from "./days/MondayData";
import TuesdayData from "./days/TuesdayData";
import WednesdayData from "./days/WednesdayData";
import ThursdayData from "./days/ThursdayData";
import FridayData from "./days/FridayData";
import SaturdayData from "./days/SaturdayData";
// import background from "./paper.png";
import TimeSlider from "./TimeSlider";

function DataVisualization() {

    const [day, setDay] = useState("");

    const daySelector = (e) => {
        setDay(e.target.id);

        var all = document.getElementsByClassName("data");
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }

        var showElement = document.getElementById(e.target.id + "-data");

        if (showElement != null) {
            showElement.style.display = "block";
        }

        document.getElementById("cover").style.display = "none";

    }

    const reset = () => {
        setDay("");

        var all = document.getElementsByClassName("data");
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = "block";
        }

        document.getElementById("cover").style.display = "block";
    }

    let name = "";

    const reveal = (e) => {
        name = e.target.src;
        e.target.src = "";
    }

    const hide = (e) => {
        e.target.src = name;
    }


    return (
        <div className="data-visualization">
            <div className="title" onMouseOver={reset}>outfits of the week</div>
            <div id="cover"></div>
            <TimeSlider daySelector={daySelector.bind(this)} day={day}/>
            <SundayData reveal={reveal.bind(this)} hide={hide.bind(this)} name={name}/>
            <MondayData reveal={reveal.bind(this)} hide={hide.bind(this)} name={name}/>
            <TuesdayData reveal={reveal.bind(this)} hide={hide.bind(this)} name={name}/>
            <WednesdayData reveal={reveal.bind(this)} hide={hide.bind(this)} name={name}/>
            <ThursdayData reveal={reveal.bind(this)} hide={hide.bind(this)} name={name}/>
            <FridayData reveal={reveal.bind(this)} hide={hide.bind(this)} name={name}/>
            <SaturdayData reveal={reveal.bind(this)} hide={hide.bind(this)} name={name}/>
        </div>
    )

}

export default DataVisualization;
import React from 'react';
import Sketch from "react-p5";

import "./jsactivity.css";

function SvgExercise() {
    document.title = "JS Activity"

    // credit to R. Luke DuBois. from the p5 website for the original example
    // https://p5js.org/examples/simulate-spirograph.html

    let NUMSINES = 20; // how many of these things can we do at once?
    let sines = new Array(NUMSINES); // an array to hold all the current angles
    let rad; // an initial radius value for the central sine

    // play with these to get a sense of what's going on:
    let fund = 0.005; // the speed of the central sine
    let ratio = 5; // what multiplier for speed is each additional sine?
    let alpha = 50; // how opaque is the tracing system

    let fundBar, ratioBar, alphaBar; // sliders

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.displayWidth / 3 * 2, p5.displayHeight / 3 * 2).parent(canvasParentRef);

        rad = p5.height / 4; // compute radius for central circle
        p5.background(237, 212, 180); // clear the screen

        for (let i = 0; i < sines.length; i++) {
            sines[i] = p5.PI; // start EVERYBODY facing NORTH
        }

        let sliderDiv = document.getElementById("sliders");

        fundBar = p5.createSlider(0, 20, 10);
        fundBar.addClass("slider");
        fundBar.parent(sliderDiv);
        ratioBar = p5.createSlider(0, 100, 50);
        ratioBar.addClass("slider");
        ratioBar.parent(sliderDiv);
        alphaBar = p5.createSlider(0, 100, 50);
        alphaBar.addClass("slider");
        alphaBar.parent(sliderDiv);
    }

    const draw = p5 => {

        fund = 1 / 1000 * fundBar.value();
        ratio = 1 / 10 * ratioBar.value();
        alpha = alphaBar.value()

        // MAIN ACTION
        p5.push(); // start a transformation matrix
        p5.translate(p5.width / 2, p5.height / 2); // move to middle of screen

        for (let i = 0; i < sines.length; i++) {
            let erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
            
            // setup for tracing
            p5.stroke(235 * (p5.float(i) / sines.length), 187 * (p5.float(i) / sines.length), 142 * (p5.float(i) / sines.length), alpha); // color of line
            p5.fill(235, 187, 142, alpha / 2); 
            erad = 5.0 * (1.0 - p5.float(i) / sines.length); // pen width will be related to which sine

            let radius = rad / (i + 1); // radius for circle itself
            p5.rotate(sines[i]); // rotate circle
            p5.push(); // go up one level
            p5.translate(0, radius); // move to sine edge
            p5.ellipse(0, 0, erad, erad); // draw with erad if tracing
            p5.pop(); // go down one level
            p5.translate(0, radius); // move into position for next sine
            sines[i] = (sines[i] + (fund + (fund * i * ratio))) % p5.TWO_PI; // update angle based on fundamental
        }

        p5.pop(); // pop down final transformation

    }

    return (
        <div class="JSActivity">
            <Sketch setup={setup} draw={draw} />
            <div id="sliders"></div>
        </div>
    )

}



export default SvgExercise;
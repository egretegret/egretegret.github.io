import React from 'react';
import "./p5exercise.css";

import Sketch from "react-p5";

function P5Exercise() {

    let bgcolor = 0;
    let slider, button;
    let p;

    // tree branching taken from an example on the p5 website

    function setup(p5, canvasParentRef) {
        p5.createCanvas(500, 600, p5.WEBGL).parent(canvasParentRef);
        p = p5;

        let div = p5.createDiv().class("p5-overlay").parent(canvasParentRef);

        slider = p5.createSlider(50, 500, 250).parent(div);;
        slider.class("slider")

        button = p5.createButton('click me').parent(div);;
        button.style("width", "500px");
        button.style("height", "30px")
        button.mousePressed(changeBG);
    }

    function changeBG() {
        bgcolor = p.random(255);
    }

    function branch(h, p5) {
        // Each branch will be 2/3rds the size of the previous one
        h *= 0.66;

        // All recursive functions must have an exit condition!!!!
        // Here, ours is when the length of the branch is 2 pixels or less
        if (h > 2) {
            p5.push();    // Save the current state of transformation (i.e. where are we now)
            p5.rotate(p5.theta);   // Rotate by theta
            p5.line(0, 0, 0, -h);  // Draw the branch
            p5.translate(0, -h); // Move to the end of the branch
            branch(h, p5);       // Ok, now call myself to draw two new branches!!
            p5.pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

            // Repeat the same thing, only branch off to the "left" this time!
            p5.push();
            p5.rotate(-p5.theta);
            p5.line(0, 0, 0, -h);
            p5.translate(0, -h);
            branch(h, p5);
            p5.pop();
        }
    }

    function draw(p5) {
        let bg = document.getElementById("p5-bg");
        bg.style.backgroundColor = `rgb(${bgcolor}, ${bgcolor}, ${bgcolor})`;
        p5.background(bgcolor, bgcolor, bgcolor);

        p5.frameRate(30);
        p5.stroke(255 - bgcolor);
        // Let's pick an angle 0 to 90 degrees based on the mouse position
        let a = (slider.value() / 500) * 90;
        // Convert it to radians
        p5.theta = p5.radians(a);
        // Start the tree from the bottom of the screen
        p5.translate(0, 250);
        // Draw a line 120 pixels
        p5.line(0, 0, 0, -120);
        // Move to the end of that line
        p5.translate(0, -120);
        // Start the recursive branching!
        branch(120, p5);
    }

    return (
        <div class="p5exercise" id="p5-bg">
            <Sketch setup={setup} draw={draw} />
        </div>
    );

}



export default P5Exercise;
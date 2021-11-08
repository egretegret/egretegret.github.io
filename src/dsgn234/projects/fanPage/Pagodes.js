import React, { useState, useEffect } from "react";
import {
    Link,
} from "react-router-dom";

import Sketch from "react-p5";

import "./pagodes.css";
import "p5/lib/addons/p5.sound";
import pagodes from "./assets/pagodes.mp3";
import { ReactComponent as Settings } from "./assets/settings.svg";
import { ReactComponent as Home } from "./assets/home.svg";

function Pagodes(props) {

    let sound, amplitude, rotationSlider, sizeSlider, opacitySlider;
    let duration, current;
    let progressBar;

    const preload = (p5) => {
        sound = p5.loadSound(pagodes);
    }

    const setup = (p5, canvasParentRef) => {
        let cnv = p5.createCanvas(500, 500).parent(canvasParentRef);
        cnv.mousePressed(mousePressed);

        duration = sound.duration();

        progressBar = p5.createSlider(0, duration, 1);
        progressBar.addClass("pagodes-progress-bar");

        rotationSlider = p5.createSlider(0, 360, 108);
        rotationSlider.position(10, 10);
        rotationSlider.addClass("pagodes-rotation-slider");
        sizeSlider = p5.createSlider(0, 1000, 500);
        sizeSlider.position(10, 50);
        sizeSlider.addClass("pagodes-size-slider");
        opacitySlider = p5.createSlider(0, 255, 200);
        opacitySlider.position(10, 90);
        opacitySlider.addClass("pagodes-opacity-slider");
        
        sound.play();
        amplitude = new p5.constructor.Amplitude();
    }

    const draw = p5 => {
        
        let rotation = rotationSlider.value();
        let size = sizeSlider.value();
        let opacity = opacitySlider.value();

        p5.background(255, 236, 222); // 222

        let level = amplitude.getLevel();
        let shapeWidth = p5.map(level, 0, 1, 20, size);
        let mappedOpacity = p5.map(opacity, 0, 255, 40, 255)

        p5.push();
        p5.angleMode(p5.DEGREES);
        p5.translate(p5.width/2, p5.height/2);
        p5.rotate(rotation);
        p5.stroke(0, 0, 0, 0);
        p5.fill(255, 255, 255, mappedOpacity);
        polygon(p5, 0, 0, shapeWidth, 5);
        p5.pop();

        
        if (sound.isPlaying()) {
            current = sound.currentTime();
        }
        p5.text(current+ "/"+ duration, 10, 30);
        progressBar.value(current);
        
    }

    const polygon = (p5, x, y, radius, npoints) => {
        p5.angleMode(p5.RADIANS);
        let angle = p5.TWO_PI / npoints;
        p5.rotate(p5.PI / 10);
        p5.beginShape();
        for (let a = 0; a < p5.TWO_PI; a += angle) {
          let sx = x + p5.cos(a) * radius;
          let sy = y + p5.sin(a) * radius;
          p5.vertex(sx, sy);
        }
        p5.endShape(p5.CLOSE);
      }

    const mousePressed = () => {
        if (sound.isPlaying()) {
            sound.pause();
          } else {
            sound.play();
          }
    }

    return (
        <div class="pagodes">
            <h1 class="title"> Pagodes </h1>
            <div class="header">
            <Settings />
            <Link to={props.path}><Home /></Link>
            </div>
            <Sketch preload={preload} setup={setup} draw={draw}/>
        </div>
    );

}



export default Pagodes;
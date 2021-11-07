import React, { useState, useEffect } from "react";
import {
    Link,
} from "react-router-dom";

import Sketch from "react-p5";

import "./pagodes.css";
import "p5/lib/addons/p5.sound";
import jardins from "./assets/jardins.mp3";
import { ReactComponent as Settings } from "./assets/settings.svg";
import { ReactComponent as Home } from "./assets/home.svg";

function Pagodes(props) {

    let sound, amplitude, slider1, slider2, slider3;
    let duration;

    let current;

    const preload = (p5) => {
        sound = p5.loadSound(jardins);
    }

    const setup = (p5, canvasParentRef) => {
        let cnv = p5.createCanvas(500, 500).parent(canvasParentRef);
        cnv.mousePressed(mousePressed);
        slider1 = p5.createSlider(0, 255, 100);
        slider1.position(10, 10);
        slider1.style('width', '80px');
        slider1.addClass('slider1');
        slider2 = p5.createSlider(0, duration, 1);
        slider2.position(10, 50);
        slider2.style('width', '80px');
        slider3 = p5.createSlider(0, 255, 100);
        slider3.position(10, 90);
        slider3.style('width', '80px');
        duration = sound.duration();
        sound.play();
        amplitude = new p5.constructor.Amplitude();
    }

    const draw = p5 => {

        let val = slider1.value();
        let val2 = slider2.value();
        let val3 = slider3.value();

        p5.background(255, 236, val); // 222

        let level = amplitude.getLevel();
        let size = p5.map(level, 0, 1, 0, 500);
        p5.stroke(0, 0, 0, 0);
        p5.fill(255, 255, val3);
        polygon(p5, p5.width/2, p5.height/2, size, 5);
        if (sound.isPlaying()) {
            current = sound.currentTime();
        }
        p5.text(current+ "/"+ duration, 10, 30);
        slider2.value(current);
        
    }

    const polygon = (p5, x, y, radius, npoints) => {
        let angle = p5.TWO_PI / npoints;
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
            // .isPlaying() returns a boolean
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
            <Sketch preload={preload} setup={setup} draw={draw} />
        </div>
    );

}



export default Pagodes;
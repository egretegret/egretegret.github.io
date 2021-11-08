import React, { useState, useEffect } from "react";
import {
    Link,
} from "react-router-dom";

import Sketch from "react-p5";

import "./pagodes.css";
import "p5/lib/addons/p5.sound";
import pagodes from "./assets/pagodes.mp3";
import windchimes from "./assets/windchimes.mp3";
import birds from "./assets/birds.mp3";
import river from "./assets/river.mp3";
import { ReactComponent as Settings } from "./assets/settings.svg";
import { ReactComponent as Home } from "./assets/home.svg";

function Pagodes(props) {

    let music, amplitude, windSound, birdSound, riverSound;
    let duration, current;
    let rotationSlider, sizeSlider, opacitySlider, progressBar;

    const preload = (p5) => {
        music = p5.loadSound(pagodes);
        windSound = p5.loadSound(windchimes);
        birdSound = p5.loadSound(birds);
        riverSound = p5.loadSound(river);
    }

    const setup = (p5, canvasParentRef) => {
        let cnv = p5.createCanvas(500, 500).parent(canvasParentRef);
        cnv.mousePressed(toggleSound);

        duration = music.duration();

        let settingsDiv = document.getElementById("settings");

        progressBar = p5.createSlider(0, duration, 1);
        progressBar.addClass("pagodes-progress-bar");
        progressBar.addClass("content");

        rotationSlider = p5.createSlider(0, 360, 108);
        rotationSlider.addClass("pagodes-rotation-slider");
        rotationSlider.addClass("pagodes-setting-slider");
        let rotationLabel = document.createElement("div");
        rotationLabel.classList.add("label");
        rotationLabel.innerHTML = "windchimes";
        settingsDiv.appendChild(rotationLabel);
        rotationSlider.parent(settingsDiv);

        sizeSlider = p5.createSlider(0, 1500, 750);
        sizeSlider.addClass("pagodes-size-slider");
        sizeSlider.addClass("pagodes-setting-slider");
        let sizeLabel = document.createElement("div");
        sizeLabel.classList.add("label");
        sizeLabel.innerHTML = "bird chatter";
        settingsDiv.appendChild(sizeLabel);
        sizeSlider.parent(settingsDiv);

        opacitySlider = p5.createSlider(0, 255, 200);
        opacitySlider.addClass("pagodes-opacity-slider");
        opacitySlider.addClass("pagodes-setting-slider");
        let opacityLabel = document.createElement("div");
        opacityLabel.classList.add("label");
        opacityLabel.innerHTML = "river";
        settingsDiv.appendChild(opacityLabel);
        opacitySlider.parent(settingsDiv);

        music.play();
        windSound.loop();
        birdSound.loop();
        riverSound.loop();

        windSound.setVolume(.01);
        birdSound.setVolume(.015);
        riverSound.setVolume(.02);

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
        p5.translate(p5.width / 2, p5.height / 2);
        p5.rotate(rotation);
        p5.stroke(0, 0, 0, 0);
        p5.fill(255, 255, 255, mappedOpacity);
        polygon(p5, 0, 0, shapeWidth, 5);
        p5.pop();

        let windVol = p5.map(rotation, 0, 1, 0, .001);
        let birdVol = p5.map(size, 0, 1, 0, .001);
        let riverVol = p5.map(opacity, 0, 1, 0, .001);

        windSound.setVolume(windVol);
        birdSound.setVolume(birdVol);
        riverSound.setVolume(riverVol);

        if (music.isPlaying()) {
            current = music.currentTime();
        }

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

    const toggleSound = () => {
        if (music.isPlaying()) {
            music.pause();
            windSound.pause();
            birdSound.pause();
            riverSound.pause();
        } else {
            music.play();
            windSound.loop();
            birdSound.loop();
            riverSound.loop();
        }
    }

    function stopSound() {
        music.stop();
        windSound.stop();
        birdSound.stop();
        riverSound.stop();
    }

    function toggleSettings() {
        let settings = document.getElementById("settings");
        let content = document.getElementsByClassName("content");

        for (let i = 0; i < content.length; i++) {
            if (content[i].style.display) {
                content[i].style.display = content[i].style.display === "block" ? "none" : "block";
            } else {
                content[i].style.display = "none";
            }
        }
            if (settings.style.display) {
                settings.style.display = settings.style.display === "none" ? "flex" : "none";
            } else {
                settings.style.display = "flex";
            }


    }

    return (
        <div class="pagodes">
            <div class="header">
                <Link to={props.path} onClick={stopSound}><Home /></Link>
                <Settings onClick={toggleSettings} />
            </div>
            <div class="content">
                <h1 class="title"> Pagodes </h1>
                <Sketch preload={preload} setup={setup} draw={draw} />
            </div>
            <div id="settings">
            </div>
        </div>
    );

}



export default Pagodes;
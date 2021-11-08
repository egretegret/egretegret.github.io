import React, { useState } from 'react';
import {
    Link,
} from "react-router-dom";

import Sketch from "react-p5";

import "./grenade.css";
import "p5/lib/addons/p5.sound";
import grenade from "./assets/grenade.mp3";
import crowd from "./assets/crowd.mp3";
import walking from "./assets/walking.mp3";
import night from "./assets/night.mp3";
import { ReactComponent as Settings } from "./assets/settings.svg";
import { ReactComponent as Home } from "./assets/home.svg";
import feet from './assets/feet.png';

function Grenade(props) {
    let music, amplitude, crowdSound, walkingSound, nightSound;
    let duration, current;
    let distanceSlider, quantitySlider, sizeSlider, progressBar;
    let img, size, distance;
    let x = [],
        y = [],
        segNum = 5,
        segLength = 170;

    const preload = (p5) => {
        music = p5.loadSound(grenade);
        crowdSound = p5.loadSound(crowd);
        walkingSound = p5.loadSound(walking);
        nightSound = p5.loadSound(night);
        img = p5.loadImage(feet);
    }

    for (let i = 0; i < segNum; i++) {
        x[i] = 0;
        y[i] = 0;
    }

    const setup = (p5, canvasParentRef) => {
        let cnv = p5.createCanvas(1600, 900).parent(canvasParentRef);
        cnv.mousePressed(toggleSound);

        duration = music.duration();

        let settingsDiv = document.getElementById("settings");

        progressBar = p5.createSlider(0, duration, 1);
        progressBar.addClass("grenade-progress-bar");
        progressBar.addClass("content");

        distanceSlider = p5.createSlider(0, 200, 120);
        distanceSlider.addClass("grenade-distance-slider");
        distanceSlider.addClass("grenade-setting-slider");
        let distanceLabel = document.createElement("div");
        distanceLabel.classList.add("label");
        distanceLabel.innerHTML = "people";
        settingsDiv.appendChild(distanceLabel);
        distanceSlider.parent(settingsDiv);

        quantitySlider = p5.createSlider(1, 10, 5, 1);
        quantitySlider.addClass("grenade-quantity-slider");
        quantitySlider.addClass("grenade-setting-slider");
        quantitySlider.mouseClicked(mouseClick);
        let quantityLabel = document.createElement("div");
        quantityLabel.classList.add("label");
        quantityLabel.innerHTML = "walking";
        settingsDiv.appendChild(quantityLabel);
        quantitySlider.parent(settingsDiv);

        sizeSlider = p5.createSlider(0, 500, 120);
        sizeSlider.addClass("grenade-size-slider");
        sizeSlider.addClass("grenade-setting-slider");
        let sizeLabel = document.createElement("div");
        sizeLabel.classList.add("label");
        sizeLabel.innerHTML = "crickets";
        settingsDiv.appendChild(sizeLabel);
        sizeSlider.parent(settingsDiv);

        music.play();
        crowdSound.loop();
        walkingSound.loop();
        nightSound.loop();

        crowdSound.setVolume(.01);
        walkingSound.setVolume(.015);
        nightSound.setVolume(.02);

        amplitude = new p5.constructor.Amplitude();
    }

    const draw = p5 => {

        distance = distanceSlider.value();
        let quantity = quantitySlider.value();
        size = sizeSlider.value();

        segLength = distance;
        segNum = quantity;

        p5.background(198, 224, 196);

        let level = amplitude.getLevel();
        let r = p5.map(level, 0, .2, 255, 73);
        let g = p5.map(level, 0, .2, 255, 116);
        let b = p5.map(level, 0, .2, 255, 88);

        p5.tint(r, g, b);
        dragSegment(p5, 0, p5.mouseX, p5.mouseY);
        for (let i = 0; i < x.length - 1; i++) {
            p5.tint(r - i * 5, g - i * 5, b - i * 5);
            dragSegment(p5, i + 1, x[i], y[i]);
        }

        let crowdVol = p5.map(distance, 0, 1, 0, .001);
        let walkingVol = p5.map(quantity, 0, 1, 0, .001);
        let nightVol = p5.map(size, 0, 1, 0, .001);

        crowdSound.setVolume(crowdVol);
        walkingSound.setVolume(walkingVol);
        nightSound.setVolume(nightVol);

        if (music.isPlaying()) {
            current = music.currentTime();
        }

        progressBar.value(current);
    }

    const mouseClick = () => {
        x = []; y = [];
        for (let i = 0; i < segNum; i++) {
            x[i] = 0;
            y[i] = 0;
        }
    }

    const dragSegment = (p5, i, xin, yin) => {
        const dx = xin - x[i];
        const dy = yin - y[i];
        const angle = p5.atan2(dy, dx);
        x[i] = xin - p5.cos(angle) * segLength;
        y[i] = yin - p5.sin(angle) * segLength;
        segment(p5, x[i], y[i], angle);
    }

    const segment = (p5, x, y, a) => {
        p5.push();
        p5.translate(x, y);
        p5.rotate(a);
        p5.image(img, -30, -30, size, size)
        p5.pop();
    }

    const toggleSound = () => {
        if (music.isPlaying()) {
            music.pause();
            crowdSound.pause();
            walkingSound.pause();
            nightSound.pause();
        } else {
            music.play();
            crowdSound.loop();
            walkingSound.loop();
            nightSound.loop();
        }
    }

    function stopSound() {
        music.stop();
        crowdSound.stop();
        walkingSound.stop();
        nightSound.stop();
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

    document.body.onkeyup = function(e){
        if (e.keyCode === 32){
            toggleSound();
        } else if (e.keyCode === 83) {
            toggleSettings();
        }
    }

    return (
        <div class="grenade">
            <div class="header">
                <Link to={props.path} onClick={stopSound}><Home /></Link>
                <Settings className="settings-button" onClick={toggleSettings} />
            </div>
            <div class="content">
                <h1 class="title"> La soirée dans Grenade </h1>
                <Sketch preload={preload} setup={setup} draw={draw} />
            </div>
            <div id="settings">
            </div>
        </div>
    );

}



export default Grenade;
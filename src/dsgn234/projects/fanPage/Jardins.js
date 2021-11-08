import React from 'react';
import { Link } from "react-router-dom";

import Sketch from "react-p5";

import "./jardins.css";
import "p5/lib/addons/p5.sound";
import jardins from "./assets/jardins.mp3";
import wind from "./assets/wind.mp3";
import rain from "./assets/rain.mp3";
import thunder from "./assets/thunder.mp3";
import { ReactComponent as Settings } from "./assets/settings.svg";
import { ReactComponent as Home } from "./assets/home.svg";

function Jardins(props) {

    let music, amplitude, windSound, rainSound, thunderSound;
    let duration, current;
    let distanceSlider, quantitySlider, sizeSlider, progressBar;

    const preload = (p5) => {
        music = p5.loadSound(jardins);
        windSound = p5.loadSound(wind);
        rainSound = p5.loadSound(rain);
        thunderSound = p5.loadSound(thunder);
    }

    const setup = (p5, canvasParentRef) => {
        let cnv = p5.createCanvas(1600, 900).parent(canvasParentRef);
        cnv.mousePressed(toggleSound);

        duration = music.duration();

        let settingsDiv = document.getElementById("settings");

        progressBar = p5.createSlider(0, duration, 1);
        progressBar.addClass("jardins-progress-bar");
        progressBar.addClass("content");

        distanceSlider = p5.createSlider(0, 200, 120);
        distanceSlider.addClass("jardins-distance-slider");
        distanceSlider.addClass("jardins-setting-slider");
        let distanceLabel = document.createElement("div");
        distanceLabel.classList.add("label");
        distanceLabel.innerHTML = "people";
        settingsDiv.appendChild(distanceLabel);
        distanceSlider.parent(settingsDiv);

        quantitySlider = p5.createSlider(1, 10, 5, 1);
        quantitySlider.addClass("jardins-quantity-slider");
        quantitySlider.addClass("jardins-setting-slider");
        let quantityLabel = document.createElement("div");
        quantityLabel.classList.add("label");
        quantityLabel.innerHTML = "walking";
        settingsDiv.appendChild(quantityLabel);
        quantitySlider.parent(settingsDiv);

        sizeSlider = p5.createSlider(0, 500, 120);
        sizeSlider.addClass("jardins-size-slider");
        sizeSlider.addClass("jardins-setting-slider");
        let sizeLabel = document.createElement("div");
        sizeLabel.classList.add("label");
        sizeLabel.innerHTML = "crickets";
        settingsDiv.appendChild(sizeLabel);
        sizeSlider.parent(settingsDiv);

        music.play();
        windSound.loop();
        rainSound.loop();
        thunderSound.loop();

        music.setVolume(.2);
        windSound.setVolume(.01);
        rainSound.setVolume(.015);
        thunderSound.setVolume(.02);

        amplitude = new p5.constructor.Amplitude();
    }

    const draw = p5 => {

        let distance = distanceSlider.value();
        let quantity = quantitySlider.value();
        let size = sizeSlider.value();

        p5.background(198, 224, 196);

        let level = amplitude.getLevel();
        let r = p5.map(level, 0, .2, 255, 73);
        let g = p5.map(level, 0, .2, 255, 116);
        let b = p5.map(level, 0, .2, 255, 88);

        let crowdVol = p5.map(distance, 0, 1, 0, .001);
        let walkingVol = p5.map(quantity, 0, 1, 0, .001);
        let nightVol = p5.map(size, 0, 1, 0, .001);

        windSound.setVolume(crowdVol);
        rainSound.setVolume(walkingVol);
        thunderSound.setVolume(nightVol);

        if (music.isPlaying()) {
            current = music.currentTime();
        }
        progressBar.value(current);
    }

    const toggleSound = () => {
        if (music.isPlaying()) {
            music.pause();
            windSound.pause();
            rainSound.pause();
            thunderSound.pause();
        } else {
            music.play();
            windSound.loop();
            rainSound.loop();
            thunderSound.loop();
        }
    }

    function stopSound() {
        music.stop();
        windSound.stop();
        rainSound.stop();
        thunderSound.stop();
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
        <div class="jardins">
            <div class="header">
                <Link to={props.path} onClick={stopSound}><Home /></Link>
                <Settings className="settings-button" onClick={toggleSettings} />
            </div>
            <div class="content">
                <h1 class="title"> Jardins sous la pluie </h1>
                <Sketch preload={preload} setup={setup} draw={draw} />
            </div>
            <div id="settings">
            </div>
        </div>
    );

}



export default Jardins;
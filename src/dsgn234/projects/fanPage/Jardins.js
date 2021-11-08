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
    let accelerationSlider, quantitySlider, sizeSlider, progressBar;

    let acceleration = 0.0098;
    let nDrops = 50;
    let drops = [];
    let size = 3;
    let p;

    const preload = (p5) => {
        music = p5.loadSound(jardins);
        windSound = p5.loadSound(wind);
        rainSound = p5.loadSound(rain);
        thunderSound = p5.loadSound(thunder);
    }

    const setup = (p5, canvasParentRef) => {
        p = p5;
        let cnv = p5.createCanvas(p5.displayWidth, p5.displayHeight).parent(canvasParentRef);
        cnv.mousePressed(toggleSound);

        duration = music.duration();

        for (let i = 0; i < nDrops; i++) {
            drops.push(new Drop(p5));
        }

        let settingsDiv = document.getElementById("settings");

        progressBar = p5.createSlider(0, duration, 1);
        progressBar.addClass("jardins-progress-bar");
        progressBar.addClass("content");

        accelerationSlider = p5.createSlider(0, 100, 20);
        accelerationSlider.addClass("jardins-accleration-slider");
        accelerationSlider.addClass("jardins-setting-slider");
        let accelerationLabel = document.createElement("div");
        accelerationLabel.classList.add("label");
        accelerationLabel.innerHTML = "wind";
        settingsDiv.appendChild(accelerationLabel);
        accelerationSlider.parent(settingsDiv);

        quantitySlider = p5.createSlider(1, 500, 200, 1);
        quantitySlider.addClass("jardins-quantity-slider");
        quantitySlider.addClass("jardins-setting-slider");
        quantitySlider.mouseClicked(mouseClick);
        let quantityLabel = document.createElement("div");
        quantityLabel.classList.add("label");
        quantityLabel.innerHTML = "rain";
        settingsDiv.appendChild(quantityLabel);
        quantitySlider.parent(settingsDiv);

        sizeSlider = p5.createSlider(5, 60, 20);
        sizeSlider.addClass("jardins-size-slider");
        sizeSlider.addClass("jardins-setting-slider");
        let sizeLabel = document.createElement("div");
        sizeLabel.classList.add("label");
        sizeLabel.innerHTML = "thunder";
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

        p5.clear();

        acceleration = accelerationSlider.value() / 100;
        nDrops = quantitySlider.value();
        size = sizeSlider.value();

        p5.background(205, 218, 228);

        let level = amplitude.getLevel();
        let mappedOpacity = p5.map(level, 0, .05, 30, 255);

        p5.fill(255, mappedOpacity);
        drops.forEach(function (d) {
            d.drawAndDrop();
        });

        let windVol = p5.map(level, 0, 1, 0, .1);
        let rainVol = p5.map(nDrops, 0, 1, 0, .001);
        let thunderVol = p5.map(size, 0, 1, 0, .005);

        windSound.setVolume(windVol);
        rainSound.setVolume(rainVol);
        thunderSound.setVolume(thunderVol);

        if (music.isPlaying()) {
            current = music.currentTime();
        }
        progressBar.value(current);
    }

    function Drop(p5) {

        this.p5 = p5;

        this.initX = function () {
            this.x = p5.random() * p5.width;
        };
        this.initY = function () {
            this.y = -p5.random() * p5.height / 3; // Initialise rain somewhat off the screen
        };

        this.initX();
        this.y = p5.random() * p5.height;

        this.length = p5.random() * 10;
        this.speed = p5.random();

        this.drawAndDrop = function () {
            this.draw();
            this.drop();
        };

        this.draw = function () {
            p5.noStroke();
            p5.triangle(this.x - size / 2, this.y, this.x + size / 2, this.y, this.x, this.y - size * 2)
            p5.arc(this.x, this.y, size, size, 0, p5.PI, p5.PIE);
        };

        this.drop = function () {
            if (this.y < p5.height) {
                this.y += this.speed;
                this.speed += acceleration;
            } else {
                this.speed = p5.random();
                this.initY();
                this.initX();
            }
        };
    }

    const mouseClick = () => {
        drops = [];
        for (let i = 0; i < nDrops; i++) {
            drops.push(new Drop(p));
        }
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

    document.body.onkeyup = function (e) {
        if (e.keyCode === 32) {
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
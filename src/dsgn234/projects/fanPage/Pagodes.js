import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Sketch from "react-p5";

import "./pagodes.css";
import "p5/lib/addons/p5.sound";
import pagodes from "./assets/pagodes.mp3";
import windchimes from "./assets/windchimes.mp3";
import birds from "./assets/birds.mp3";
import river from "./assets/river.mp3";
import { ReactComponent as Settings } from "./assets/settings.svg";
import { ReactComponent as Home } from "./assets/home.svg";
// import { ReactComponent as RightArrow } from "./assets/rightArrow.svg";
// import { ReactComponent as LeftArrow } from "./assets/leftArrow.svg";

function Pagodes(props) {

    document.title = "Pagodes";

    // const mounted = useRef();
    // useEffect(() => {
    //     if (!mounted.current) {
    //         // document.head.getElement "./fanpage/pentagon.svg";
    //         mounted.current = true;
    //     } else {
    //         // do componentDidUpdate logic
    //     }
    // });

    // document.getElementById("favicon").href = "./fanpage/pentagon.svg";

    let music, amplitude, windSound, birdSound, riverSound;
    let duration, current;
    let rotationSlider, heightSlider, opacitySlider, progressBar;
    let shapeSize = 500;

    const preload = (p5) => {
        music = p5.loadSound(pagodes);
        windSound = p5.loadSound(windchimes);
        birdSound = p5.loadSound(birds);
        riverSound = p5.loadSound(river);
    }

    const setup = (p5, canvasParentRef) => {
        let cnv = p5.createCanvas(p5.displayWidth, p5.displayHeight).parent(canvasParentRef);
        cnv.mousePressed(toggleSound);

        duration = music.duration();

        let settingsDiv = document.getElementById("settings");

        progressBar = p5.createSlider(0, duration, 1);
        progressBar.addClass("pagodes-progress-bar");
        progressBar.addClass("content");

        // ctrl + c and ctrl + v are easier than writing a function, lol
        rotationSlider = p5.createSlider(0, 360, 108);
        rotationSlider.addClass("pagodes-rotation-slider");
        rotationSlider.addClass("pagodes-setting-slider");
        let rotationLabel = document.createElement("div");
        rotationLabel.classList.add("label");
        rotationLabel.innerHTML = "windchimes";
        settingsDiv.appendChild(rotationLabel);
        rotationSlider.parent(settingsDiv);

        heightSlider = p5.createSlider(-p5.displayHeight / 4, p5.displayHeight / 2, 0);
        heightSlider.addClass("pagodes-size-slider");
        heightSlider.addClass("pagodes-setting-slider");
        let heightLabel = document.createElement("div");
        heightLabel.classList.add("label");
        heightLabel.innerHTML = "bird chatter";
        settingsDiv.appendChild(heightLabel);
        heightSlider.parent(settingsDiv);

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
        let height = heightSlider.value();
        let opacity = opacitySlider.value();

        p5.background(255, 236, 222); // 222

        let level = amplitude.getLevel();
        let size = p5.map(level, 0, 1, 20, shapeSize);
        let mappedOpacity = p5.map(opacity, 0, 255, 40, 255)

        p5.push();
        p5.angleMode(p5.DEGREES);
        p5.translate(p5.width / 2, p5.height / 2 - height);
        p5.rotate(rotation);
        p5.stroke(0, 0, 0, 0);
        p5.fill(255, 255, 255, mappedOpacity);
        polygon(p5, 0, 0, size, 5);
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

    document.body.onkeyup = function(e){
        if (e.keyCode === 32){
            toggleSound();
        } else if (e.keyCode === 83) {
            toggleSettings();
        }
    }

    return (
        <div class="pagodes">
            <div class="header">
                <Link to={props.path} onClick={stopSound}><Home /></Link>
                <Settings className="settings-button" onClick={toggleSettings} />
            </div>
            <div class="content">
                <h1 class="title"> Pagodes </h1>
                <Sketch preload={preload} setup={setup} draw={draw} />
                {/* <Link to={`${props.path}/jardins`} onClick={stopSound}><LeftArrow className="nav-arrows left-arrow"/></Link>
                <Link to={`${props.path}/grenade`} onClick={stopSound}><RightArrow className="nav-arrows right-arrow"/></Link> */}
            </div>
            <div id="settings">
            </div>
        </div>
    );

}



export default Pagodes;
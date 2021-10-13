import React, { useState } from 'react';
import "./memories.css";

function Wikipedia() {

    return (
        <div class="memories">
            <h1>my first memory of the internet</h1>
            <div class="question-container">
                <div class="text">Nika: What do you remember?</div>
                <div class="text">Egret: Well, I remember playing games on the computers at the public library</div>
            </div>

            <div class="games-container">
                <div class="game-container">
                    <img src="./memories/poptropica.gif" alt="poptropica gif" />
                    poptropica
                </div>
                <div class="game-container">
                    <img src="./memories/penguin.gif" alt="club penguin gif" />
                    club penguin
                </div>
                <div class="game-container">
                    <img src="./memories/webkinz.gif" alt="webkinz gif" />
                    webkinz
                </div>
            </div>

            <div class="question-container">
                <div class="text">Egret: I also remember making an email for the first time</div>
            </div>

            <form action="javascript:alert('Created email! :)')">
                <label for="fname">First name:</label><br />
                <input type="text" name="fname" value="John" /><br />
                <label for="lname">Last name:</label><br />
                <input type="text" name="lname" value="Doe" /><br />
                <label for="email">Email:</label><br />
                <input type="text" name="email" value="email@email.com" /><br /><br />
                <input type="submit" value="Submit" />
            </form>

            <div class="question-container">
                <div class="text">Egret: It was a fun place to be</div>
            </div>

            <a href="./">
                <img class="egg" src="./egg.gif" alt="egg gif" />
            </a>
        </div>
    )

}



export default Wikipedia;
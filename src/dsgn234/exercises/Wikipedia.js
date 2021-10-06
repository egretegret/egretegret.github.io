import React, { useState } from 'react';
// import "./wikipedia.css";
// import "./wikipedia.css";

function Wikipedia() {

    const [css, setcss] = useState("./wikipedia.css");


    const toggleCSS = () => {
        if (css === "./wikipedia2.css") {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            setcss("./wikipedia.css")
        } else {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            setcss("./wikipedia2.css")
        }
    }

    window.addEventListener('load', (event) => {
        console.log('page is fully loaded');
        var tooltipSpan = document.getElementById("tooltipmove");

        window.onmousemove = function (e) {
            var x = e.clientX,
                y = e.clientY;
            tooltipSpan.style.top = (y + 20) + 'px';
            tooltipSpan.style.left = (x + 20) + 'px';
        };
      });


    return (
        <div class="wikipedia" onClick={toggleCSS}>
            <span class="tooltip" id="tooltipmove">click to toggle between different stylesheets</span>
            <link rel="stylesheet" type="text/css" href={css} />
            {/* <button onClick={toggleCSS}> toggle </button> */}
            <div class="content-container">
                <h1 class="title">Poached egg</h1>
                <div class="section">
                <p>
                    A poached egg is an egg that has been cooked, outside the shell, by poaching (or <span class="yolk">sometimes </span> 
                    steaming), as opposed <span class="yolk">to simmering</span> or boiling. This method <span class="yolk">of 
                    preparation</span> can yield more delicately <span class="yolk">cooked</span> eggs than cooking at higher 
                    temperatures such as with boiling water.
                </p>
                </div>
                <h2>Preparation</h2>
                <div class="section">
                    <div class="section-left">
                    <p>
                        The egg is cracked into a cup or bowl of any size, and then gently slid into a pan of water at
                        approximately 75° C (167 °F) and cooked until the egg white has mostly solidified, but the yolk
                        remains <span class="yolk">soft. The</span> "perfect" poached egg <span class="yolk">has a runny yolk,
                        </span> with a hardening <span class="yolk">crust and no </span>raw white
                        remaining. In <span class="yolk">countries</span> that mandate universal salmonella vaccination for hens, 
                        eating eggs with a runny yolk is deemed safe for consumption. <br /><br />
                        Broken into water at the poaching temperature, <span class="yolk">the white</span> will cling to the yolk, resulting 
                        <span class="yolk"> in </span>cooked
                        egg white and runny yolk. <br /><br />
                        Any given chicken egg contains some egg white that is prone to dispersing into the poaching liquid
                        and cooking into an undesirable <span class="yolk">foam.</span> To prevent this, the <span class="yolk">egg can be </span> 
                        strained beforehand <span class="yolk">to remove </span>
                        the thinner component <span class="yolk">of the egg white.</span> A small amount <span class="yolk">of vinegar </span> 
                        may also be added to <span class="yolk">the </span> water, as
                        its acidic qualities accelerate the poaching process. Stirring the water vigorously to create a vortex
                        may also reduce dispersion.
                    </p>
                    </div>
                    <div class="section-right">
                    <div class="image-container">
                        <img src="https://img.taste.com.au/9VSyAbpm/taste/2018/05/how-to-poach-eggs-141318-2.jpg" alt="egg being poached" />
                        <div class="caption">
                            An egg being slowly poured into a ring mould in a pot of simmering water
                        </div>
                    </div>
                    </div>
                </div>
                <h2>Steamed</h2>
                <div class="section">
                    <p>
                        The term "poaching" is used for this method but is actually incorrect. The egg is placed in a cup and
                        suspended over simmering water, using a special pan called an "egg-poacher". This is usually a
                        wide-bottomed pan with <span class="yolk">an </span>inner lid, with holes containing
                        <span class="yolk"> a number </span>of circular cups that each <span class="yolk">hold
                        one egg, </span>with an additional <span class="yolk">lid over the top. </span>To cook, the pan 
                        is <span class="yolk">filled with</span> water and brought to a <span class="yolk">simmer, </span>or a gentle boil. 
                        The outer lid holds in the steam, ensuring that the heat surrounds the egg completely. The cups 
                        are often lubricated with butter in order to effect easy removal of the cooked
                        egg, although non-stick egg poachers are also available. <br /><br />
                        The result is very similar to the traditional coddled egg, although these <span class="yolk">steamed eggs </span> 
                        are often cooked for <span class="yolk">longer, and</span> hence are firmer. Eggs so 
                        prepared are often served on buttered toast.
                    </p>
                </div>
                <h2>Dishes with poached eggs</h2>
                <div class="section">
                <div class="section-right">
                    <ul>
                        <li>Poached eggs are used in the traditional American breakfast dish <span class="italic">Eggs Benedict.</span><br /></li>
                        <li>Poached eggs are the basis for many dishes in Louisiana Creole cuisine, such as <span class="italic">Eggs Sardou,
                            Eggs Portuguese, Eggs Hussarde and Eggs St. Charles.</span> Creole poached egg dishes are typically
                            served for brunches.<br /></li>
                        <li>Several cuisines include eggs poached in soup or broth and served in the soup. In parts of
                            central Colombia, for instance, a popular breakfast item is eggs poached in a scallion/coriander
                            broth with milk, known as <span class="italic">changua</span> or simply <span class="italic">caldo de huevo</span> ("egg soup").<br /></li>
                        <li>The North African dish <span class="italic">shakshouka</span> consists of eggs poached in a spicy tomato sauce.<br /></li>
                        <li>In Italy poached eggs are typically seasoned with grated parmigiano reggiano and butter
                            (or olive oil).<br /></li>
                        <li>In Portugal poached eggs are known as <span class="italic">ovos escalfados</span> and are typically done with boiled peas
                            and chouriço.<br /></li>
                        <li>In Korean cuisine, poached eggs are known as <span class="italic">suran (수란)</span> and is topped with variety of garnishes
                            such as chili threads, rock tripe threads, and scallion threads.<br /></li>
                        <li>Turkish dish <span class="italic">çılbır</span> consists of poached eggs, yogurt sauce with garlic and butter with red peppers.<br /></li>
                        <li>In India, fried eggs are most commonly called "poached," but are sometimes also known as <span class="italic">bullseyes</span>,
                            as a reference to "bullseye" targets, or "half-boil" in Southern India, indicating that they are
                            partly cooked. These eggs are "poached" in name only and so do not share the same preparation
                            method as poached eggs in other countries.<br /></li>
                        <li>In Indonesia, poached eggs are staple condiment in instant noodle dish. Boiled together with the
                            instant noodle in the pan, when its ready, then mixed with the seasoning from the instant noodle package.</li>
                    </ul>
                    </div>
                    <div class="section-left">
                <div class="image-container">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Eggs_Benedict.jpg/330px-Eggs_Benedict.jpg" alt="eggs benedict" />
                        <div class="caption">
                        Eggs Benedict, a dish often served for breakfast or brunch.
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Suran.jpg/330px-Suran.jpg" alt="suran" />
                        <div class="caption">
                        A garnished poached egg in broth
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )

}



export default Wikipedia;
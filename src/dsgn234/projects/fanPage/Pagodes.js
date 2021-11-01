import React, { useState } from 'react';


function Pagodes(props) {

    return (
        <div class="pagodes">
             displaying pagodes
             <div class="home-button" onClick={()=>props.setDisplay(0)}>home</div>
        </div>
    );

}



export default Pagodes;
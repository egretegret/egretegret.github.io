import './App.css';
import React from 'react';
import './styles/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1 className="header">
                    <span style={{ color: '#FFF' }}>eg</span>
                    <span style={{ color: '#000' }}>ret</span>
                </h1>
                <div className="selection-container">
                    <div className="selection-component">
                        <img className="egg1" src="./egg1.png" alt="animated egg gif"
                            onMouseOver={e => (e.currentTarget.src = "./egg.gif")}
                            onMouseOut={e => (e.currentTarget.src = "./egg1.png")}></img>
                        <h2>programming</h2>
                    </div>
                    <div className="selection-component">
                        <img className="egg2" src="./egg2.png" alt="animated egg gif"
                            onMouseOver={e => (e.currentTarget.src = "./egg.gif")}
                            onMouseOut={e => (e.currentTarget.src = "./egg2.png")}></img>
                        <h2>about</h2>
                    </div>
                    <div className="selection-component">
                        <img className="egg3" src="./egg3.png" alt="animated egg gif"
                            onMouseOver={e => (e.currentTarget.src = "./egg.gif")}
                            onMouseOut={e => (e.currentTarget.src = "./egg3.png")}></img>
                        <h2>design</h2>
                    </div>
                </div>
            </div>

        );
    }

}

export default Home;
import React from 'react';
import './hoveractivity.css';

class HoverActivity extends React.Component {

    state = {
        text: "where was I today?",
        span: ""
    }

    onMouseOver (e) {
        this.setState({
            text: "today I was",
            span: "home"
        })
    };

    onMouseOut (e) {
        this.setState({
            text: "where was I today?",
            span: ""
        })
    }

    render() {
        return (
            <div className="hoveractivity">
                <button class="btn-challenge" onMouseEnter={this.onMouseOver.bind(this)} onMouseLeave={this.onMouseOut.bind(this)}>
                    <small>{this.state.text}</small>
                    <span>{this.state.span}</span>
                    <div class="hover-area">
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="hover-col"></div>
                        <div class="icon-home">
                            <div class="roof roof-1"></div>
                            <div class="roof roof-2"></div>
                            <div class="roof-design roof-design-1"></div>
                            <div class="roof-design roof-design-2"></div>
                            <div class="roof-side roof-side-1"></div>
                            <div class="roof-side roof-side-2"></div>
                            <div class="roof-wall roof-wall-1"></div>
                            <div class="roof-wall roof-wall-2"></div>
                            <div class="wall wall-1"></div>
                            <div class="wall wall-2"></div>
                            <div class="wall wall-3"></div>
                            <div class="wall wall-4"></div>
                            <div class="door"></div>
                            <div class="floor"></div>
                        </div>
                    </div>
                </button>
            </div>

        );
    }

}

export default HoverActivity;
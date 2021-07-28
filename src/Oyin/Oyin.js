import './Oyin.css';

import React, { Component } from 'react'

export default class oyin extends Component {
    constructor(props) {
        super(props);
        this.state = { display: "", text: "" }
    }

    text = (event) => {
        console.log(event.target.value);
        this.setState((state) => {
            return { text: event.target.value }
        })
    }

    farq = () => {
        this.setState((state) => {
            if (this.state.text > 25) return { display: "Son katta", text: "" };
            else if (this.state.text < 25) return { display: "Son kichik", text: "" };
            else if (this.state.text == 25) return { display: "Sonni topdingiz!", text: "" }
        })

    }
    render() {
        return (
            <div className="oyin">
                <p className="head">10ta imkoniyatingiz bor</p>
                <p className="text-center display">{this.state.display}</p>
                <input type="text" placeholder="Sonni kiriting" className="input" value={this.state.text} onChange={this.text} />
                <button className="button" onClick={this.farq}>Topdim</button>
            </div>
        )
    }
}
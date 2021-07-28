import './Oyin.css';

import React, { Component } from 'react'

export default class Oyin extends Component {
    constructor(props) {
        super(props);
        this.state = { display: "", text: "", count: "10" }
    }

    text = (event) => {
        console.log(event.target.value);
        this.setState((state) => {
            return { text: event.target.value }
        })
    }

    farq = () => {
        this.setState((state) => {
            if (this.state.text != "") {
                if (this.state.text > 25) return { display: "Son katta", text: "", count: this.state.count - 1 };
                else if (this.state.text < 25) return { display: "Son kichik", text: "", count: this.state.count - 1 };
                else if (this.state.text == 25) return { display: "Sonni topdingiz!", text: "", count: "10" };
            }
            else return { display: "Son kiritilmagan", text: "", count: this.state.count }
        })
    }

    render() {
        return (
            <div className="oyin">
                <p className="head">{this.state.count} imkoniyatingiz bor</p>
                <p className="text-center display">{this.state.display}</p>
                <input type="number" placeholder="Sonni kiriting" className="input" value={this.state.text} onChange={this.text} />
                <button className="button" onClick={this.farq}>Topdim</button>
            </div>
        )
    }
}
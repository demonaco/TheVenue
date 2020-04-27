import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ["Balcony", "Medium", "Star"],
        desc: [
            "hi this is all temporary text blah blah blah blah",
            "hi this is more text baskdasjda",
            "even more text fahsdasjdnasjdnas"
        ],
        linkto: ["http://sales/b", "https://sales/m", "https://sales/s"],
    }

    showboxes = () => (
        this.state.prices.map((box, i) => {
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
        <span>${this.state.prices[i]}</span>
        <span>${this.state.positions[i]}</span>
            </div>
                    <div className="pricing_description">
                            {this.state.desc[i]}
                    </div>
                    <div className="pricing_buttons">
                    
                    </div>
                </div>
            </div>
        })

    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        <MyButton
                            text="Purchase"
                            bck="#ffa800"
                            color="#fffffff"
                            link={this.state.linkto[i]}
                        />
                </div>
                </div>
            </div>
        );
    }
}

export default Pricing;
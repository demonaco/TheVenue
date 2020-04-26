import React, { Component } from 'react';

class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ["Balcony", "Medium", "Star"],
        desc: [
            "hi this is all temporary text blah blah blah blah",
            "hi this is more text baskdasjda",
            "even more text fahsdasjdnasjdnas"
        ]
    }

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                <div className="pricing_wrapper">
                    boxes
                </div>
                 </div>        
            </div>
        );
    }
}

export default Pricing;
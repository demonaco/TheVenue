import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ["Balcony", "Medium", "Star"],
        desc: [
            "It's the cheap seats folks.. bring your binoculars!",
            "Right in the middle of the action. This section has the best acoustics.",
            "Be right front in center of Ariana!"
        ],
        linkto: ["/", "/", "/"],
        delay: [500, 0, 500]
    }

    showboxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i]} > 
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
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#fffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))

    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showboxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;
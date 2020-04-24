import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Discount = () => {
    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade>
                <div className="discount_percentage">
                    <span>15%</span>
                    <span>OFF</span>
                </div>
                </Fade>

                    <Slide>
                    <div className="discount_description">
                        <h3>Purchase tickets before December 25th</h3>
                        <p>This is some filler text here</p>

                        <div>
                            Button
                        </div>
                    </div>
                    </Slide>
                </div>
            </div>
    );
};

export default Discount;
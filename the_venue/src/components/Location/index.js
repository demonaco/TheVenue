import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
            title="venueLocation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.3328162138455!2d-118.34131658507316!3d34.11222842201453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf1bc1270933%3A0x6a6f62cf3836e2fd!2sHollywood%20Bowl!5e0!3m2!1sen!2sus!4v1588206592914!5m2!1sen!2sus" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen="true"           >

            </iframe>

            <div className="location_tag">
                <div>LOCATION</div>
            </div>

        </div>
    );
};

export default Location;
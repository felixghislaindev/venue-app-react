import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.834920062509!2d-0.2946995842303773!3d51.49789677963362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc69c931603f10325!2sGunnersbury+Park!5e0!3m2!1sen!2suk!4v1533997558804" 
        width="100%" 
        height="500px" frameBorder="0" 
        allowFullscreen>
        </iframe>

        <div className='location_tag'>
            <div>Location</div>
        </div>
            
        </div>
    );
};

export default Location;
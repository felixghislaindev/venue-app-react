import React from 'react';
import Fade from 'react-reveal/Fade'

const Footer = () => {
    return (
        
        <footer className='back_red' >
        <Fade delay={500}>
        <div className='font_rightteaous footer_logo_venue'>Ticket Seller</div>
        <div className='footer_copyright'>
          Ticket Seller 2018.All rights reserved.
        </div>
        </Fade>
        </footer>
       
    );
};

export default Footer;
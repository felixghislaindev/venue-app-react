import React from 'react';
import Carrousel from './Carrousel'
import Countdown from './Countdown'

const Featured = () => {
  
    return (
        <div style={{
            position: 'relative'
        }}>
        <Carrousel />
        <div className= 'artist_name'>
            <div className='wrapper'>
            URBAN SPACE
            </div>
        </div>
            
        <Countdown></Countdown>
        </div>
    );
};

export default Featured;
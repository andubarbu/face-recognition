import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0 tc'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 30 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa4">
                    <img src={brain} alt='logo' id='logo'/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;
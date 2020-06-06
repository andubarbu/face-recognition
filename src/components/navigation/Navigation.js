import React from 'react';

const Navigation  = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn === true) {
        return (
            <nav style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                <p
                onClick={() => onRouteChange('signin')}
                className='f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-start'}}>
                <p
                onClick={() => onRouteChange('signin')}
                className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p
                onClick={() => onRouteChange('register')}
                className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        );
    }
}
export default Navigation;
import React from 'react';
import './facerecognition.css'

const FaceRecognition = ({ box, imgUrl }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img className='ranked center br4 shadow-5' id='inputImage' alt='' src={imgUrl} width='500px' height='auto'/>
                <div className='bounding-box'
                style={{top: box.topRow, 
                    left: box.leftCol, 
                    right: box.rightCol, 
                    bottom: box.bottomRow}}
                ></div>
            </div>
        </div>
    );
}

export default FaceRecognition;
import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 white ranked pa3 br4 shadow-5'>
                {'This program will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='ranked center pa4 br4 shadow-5'>
                    <input type='text' className='f4 pa2 w-80 center' onChange={onInputChange}/>
                    <button className='w-20 f4 link white'
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;
import React from 'react';
import '../App.css';

const KeysFrame = ({style}) => {
  return (
    <div className='keys-frame' style={{...style}}>
      <div className='keys-label'>Keys:</div>
      <div className='keys-container'>
        <div className='keys-group'>
          <div className='keys-item'>
            <input type='checkbox' className='keys-checkbox' />
            <div className='keys-color keys-color-1' />
            <div className='keys-text'>Inv. Equal or Below 0</div>
          </div>
          <div className='keys-item'>
            <input type='checkbox' className='keys-checkbox' />
            <div className='keys-color keys-color-2' />
            <div className='keys-text'>Inv. Between 0 - Minimum</div>
          </div>
          <div className='keys-item'>
            <input type='checkbox' className='keys-checkbox' />
            <div className='keys-color keys-color-3' />
            <div className='keys-text'>Inv. Between Min - Target</div>
          </div>
          <div className='keys-item'>
            <input type='checkbox' className='keys-checkbox' />
            <div className='keys-color keys-color-4' />
            <div className='keys-text'>Inv. Between Target - Max</div>
          </div>
          <div className='keys-item'>
            <input type='checkbox' className='keys-checkbox' />
            <div className='keys-color keys-color-5' />
            <div className='keys-text'>Inv. Above Maximum</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeysFrame;

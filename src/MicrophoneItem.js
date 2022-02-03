import React from 'react';

export default function MicrophoneItem({ microphone }) {
  return <div className='microphone-item'>
    <h2>{microphone.make_model} {microphone.model}</h2>
    <h3>{microphone.type}</h3>
    <h4>{microphone.country}</h4>
  </div>;
}

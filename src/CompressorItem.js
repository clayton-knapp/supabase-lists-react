import React from 'react';

export default function CompressorItem({ compressor }) {
  return <div className='microphone-item'>
    <h2>{compressor.make_model} {compressor.model}</h2>
    <h3>{compressor.type}</h3>
    <h4>Owner: {compressor.owner_id.name}</h4>
  </div>;
}

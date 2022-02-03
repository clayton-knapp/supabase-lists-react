import React from 'react';
import CompressorItem from './CompressorItem';

export default function CompressorsList({ compressors }) {
  return <>
    <h1>Compressors and their Owner:</h1>
    <div className='list'>
      {
        compressors.map((compressor, i) =>
          <CompressorItem key={compressor + i}
            compressor={compressor}
          />
        )
      }
    </div>    
  </>;
}

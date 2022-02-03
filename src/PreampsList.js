import React from 'react';
import PreampItem from './PreampItem';

export default function PreampsList({ preamps }) {
  return <>
    <h1>Preamps:</h1>
    <div className='list'>
      {
        preamps.map((preamp, i) =>
          <PreampItem key={preamp + i}
            preamp={preamp}
          />
        )
      }
    </div>    
  </>;
}

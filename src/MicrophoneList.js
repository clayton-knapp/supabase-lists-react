import React from 'react';
import MicrophoneItem from './MicrophoneItem';

export default function MicrophoneList({ microphones }) {



  return <>
    <h1>Microphones:</h1>
    <div className='list'>
      {
        microphones.map((microphone, i) =>
          <MicrophoneItem key={microphone + i}
            microphone={microphone}
          />
        )
      }
    </div>    
  </>;
}

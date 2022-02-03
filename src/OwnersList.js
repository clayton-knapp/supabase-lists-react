import React from 'react';
import OwnerItem from './OwnerItem';

export default function OwnersList({ owners }) {
  return <>
    <h1>Owners:</h1>
    <div className='list'>
      {
        owners.map((owner, i) =>
          <OwnerItem key={owner + i}
            owner={owner}
          />
        )
      }
    </div>    
  </>;
}

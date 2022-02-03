import React from 'react';

export default function PreampItem({ preamp }) {
  return <div className='microphone-item'>
    <h2>{preamp.make_model} {preamp.model}</h2>
    <h3>{preamp.country}</h3>
    <h4>Reviews:</h4>
    {
      preamp.reviews.map((review, i) =>
        <p key={review + i}>&lsquo;{review}&lsquo;</p>
      )
    }
  </div>;
}

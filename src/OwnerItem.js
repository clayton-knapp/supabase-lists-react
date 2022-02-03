import React from 'react';

export default function OwnerItem({ owner }) {
  return <div className='microphone-item'>
    <h2>{owner.name}</h2>
    <h3>Ownership: {owner.percentage}</h3>
    <h4>Joined: {owner.year_joined}</h4>
    <h4>Hair Color: {owner.hair_color}</h4>
  </div>;
}

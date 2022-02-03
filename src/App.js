import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

import MicrophoneList from './MicrophoneList';
import PreampsList from './PreampsList';

import { fetchMicrophones, fetchPreamps } from './services/fetch-utils';



function App() {
  //STATE
  const [microphones, setMicrophones] = useState([]);
  const [preamps, setPreamps] = useState([]);


  //STORE IN STATE FUNCTIONS 
  async function storeMicrophones() {
    //calls our fetch function & stores data in temp variable
    const data = await fetchMicrophones();
    //stores the data in React state
    setMicrophones(data);
  }

  async function storePreamps() {
    const data = await fetchPreamps();
    setPreamps(data);
  }



  //useEffect On Load
  useEffect(() => {
    //calls store microphones
    storeMicrophones();
    storePreamps();
  }, []);
  
    //I think this would be acceptable?
  // useEffect(storeMicrophones, []);




  return (
    <div className="App">
      <MicrophoneList
        microphones={microphones}
      />
      <PreampsList
        preamps={preamps}
      />

    </div>
  );
}

export default App;

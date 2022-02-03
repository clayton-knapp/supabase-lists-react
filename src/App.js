import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

import MicrophoneList from './MicrophoneList';
import PreampsList from './PreampsList';
import CompressorsList from './CompressorsList';
import OwnersList from './OwnersList';

import { fetchCompressorsAndOwners, fetchMicrophones, fetchOwners, fetchPreamps } from './services/fetch-utils';



function App() {
  //STATE
  const [microphones, setMicrophones] = useState([]);
  const [preamps, setPreamps] = useState([]);
  const [compressors, setCompressors] = useState([]);
  const [owners, setOwners] = useState([]);


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

  async function storeCompressors() {
    const data = await fetchCompressorsAndOwners();
    setCompressors(data);
  }

  async function storeOwners() {
    const data = await fetchOwners();
    setOwners(data);
  }


  //useEffect On Load
  useEffect(() => {
    //calls store microphones
    storeMicrophones();
    storePreamps();
    storeCompressors();
    storeOwners();
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
      <CompressorsList
        compressors={compressors}
      />
      <OwnersList
        owners={owners}
      />

    </div>
  );
}

export default App;

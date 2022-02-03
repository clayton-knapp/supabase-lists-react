import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

import MicrophoneList from './MicrophoneList';

import { fetchMicrophones } from './services/fetch-utils';



function App() {
  //STATE
  const [microphones, setMicrophones] = useState([]);


  //STORE IN STATE FUNCTIONS 

  async function storeMicrophones() {
    //calls our fetch function & stores data in temp variable
    const data = await fetchMicrophones();

    //stores the data in React state
    setMicrophones(data);
  }



  //useEffect On Load
  useEffect(() => {
    storeMicrophones();
    // return () => {
    //   second;
    // };
  }, []);
  




  return (
    <div className="App">
      <MicrophoneList
        microphones={microphones}
      />
    </div>
  );
}

export default App;

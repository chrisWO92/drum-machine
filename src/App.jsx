import React, { useState } from 'react'
import './App.css';
import DrumControls from './components/drum-controls/DrumControls';
import DrumKeys from './components/drum-keys/DrumKeys';

function App() {

  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(0.5);

  return (
    <div id='drum-machine'>
      <DrumKeys
        power={power}
        volume={volume}
        setDisplay={setDisplay}
      />
      <DrumControls
        power={power}
        display={display}
        volume={volume}
        setPower={setPower}
        setDisplay={setDisplay}
        setVolume={setVolume}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import './App.css';
import DrumControls from './components/drum-controls/DrumControls';
import DrumKeys from './components/drum-keys/DrumKeys';

function App() {

  const [power, setPower] = useState(true);
  //const [bank, setBank] = useState(true);
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(0.5);

  // const keyQHandler = () => {
  //   let audio = document.getElementById("Q");
  //   audio.load();
  //   if (power) {
  //     //audio.volume = volume;
  //     audio.play();
  //     setDisplay('Heater 1');
  //     //display = "Heater 1";
  //   }
  // }

  return (
    <div id='drum-machine'>
      <DrumKeys
        power={power}
        //display={display}
        volume={volume}
        setDisplay={setDisplay}
        //keyQHandler={keyQHandler}
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

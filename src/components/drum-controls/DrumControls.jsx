import React from 'react'
import './drum-controls.css'

const DrumControls = ({power, display, volume, setPower, setDisplay, setVolume}) => {

    const powerHandler = () => {
        setPower(!power);
        if (power){
            setDisplay("");
        }
    }

    const changeHandler = (e) => {
        setVolume(e.target.value);
        setDisplay(Math.round(volume*100));
    }

  return (
    <div id='drum-controls'>
        <span className='button-text'>Power</span>
        <div className="select">
            <div
                className={
                    `
                      selector
                      ${
                        power
                        ? "float-left"
                        : "float-right"
                       }
                    `
                }
                onClick={powerHandler}
            >
            </div>
        </div>
        <div id="display">{display}</div>
        <div className="volume-slider">
            <input 
                max="1" 
                min="0" 
                step="0.01" 
                type="range"
                id="input-range"
                onChange={changeHandler}
            />
        </div>
    </div>
  )
}

export default DrumControls

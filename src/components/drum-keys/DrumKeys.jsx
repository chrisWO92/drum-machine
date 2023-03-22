import React, { useEffect, useRef } from 'react'
import './drum-keys.css'

const DrumKeys = ({power, volume, display, setDisplay}) => {
    
    const q = useRef();
    const w = useRef();
    const e = useRef();
    const a = useRef();
    const s = useRef();
    const d = useRef();
    const z = useRef();
    const x = useRef();
    const c = useRef();

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
    });

    const keyQHandler = () => {
        q.current.load();
        if (!power) {
          q.current.volume = volume;
          q.current.play();
          setDisplay('Heater 1');
        }
    }

    const keyWHandler = () => {
        w.current.load();
        if (!power) {
          w.current.volume = volume;
          w.current.play();
          setDisplay("Heater 2");
        }
    }

    const keyEHandler = () => {
        e.current.load();
        if (!power) {
          e.current.volume = volume;
          e.current.play();
          setDisplay("Heater 3");
        }
    }

    const keyAHandler = () => {
        a.current.load();
        if (!power) {
          a.current.volume = volume;
          a.current.play();
          setDisplay("Heater 4");
        }
    }

    const keySHandler = () => {
        s.current.load();
        if (!power) {
          s.current.volume = volume;
          s.current.play();
          setDisplay("Clap");
        }
    }

    const keyDHandler = () => {
        d.current.load();
        if (!power) {
          d.current.volume = volume;
          d.current.play();
          setDisplay("Open HH");
        }
    }

    const keyZHandler = () => {
        z.current.load();
        if (!power) {
          z.current.volume = volume;
          z.current.play();
          setDisplay("Kick n Hat");
        }
    }

    const keyXHandler = () => {
        x.current.load();
        if (!power) {
          x.current.volume = volume;
          x.current.play();
          setDisplay("Kick");
        }
    }

    const keyCHandler = () => {
        c.current.load();
        if (!power) {
          c.current.volume = volume;
          c.current.play();
          setDisplay("Closed HH");
        }
    }

    const handleKeyDown = (e) => {
        let key = e.key.toUpperCase();
        switch (key) {
          case 'Q':
            keyQHandler();
            break;
          case 'W':
            keyWHandler();
            break;
          case 'E':
            keyEHandler();
            break;
          case 'A':
            keyAHandler();
            break;
          case 'S':
            keySHandler();
            break;
          case 'D':
            keyDHandler();
            break;
          case 'Z':
            keyZHandler();
            break;
          case 'X':
            keyXHandler();
            break;
          case 'C':
            keyCHandler();
            break;
          default:
            keyCHandler();
            break;
        }
    }

  return (
    <div id='drum-keys'>
        <div className="drum-pad" id='keyQ' onClick={keyQHandler}>
            Q
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" ref={q}/>
        </div>
        <div className="drum-pad" id='keyW' onClick={keyWHandler}>
            W
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" ref={w}/>
        </div>
        <div className="drum-pad" id='keyE' onClick={keyEHandler}>
            E
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" ref={e}/>
        </div>
        <div className="drum-pad" id='keyA' onClick={keyAHandler}>
            A
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" ref={a}/>
        </div>
        <div className="drum-pad" id='keyS' onClick={keySHandler}>
            S
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" ref={s}/>
        </div>
        <div className="drum-pad" id='keyD' onClick={keyDHandler}>
            D
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" ref={d}/>
        </div>
        <div className="drum-pad" id='keyZ' onClick={keyZHandler}>
            Z
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" ref={z}/>
        </div>
        <div className="drum-pad" id='keyX' onClick={keyXHandler}>
            X
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" ref={x}/>
        </div>
        <div className="drum-pad" id='keyC' onClick={keyCHandler}>
            C
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" ref={c}/>
        </div>
    </div>
  )
}

export default DrumKeys

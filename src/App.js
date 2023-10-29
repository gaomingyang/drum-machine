import { useState,useRef, useEffect } from 'react';
import './App.scss';

import ButtonList from "./components/ButtonList";

function App() {
  // const buttons = [
  //   {btn:"Q",audio:"/auidos/Heater-1.mp3"},
  //   {btn:"W",audio:"/auidos/Heater-2.mp3"},
  //   {btn:"E",audio:"/auidos/Heater-3.mp3"},
  //   {btn:"A",audio:"/auidos/Heater-4_1.mp3"},
  //   {btn:"S",audio:"/auidos/Heater-6.mp3"},
  //   {btn:"D",audio:"/auidos/Dsc_Oh.mp3"},
  //   {btn:"Z",audio:"/auidos/Kick_n_Hat.mp3"},
  //   {btn:"X",audio:"/auidos/RP4_KICK_1.mp3"},
  //   {btn:"C",audio:"/auidos/Cev_H2.mp3"},
  // ];
  const [audioName,setAudioName] = useState("")

  const buttons = [
    { btn: "Q", name: "Heater 1", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    { btn: "W", name: "Heater 2", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
    { btn: "E", name: "Heater 3", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
    { btn: "A", name: "Heater 4", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
    { btn: "S", name: "Clap", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
    { btn: "D", name: "Open HH", audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
    { btn: "Z", name: "Kick n' Hat", audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
    { btn: "X", name: "Kick", audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
    { btn: "C", name: "Closed HH", audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
  ];

  // const audioRefs = {}
  // buttons.forEach((button)=>{
  //   audioRefs[button.btn]= useRef(null)
  // })

  // const btntable = buttons.map((b)=>{
  //   <Btn ></Btn>
  // })

  useEffect(() => {
    console.log("init effect")

    //监听按键
    const handleKeyPress = (e) => {
      const keyPressed = e.key.toUpperCase();
      console.log("按下了：", keyPressed)
      // if (audioRefs[keyPressed]) {
      //   audioRefs[keyPressed].current.play();
      // }
    }

    window.addEventListener('keydown', handleKeyPress);

    //避免一直
    // return () => {
    // window.removeEventListener('keydown', handleKeyPress);
    // };

  }, [])

  function displayButtonName(name) {
    console.log("displayButtonName")
    console.log("in app",name)
    setAudioName(name)
  }


  // function clickButton(event) {
  //   console.log("mouse click button")
  //   console.log(event)
  //   const clickedDiv = event.currentTarget;

  // let btn = event.target.innerText
  // console.log(btn)

  // //播放音乐
  // const audioElement = clickedDiv.querySelector('audio');
  // // 播放音频
  // if (audioElement) {
  //   audioElement.play();
  // }
  // }

  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        <div id="buttons">
          <ButtonList buttons={buttons} displayButtonName={displayButtonName}/>
        </div>
        <div id='controller'>
          <div id='display'>{audioName}</div>
        </div>
      </div>

      <div id='footer'>
        by <a href='https://github.com/gaomingyang/drum-machine'>Mingyang</a>
      </div>
    </div>
  );
}

export default App;

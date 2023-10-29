import { useEffect } from 'react';
import './App.scss';

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

  const buttons = [
    {btn:"Q",audio:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
    {btn:"W",audio:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
    {btn:"E",audio:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
    {btn:"A",audio:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
    {btn:"S",audio:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
    {btn:"D",audio:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
    {btn:"Z",audio:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
    {btn:"X",audio:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
    {btn:"C",audio:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},
  ];

  useEffect(()=>{
    console.log("init effect")
  })


  function clickButton(event) {
    console.log("mouse click button")
    console.log(event)
    const clickedDiv = event.currentTarget;

    let btn = event.target.innerText
    console.log(btn)

    //播放音乐
    const audioElement = clickedDiv.querySelector('audio');
    // 播放音频
    if (audioElement) {
      audioElement.play();
    }
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
        {buttons.map((button, index) => (
          <div className="drum-pad" key={index} onClick={clickButton}>
            {button.btn}
            <audio id={button.btn} src={button.audio}></audio>
          </div>
        ))}
        </div>
        <div id='controller'>

        </div>
      </div>

      <div id='footer'>
        by <a href='https://github.com/gaomingyang/drum-machine'>Mingyang</a>
      </div>
    </div>
  );
}

export default App;

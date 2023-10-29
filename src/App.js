// import { useState,useEffect } from 'react';
import './App.scss';

function App() {
  const buttons = ["Q","W","E","A","S","D","Z","X","C"]

  function clickButton() {
    console.log("mouse click button")
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
        {buttons.map((button, index) => (
          <div className="drum-pad" key={index} onClick={clickButton}>
            {button}
            <audio src=''></audio>
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

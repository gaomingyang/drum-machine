import {useRef,useEffect } from 'react';

function ButtonList(props) {
    // console.log("props");
    // console.log(props)
    //两种方式
    const { buttons } = props; //正确提取props中的buttons属性
    //或者下面引用时用props.buttons.map((v,i)=>{xxxx})

    //创建refs
    const audioRefs = useRef({})
    
    function handleClickButton(event) {
        let btn = event.target.innerText
        console.log(btn)
    
        const clickedDiv = event.currentTarget;
        //播放音乐
        const audioElement = clickedDiv.querySelector('audio');
        // 播放音频
        if (audioElement) {
          audioElement.play();
        }
        const name = audioElement.getAttribute("data-name")
        console.log(name)
        //传递给父元素，在父元素显示按键名称
        props.displayButtonName(name)
    }


  useEffect(() => {
    console.log("init effect")

    //监听按键
    const handleKeyPress = (e) => {
      const keyPressed = e.key.toUpperCase();
      console.log("按下了：", keyPressed)
        if (audioRefs[keyPressed]){
            audioRefs[keyPressed].play()
            const name = audioRefs[keyPressed].getAttribute("data-name")
            //传递给父元素，在父元素显示按键名称
            props.displayButtonName(name)
        }
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };

  }, [props])

    return (
        <>
            {buttons.map((button, index) => (
                <div className="drum-pad" key={index} onClick={handleClickButton}>
                    {button.btn}
                    <audio id={button.btn} className='clip' data-name={button.name} src={button.audio} ref={ref=>audioRefs[button.btn]=ref}></audio>
                </div>
                ))
            }
        </>
    );
}

export default ButtonList;

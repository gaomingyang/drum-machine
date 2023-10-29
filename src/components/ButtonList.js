
function ButtonList(props) {
    // console.log("props");
    // console.log(props)
    //两种方式
    const { buttons } = props; //正确提取props中的buttons属性
    //或者下面引用时用props.buttons.map((v,i)=>{xxxx})

    function handleClickButton(event) {
        console.log("handleClickButton")
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
        const name = audioElement.getAttribute("data-name")
        console.log(name)
        //传递给父元素，在父元素显示按键名称
        props.displayButtonName(name)
    }

    return (
        <>
            {buttons.map((button, index) => (
                <div className="drum-pad" key={index} onClick={handleClickButton}>
                    {button.btn}
                    <audio id={button.btn} data-name={button.name} src={button.audio}></audio>
                </div>))
            }
        </>
    );
}

export default ButtonList;

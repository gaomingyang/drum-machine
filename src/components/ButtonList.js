function ButtonList(props) {
    console.log("props");
    console.log(props)
    const { buttons } = props; //正确提取props中的buttons属性

    return (
        <div id="display">
            {buttons.map((button, index) => (
                <div className="drum-pad" onClick="">
                    {button.btn}
                    <audio id={button.btn} ></audio>
                </div>))
            }
        </div>
    );
}

export default ButtonList;

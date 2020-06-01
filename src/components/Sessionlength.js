import React from 'react'

function Sessionlength({sessionlength,IncreaseSessionLength,DecreaseSessionLength,isplay}) {
    console.log(sessionlength)
    function DecreaseSession() {
        if (sessionlength===1){
            return
        }
        DecreaseSessionLength()
    }
    function IncreaseSession() {
        if (sessionlength===60) {
            return
        }
        IncreaseSessionLength()
    }
    return (
        <div className="breaklength">
                <div>Session Length</div>
                <div className="incdec">
                <button onClick={IncreaseSession}>+</button>
                <div id="timelength">{sessionlength}</div>
                <button onClick={DecreaseSession}>-</button>
                </div>
            </div>
    )
}

export default Sessionlength

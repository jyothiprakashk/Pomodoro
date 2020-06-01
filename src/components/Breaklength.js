import React from 'react'

function Breaklength({DecreaseBreakLength,IncreaseBreakLength,breaklength,isplay}) {
    console.log(breaklength,isplay)
    function DecreaseBreak() {
        if (breaklength===1) {
            return;
        }
        DecreaseBreakLength();
    }
    function IncreaseBreak() {
        if (breaklength===60) {
            return;
        }
        IncreaseBreakLength();
    }
    return (
        <div className="breaklength">
            <div>Break Length</div>
            <div className="incdec">
                <button onClick={IncreaseBreak}>+</button>
                <div id="timelength">{breaklength}</div>
                <button onClick={DecreaseBreak}>-</button>
            </div>
        </div>
    )
}

export default Breaklength

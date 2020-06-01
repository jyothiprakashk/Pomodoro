import React, { Component } from 'react'
// const {timerMinute,breaklength,updateTimer,reset,onPlayStopTimer,onToggleInterval}

export class Timer extends Component {
    constructor(props) {
        super(props);
        this.state={
            isSession:true,
            second:0,
            disable:false
        }
    }
    play=()=> {
        const PlayId=setInterval(this.decreaseTimer,1000)
        this.props.onPlayStopTimer(true)
        this.setState((prevState)=>{
            return {
            PlayId:PlayId,
            disable:!prevState.disable
            }
            
        })
        console.log(this.state.disable)
    }
    decreaseTimer=()=> {
        switch(this.state.second) {
            case 0:
                if(this.props.timerMinute===0) {
                    if(this.state.isSession) {
                        this.setState({isSession:false})
                    
                    this.props.onToggleInterval(this.state.isSession);
                    }
                    else {
                        this.setState({isSession:true})
                        this.props.onToggleInterval(this.state.isSession)
                    }
                }
                else {
                    this.props.updateTimer()
                    this.setState({
                        second:59
                    })
                }
                break
            default:
                this.setState((prevState)=> {
                    return {
                        second:prevState.second-1
                    }
                })
        }
    }
    Stop=()=> {
        console.log(this.state.PlayId)
        clearInterval(this.state.PlayId)
        this.props.onPlayStopTimer(true)
    }
    reset=()=> {
        this.Stop()
        this.props.onPlayStopTimer(false)
        this.props.reset()
        this.setState({
            second:0,
            isSession:true
        })
    }
    render() {
        return (
            <div className="maintimer">
                <div className="subtimer">
                <div>{this.state.isSession===true ? "session" : "break"}</div>
                <div id="circle">
                    <div>{this.props.timerMinute}</div>
                    <span>:</span>
                    <div>
                        {this.state.second===0 ? "00" : this.state.second<10 ? "0"+this.state.second : this.state.second}
                    </div>
                </div>
                </div>
                <div className="timerbuttons incdec">
                    
                    <button onClick={this.play} >Play</button>
                    <button onClick={this.Stop}>Stop</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>

        )
    }
}

export default Timer

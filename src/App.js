import React, { Component } from 'react'
import Breaklength from './components/Breaklength'
import Sessionlength from './components/Sessionlength'
import Timer from './components/Timer'
import './App.css'
export class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      BreakLength:5,
      SessionLength:25,
      timerMinute:25,
      isPlay:false
    }
  }
  IncreaseBreakLength=()=> {
    this.setState((prevState)=>{
      return {BreakLength:prevState.BreakLength+1}})
  }
  DecreaseBreakLength=()=> {
    this.setState((prevState)=> {
      return {BreakLength:prevState.BreakLength-1}
    })
  }
  IncreaseSessionLength=()=> {
    this.setState((prevState)=> {
      return {
        SessionLength:prevState.SessionLength+1,
        timerMinute:prevState.SessionLength+1
      }
    })
  }
  DecreaseSessionLength=()=> {
    this.setState((prevState)=> {
      return {
        SessionLength:prevState.SessionLength-1,
        timerMinute:prevState.SessionLength-1
      }
    })
  }
  onUpdateTimer=()=> {
    this.setState(prevState=> {
      return {
        timerMinute:prevState.timerMinute-1
      }
    })
  }
  Reset=()=> {
    this.setState({
      timerMinute:this.state.SessionLength
    })
  }
  onPlayStopTimer=(play)=> {
    this.setState({
    isPlay:play

    })
  }
  onToggleInterval=(isSession)=> {
    if (isSession) {
      this.setState({timerMinute:this.state.SessionLength})
    }
    else {
      this.setState({timerMinute:this.state.BreakLength})
    }
  }
  render() {
    return (
      <div className="main-pomodoro">
        <h1 className="pomo">Pomodoro Clock</h1>
        <div className="sub-pomodoro">
        <Breaklength IncreaseBreakLength={this.IncreaseBreakLength} DecreaseBreakLength={this.DecreaseBreakLength} breaklength={this.state.BreakLength} isplay={this.state.isPlay}/>
        <Sessionlength IncreaseSessionLength={this.IncreaseSessionLength} DecreaseSessionLength={this.DecreaseSessionLength} sessionlength={this.state.SessionLength} isplay={this.state.isPlay} />
        </div>
        <Timer timerMinute={this.state.timerMinute} breaklength={this.state.BreakLength} updateTimer={this.onUpdateTimer} reset={this.Reset} onPlayStopTimer={this.onPlayStopTimer} onToggleInterval={this.onToggleInterval} />
          <footer>
            <div id="footer">
              Coded By <a href="https://jyothiprakash.herokuapp.com">Jyothi Prakash</a> and Inspired from FreeCodeCamp.
            </div>
          </footer>
        </div>
    )
  }
}

export default App

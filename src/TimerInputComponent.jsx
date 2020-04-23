import React from 'react';
import PropTypes from 'prop-types';
import './TimerInputComponent.css'

const propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  styles: PropTypes.object,

  inputPutValue: PropTypes.number,
  counterRunning: PropTypes.bool.isRequired,
  onTimerFinish: PropTypes.func
}

class TimerInputComponent extends React.Component {
  constructor(props) {
    super(props);

    const setTimeTime = props.inputPutValue

    this.state = {
      setTime: setTimeTime,
      newTime: null,
      seconds: props.inputPutValue ? props.inputPutValue : 0,
      countDown: props.counterRunning
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ countDown: nextProps.counterRunning })
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      if ( this.state.seconds > 0 && this.state.countDown ) {
        this.setState(({ seconds }) => ({
          sandLvl: Math.floor(this.state.seconds / this.state.setTime * 100),
          seconds: seconds - 1
        }))
      }
      if( this.state.seconds < 1 && this.state.countDown ) {
        this.setState({ countDown: false })
        this.props.onTimerFinish ? this.props.onTimerFinish() : console.log("timer fin 🏁")
      }
    }, 1000)
  }

  onChange = (e) => {
    this.setState({ newTime: e.target.value })
  }

  setTime = (e) => {
    if(!e || e.key === 'Enter') {

      const time = this.state.newTime ?  this.state.newTime : "00:00"
      console.log("setTime -> time", time)
      console.log("setTime ======================> newTime", this.state)
      const arr = time.split(":")
      const mins = parseInt(arr[0]) * 60
      const secs = parseInt(arr[1])
      let newTime = mins + secs
      if(!newTime) { newTime = this.state.setTime }
      this.setState({ setTime: newTime, seconds: newTime, newTime: null })
    }
  }

  onChange = (e) => {
    this.setState({ newTime: e.target.value })
  }

  render() {
    const styles = this.props.styles || {};

    const { seconds, newTime } = this.state
    var time = seconds
    var minutes = "00"
    var secs = "60"
    minutes = Math.floor(time / 60) > 0 ? Math.floor(time / 60).toString() : "00"
    secs = (time - minutes * 60).toString()
    if( minutes.length === 1) {
      minutes = '0'.concat(minutes)
    }
    if( secs.length === 1) {
      secs = '0'.concat(secs)
    }
    var result = `${minutes}:${secs}`
    console.log("render -> result", result)
    console.log('porps: ', this.props)

    return (
      <div className="timer-component">
        { this.props.label ? <label  style={styles.label}>{this.props.label}</label> : null }
        <input  style={styles.input}
                type="text"
                inputMode="numeric"
                pattern="([0-5][0-9]):[0-5][0-9]"
                value={ newTime ? newTime : result }
                onChange={ (e)=> this.onChange(e) }
                onKeyDown={ (e)=> this.setTime(e) }
                onBlur={ ()=> this.setTime(false) }
                />
      </div>
    );
  }
}

TimerInputComponent.propTypes = propTypes;

export default TimerInputComponent;
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  styles: PropTypes.object,

  // defaultTime: PropTypes.number,
  inputPutValue: PropTypes.number,
  counterRunning: PropTypes.bool.isRequired,
  onTimerFinish: PropTypes.func
}

const defaultProps = {
  styles: {
    label: {
      fontFamily: 'Comic Sans MS',
      color: 'green'
    },
    input: {
      background: '#ddd',
      border: '1px solid red'
    }
  }
}

class TimerInputComponent extends React.Component {
  constructor(props) {
    super(props);

    const setTimeTime = props.inputPutValue
    this.state = {
    //   firstTime: true,
    //   hourglass: 'ready',
    //   sandLvl: 100,
    //   disabled: false

      setTime: setTimeTime,
      newTime: null,
      seconds: props.inputPutValue ? props.inputPutValue : 0,
      countDown: props.counterRunning ? props.counterRunning : false //counterRunning
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      if (this.state.seconds > 0 && this.state.countDown && this.state.hourglass === 'ready') {
        this.setState(({ seconds }) => ({
          sandLvl: Math.floor(this.state.seconds / this.state.setTime * 100),
          seconds: seconds - 1
        }))
      }
      if( this.state.seconds < 1 && this.state.countDown ) {
        this.setState({ countDown: false })
      }
    }, 1000)
  }

  // pause = () => {
  //   if (!this.state.firstTime) {
  //     this.setState({ countDown: !this.state.countDown, newTime: null })
  //   }
  // }

  updateNewTime = (e) => {
    this.setState({ newTime: e.target.value })
  }

  setTime = (e) => {
    if(!e || e.key === 'Enter') {
      console.log(this.state)
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
  updateNewTime = (e) => {
    this.setState({ newTime: e.target.value })
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
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
    console.log("render -> secs", secs)
    if( secs.length === 1) {
      secs = '0'.concat(secs)
    }
    var result = `${minutes}:${secs}`
    console.log("render -> result", result)

    return (
      <div>
        <label  style={styles.label}>{this.props.label}</label>
        <input  type="text" style={styles.input} onChange={this.handleChange} />
        <input  style={styles.input}
                type="text"
                inputMode="numeric"
                pattern="([0-5][0-9]):[0-5][0-9]"
                value={ newTime ? newTime : result }
                onChange={ (e)=> this.updateNewTime(e) }
                onKeyDown={ (e)=> this.setTime(e) }
                />
      </div>
    );
  }
}

TimerInputComponent.propTypes = propTypes;
TimerInputComponent.defaultProps = defaultProps;

export default TimerInputComponent;
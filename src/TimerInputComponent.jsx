import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    styles: PropTypes.object,

    inputPutValue: PropTypes.number.isRequired,
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

        

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const styles = this.props.styles || {};

        return (
            <div>
                <label style={styles.label}>{this.props.label}</label>
                <input type="text" style={styles.input} onChange={this.handleChange} />
            </div>
        );
    }
}

TimerInputComponent.propTypes = propTypes;
TimerInputComponent.defaultProps = defaultProps;

export default TimerInputComponent;
https://img.shields.io/badge/npm-v1.0.0-blue

# timer-input
React component package that allows a numeric input to handle an allotted amount of time in [mm:ss] (minutes and seconds)

# Install

```sh
  npm i @lost-in-code-au/timer-input

//or

  yarn add @lost-in-code-au/timer-input
```

# Runing in react
```js
  import TimerInputComponent from '@lost-in-code-au/timer-input'
```


Props:
```js
  label: string, // Add label if you wish a label in component, and takes in the given string.
  onChange: func.isRequired, // Returns time in seconds for parent component.
  styles: object, // Takes in styles jsx object for styling, only applies to the HTML input element, example object: {{label:{color: "Red", backgroundColor: "gray"}, input:{color: "green", backgroundColor: "black"}}}.

  defaultTime: number, // 180sec = 3mins, Takes in number of time converted in seconds(it's important to keep them as seconds so the function runs easily)
  counterRunning: PropTypes.bool.isRequired, // Take bool value to start and stop the counter, the counter will not run unless the parent component tells it to.
  onTimerFinish: PropTypes.func, // Optional callback for when the timer finishes.
```

Example:
```jsx
import React from 'react';
import TimerInputComponent from '@lost-in-code-au/timer-input' //Import component

class App extends React.Component {

  callBack = () => {
    console.log('counter fin!')
  }

  render() {
    return (
      <div>
          <TimerInputComponent
          label="what dah" //Default hide label element if no prop
          styles={{label:{color: "Red", backgroundColor: "gray"}, input:{ fontSize: "18px", color: "green", backgroundColor: "black"}}} //Default {}
          defaultTime={190} //Default 0
          counterRunning={false} //Default false
          onTimerFinish={this.callBack} //Default ()=> console.log('counter fin!')
          />
      </div>
    );
  }
}

export default App;
```

Understanding:

This is a minutes and seconds count down timer input, much like a egg time that allows for input of 00:00 or mm:ss and will update.

The defaultTime only takes seconds in the data format of number to maintain the counter increments, so when giving in you defaultTime please calculate your time into a whole number of seconds.
example: 3min = 180sec which is put in as defaultTime={180}

Any issue or requested updates please add them as a issue on the (repo github page)[https://github.com/lost-in-Code-au/timer-input]

❤️ Enjoy ❤️

-Rj
https://img.shields.io/badge/npm-v1.0.0-blue

# timer-input
React component package that allows a numeric input to handle an allotted amount of time in [mm:ss] (minutes and seconds)


Props:
```js
  label: string, // Add label if you wish a label in component, and takes in the given string.
  onChange: func.isRequired, // Returns time in seconds for parent component.
  styles: {{color: "Red", backgroundColor: "gray"}}, // Takes in styles jsx object for styling, only applies to the HTML input element.

  inputPutValue: number.isRequired, // 180sec = 3mins, Takes in number of time converted in seconds(it's important to keep them as seconds so the function runs easily)
  counterRunning: PropTypes.bool.isRequired, // Take bool value to start and stop the counter, the counter will not run unless the parent component tells it to.
  onTimerFinish: PropTypes.func, // Optional callback for when the timer finishes.
```
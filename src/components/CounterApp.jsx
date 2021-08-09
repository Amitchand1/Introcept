import React, { useState } from "react";
import "./CounterApp.css";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
// import Card from "@material-ui/core/Card";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const resetValue = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <Paper elevation={0} variant="outlined" />
      <Button
        onClick={handleIncrement}
        className="increment"
        variant="contained"
        color="primary"
        href="#contained-buttons"
      >
        Increment
      </Button>

      <h3 className="counter-value">VALUE: {count}</h3>

      <Button
        onClick={handleDecrement}
        className="decrement"
        variant="contained"
        color="primary"
        href="#contained-buttons"
      >
        Decrement
      </Button>

      <Button
        onClick={resetValue}
        className="counter-reset"
        variant="contained"
        color="secondary"
        href="#contained-buttons"
      >
        reset
      </Button>
      <Paper elevation={5} variant="outlined" square />
    </div>
  );
}

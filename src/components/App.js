import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";
//comment
const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });

  const reset = () => {
    setRenderBall(false);
  };

  const start = () => {
    setRenderBall(true);
  };

  const renderChoice = () => {
    if (!renderBall) {
      return (
        <button className="start" onClick={start}>
          start
        </button>
      );
    } else {
      return (
        <div
          className="ball"
          style={{ left: ballPosition.left, top: ballPosition.top }}
        ></div>
      );
    }
  };

  const action = (event) => {
    let x1, y1;
    if (event.key === "ArrowRight") {
      x1 = x + 5;
      y1 = y;
      setX(x1);
      setBallPosition({ left: x1 + "px", top: y1 + "px" });
    } else if (event.key === "ArrowLeft") {
      x1 = x - 5;
      y1 = y;
      setX(x1);
      setBallPosition({ left: x1 + "px", top: y1 + "px" });
    } else if (event.key === "ArrowUp") {
      x1 = x;
      y1 = y - 5;
      setY(y1);
      setBallPosition({ left: x1 + "px", top: y1 + "px" });
    } else if (event.key === "ArrowDown") {
      x1 = x;
      y1 = y + 5;
      setY(y1);
      setBallPosition({ left: x1 + "px", top: y1 + "px" });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", action);

    return () => {
      window.removeEventListener("keydown", action);
    };
  });
  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;

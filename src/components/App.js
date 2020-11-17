import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  let [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
    setRenderBall(false),
      setX(0),
      setY(0),
      setBallPosition({
        left: "0px",
        top: "0px",
      });
  };

  const checkRender = () => {
    setRenderBall(true);
  };

  const renderChoice = () => {
    if (renderBall === true) {
      return <div className="ball" style={ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={checkRender}>
          Start
        </button>
      );
    }
  };

  const moveBall = (evt) => {
    let temp;
    if (renderBall === true) {
      if (evt.key === "ArrowUp") {
        temp = y - 5;
        setY(temp);
        setBallPosition({
          top: temp + "px",
          left: x + "px",
        });
      } else if (evt.key === "ArrowDown") {
        temp = y + 5;
        setY(temp);
        setBallPosition({
          top: temp + "px",
          left: x + "px",
        });
      } else if (evt.key === "ArrowLeft") {
        temp = x - 5;
        setX(temp);
        setBallPosition({
          top: y + "px",
          left: temp + "px",
        });
      } else if (evt.key === "ArrowRight") {
        temp = x + 5;
        setX(temp);
        setBallPosition({
          top: y + "px",
          left: temp + "px",
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", moveBall);
    console.log(x);
    console.log(y);

    return () => {
      window.removeEventListener("keydown", moveBall);
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

// const App = () => {
//   const [renderBall, setRenderBall] = useState(false);
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
//   const [ballPosition, setBallPosition] = useState({
//     left: "0px",
//     top: "0px",
//   });

//   const reset = () => {
//     setRenderBall(false);
//   };

//   const start = () => {
//     setRenderBall(true);
//   };

//   const renderChoice = () => {
//     if (!renderBall) {
//       return (
//         <button className="start" onClick={start}>
//           start
//         </button>
//       );
//     } else {
//       return <div className="ball" style={ballPosition}></div>;
//     }
//   };

//   const action = (event) => {
//     let x1, y1;
//     if (event.key === "ArrowRight") {
//       x1 = x + 5;
//       y1 = y;
//       setX(x1);
//       setBallPosition({ left: x1 + "px", top: y1 + "px" });
//     } else if (event.key === "ArrowLeft") {
//       x1 = x - 5;
//       y1 = y;
//       setX(x1);
//       setBallPosition({ left: x1 + "px", top: y1 + "px" });
//     } else if (event.key === "ArrowUp") {
//       x1 = x;
//       y1 = y - 5;
//       setY(y1);
//       setBallPosition({ left: x1 + "px", top: y1 + "px" });
//     } else if (event.key === "ArrowDown") {
//       x1 = x;
//       y1 = y + 5;
//       setY(y1);
//       setBallPosition({ left: x1 + "px", top: y1 + "px" });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", action);

//     return () => {
//       window.removeEventListener("keydown", action);
//     };
//   });
//   return (
//     <div className="playground">
//       <button onClick={reset} className="reset">
//         Reset
//       </button>
//       {renderChoice()}
//     </div>
//   );
// };

export default App;

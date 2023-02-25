import React, { useState } from "react";
import "./styles.css";

var headingText = "Like me";
var bgcolor = "red";
var color = "yellow";
var color1 = "#be123c";
var bgcolor1 = "#fde047";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  function likeClickHandler() {
    // count = count + 1;
    // console.log("clicked!", count);
    var newLikeCounterValue = likeCounter + 1;
    setLikeCounter(newLikeCounterValue);
  }
  // console.log("like counter value :", likeCounter);
  return (
    <div className="App">
      <h1 style={{ backgroundColor: bgcolor, color: color }}> {headingText}</h1>
      <button className="likebtn" onClick={likeClickHandler}>
        Like Me!
      </button>
      <span style={{ backgroundColor: bgcolor1, color: color1 }}>
        you got {likeCounter} likes
      </span>
    </div>
  );
}

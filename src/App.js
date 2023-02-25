import React, { useState } from "react";
import "./styles.css";

var headingText = "ॐ नमः शिवाय ";
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
    if (newLikeCounterValue === 108) {
      console.log("hari om");
    }
    setLikeCounter(newLikeCounterValue);
  }
  // console.log("like counter value :", likeCounter);
  return (
    <div className="App">
      <h1 style={{ backgroundColor: bgcolor, color: color }}> {headingText}</h1>
      <h4>#click on ॐ नमः शिवाय button for counting your chanting</h4>
      <button className="likebtn" onClick={likeClickHandler}>
        ॐ नमः शिवाय
      </button>{" "}
      {likeCounter}
      <div className="bottom">
        <small>
          Made with <span>💛</span> by nksoftpune
        </small>
      </div>
    </div>
  );
}

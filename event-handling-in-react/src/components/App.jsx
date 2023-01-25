import React, { useState } from "react";

function App() {

  //usestate, create stateful text  using Hooks
  const [headingText, setText] = useState("");
  const [isMouseOver, setMouseover] = useState(false);
  const [name, setName] = useState("");

  function handleCLick(event) {
    setText(name);

    // event.preventDefault();
  }
  function handleMouseOver() {
    setMouseover(true);
  }
  function handleMouseOut() {
    setMouseover(false);
  }

  //React Forms, every time event triggered, it passes the object "event", ex: event.target.value -> event that triggered, target is element that triggered this event, value of attribute
  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      {/* <form></form> */}
        <input
          onChange={handleChange} 
          type="text"
          placeholder="What's your name?"
        />
        <button
          onClick={handleCLick}
          style={{ backgroundColor: isMouseOver ? "black" : "white" }} 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
         >Submit</button>
    </div>
  );
}

export default App;

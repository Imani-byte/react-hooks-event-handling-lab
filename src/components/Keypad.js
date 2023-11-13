import React from "react";
import EyesOnMe from "./EyesOnMe";

function Keypad() {
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input type="password" onChange={handleChange} />
      <EyesOnMe />
    </div>
  );
}

export default Keypad;

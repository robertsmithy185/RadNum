import React, { useState } from "react";
import "./App.css";
import RandomNumber from "./components/RandomNumber";

const App = () => {
  const [randomNum, setRandomNum] = useState(1);

  const generateRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNum(newNumber);
  };

  return (
    <div className="container">
      <div className="image-icon">
        <img src="/logo1.png" alt="Logo" />
      </div>
      <RandomNumber value={randomNum} onGenerate={generateRandomNumber} />
    </div>
  );
};

export default App;

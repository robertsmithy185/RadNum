import React from "react";

const RandomNumber = ({ value, onGenerate }) => {
  return (
    <div className="angka-random">
      <h1>ANGKA RANDOM</h1>
      <div className="random-angka">
        <p>{value}</p>
      </div>
      <div className="buttom-random-angka">
        <button onClick={onGenerate}>RandNum</button>{" "}
      </div>
    </div>
  );
};

export default RandomNumber;

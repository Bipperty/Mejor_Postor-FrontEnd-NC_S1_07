import React from "react";
import Button from "./components/Buttons/Button";
import Card from "./components/Cards/Card"


function App() {
  return (
    <div className="h-screen bg-dark flex flex-col items-center">
      <h1 className="text-2xl text-center bg-primary">Front End mejor postor</h1>
      <Card />
    </div>
  );
}

export default App;

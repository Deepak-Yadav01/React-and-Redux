import { useState } from "react";
import "./App.css";

function App() {
  const [nameChange, setNameChange] = useState("GreatStackDev");
  const [counter, setCounter] = useState(0);

  const handleNameChange = () => {
    setNameChange("Chai aur Code");
  };

  const handleAddCounter = () => {
    setCounter(counter + 1);

  };

  const handleRemoveCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);

    }
  };

  return (
    <>
      <h1>Learning useState Hook {nameChange}</h1>
      <h2>Counter : {counter}</h2>

      <button onClick={handleNameChange}>Change Name</button>
      <br />

      <button onClick={handleAddCounter}>Add Counter</button>
      <br />

      <button onClick={handleRemoveCounter}>Remove Counter</button>
    </>
  );
}

export default App;

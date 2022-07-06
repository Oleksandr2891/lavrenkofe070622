import { useState } from "react";
import "./App.css";
import Chart from "./components/Chart";

function App() {
  const [clickButton, setClickButton] = useState(false);

  const handleClickButton = () => {
    setClickButton(true);
    setTimeout(() => {
      setClickButton(false);
    }, 300);
  };

  setInterval(handleClickButton, 30000);

  return (
    <div className="App">
      <h1>SPENT TIME (SECONDS)</h1>
      <Chart clickButton={clickButton} />
      <div>
        <button onClick={handleClickButton}>Click me</button>
      </div>
    </div>
  );
}

export default App;

import { useMemo, useState } from "react";

import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calculation done!");
    return Math.pow(num, 3);
  }
  //  const result = cubeNum(number);
  // Saves the values given in the dependancy array between the renders and don't compute it again
  const result = useMemo(() => {
    return cubeNum(number);
  }, [number]);

  return (
    <>
      <input
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <h1>Cube of the number: {result}</h1>
      <br />

      {/* Without the useMemo hook this below code causes the page to rerender and unnecesserly calling the above code */}
      <h1>Count is {counter}</h1>
      <button
        onClick={() => {
          setCounter((prevCount) => prevCount + 1);
        }}
      >
        Add +1
      </button>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let count1 = 0;
  const [count, setCount] = useState(0);
  function handleClick() {
    count1 = count1 + 1;
    console.log(count1);
  }

  return (
    <>
      <h1>Without useState, I am not updated {count1}</h1>
      <button onClick={handleClick}>Click me!</button>
      <h1>With useState, I am updated {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      {/* best practice is to use setCount((count) => count + 1)
      Java script uses batching under the hood so if we use the 
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)

      All the above instructions are processed at the same time so to avoid this use
      setCount((count) => count + 1)
      
      */}
      <button
        onClick={() => {
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          setCount((count) => count + 1);
        }}
      >
        Click me to add 4!
      </button>
    </>
  );
}

export default App;

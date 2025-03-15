import { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  // // First use case of useRef

  // const [value, setValue] = useState(0);
  // //The below code causes an infinite loop , we can solve this using the useRef
  // // const [count, setCount] = useState(0);
  // // useEffect(() => {
  // //   setCount((prevCount) => prevCount + 1);
  // // });
  // const count = useRef(0);
  // useEffect(() => {
  //   // useRef provides a object that has a propert named current that sotres the value we have given
  //   count.current = count.current + 1;
  // });

  //Second useCase
  const inputElement = useRef();
  const btnClicked = () => {
    console.log(inputElement.current);
    inputElement.current.style.background = "blue";
  };

  return (
    <>
      {/* First use case of useRef 
      <button onClick={() => setValue((prevValue) => prevValue - 1)}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => setValue((prevValue) => prevValue + 1)}>+1</button>
      <h1>Render Count: {count.current}</h1> */}

      {/* Second useCase 
      We can also use the useRef to select the html element using the ref attribute  */}
      <>
        <input type="text" ref={inputElement} />
        <button onClick={btnClicked}>Click Here</button>
      </>
    </>
  );
}

export default App;

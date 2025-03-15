import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // Note in Strict mode the below code is called twice

  // useEffect with [] means that the code inside it is called only once i.e when the component is first rendered

  // useEffect(() => {
  //   console.log(`I got called!`);
  //   setCount((prevCount) => prevCount + 1);
  // }, []);

  //If no dependency array ([]) is provided, useEffect runs after every render.Causing it to struct in infinite loop

  // useEffect(() => {
  //   console.log(`I got called!`);
  //   setCount((prevCount) => prevCount + 1);
  // });

  //The blow code is exceuted when ever there is change in dependancy array , we can also pass multiple params to dependancy array
  // useEffect(() => {
  //   document.title = `Count: ${count}`;
  // }, [count]);

  //Optionally we can provide a function in return , it acts as a cleanup function.

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Cleanup: Interval cleared!");
    };
  }, []);
  return (
    <>
      {/* <h1>I am rendered only {count} times!</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Click me!</button> */}
      uncomment this code to run the optional part of the useEffect return{" "}
      <p>Timer: {count}</p>
    </>
  );
}

export default App;

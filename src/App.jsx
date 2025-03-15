import { useCallback, useState } from "react";
import Header from "./Header";
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  // function empty() {}
  const empty = useCallback(() => {}, []);
  return (
    <>
      {/* Even though we are passing the empty function under the hood a new function is passed eveytime the component is rerendered 
    to fix this use the hook useCallback this saves the function def in between the renders
    */}
      <Header empty={empty} />
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}

export default App;

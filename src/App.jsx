import { useCallback, useState } from "react";
import Header from "./Header";
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  // function empty() {}

  // The useCallback hook is used to memoize the function so that it is not recreated on every render.
  // This is useful when the function is passed as a prop to a child component, preventing unnecessary re-renders.
  const empty = useCallback(() => {}, []);
  return (
    <>
      {/* The Header component is passed the memoized empty function. */}
      <Header empty={empty} />
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}

export default App;

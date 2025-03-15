import { useState, useEffect, useLayoutEffect } from "react";

function App() {
  // useEffect is used to run some side-effects after rendering. It's similar to componentDidMount and componentDidUpdate.
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "black";
    console.log("Message from useEffect");
  }, []);

  // useLayoutEffect is similar to useEffect, but it fires after all DOM mutations. This is useful for layout-related operations.
  // It's similar to componentDidMount and componentDidUpdate, but it fires after all DOM mutations.

  //useLayoutEffect is called even before the useEffect this is useful when you want to do something even before the component is loaded
  useLayoutEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "yellow";
    console.log("Message from useLayoutEffect");
  }, []);

  // Top 5 examples where useLayoutEffect can be used:
  // 1. Measuring the size of a DOM element after it's been rendered.
  // 2. Setting the focus on an element after it's been rendered.
  // 3. Animating the position or size of an element based on its initial position or size.
  // 4. Updating the state based on the size or position of an element.
  // 5. Handling layout changes, such as when the user resizes the window.

  return (
    <div>
      <h2>Test Message</h2>
      {Array(40000)
        .fill(0)
        .map((item, index) => (
          <li key={index}>{Math.pow(Math.random(), 10)}</li>
        ))}
    </div>
  );
}

export default App;

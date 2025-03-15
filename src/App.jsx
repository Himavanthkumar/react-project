import { useReducer } from "react";

// Define the initial state of the reducer
const initialState = { count: 0 };

// Define the reducer function, which determines how to update the state based on an action
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "input":
      return { count: action.payload };
    default:
      throw new Error();
  }
}

// Define the App component, which uses the useReducer hook to manage its state
function App() {
  // useReducer is a React hook that allows you to manage complex state by dispatching actions to a reducer function.
  // It returns an array with two elements: the current state and a dispatch function to update the state.
  const [state, dispatch] = useReducer(reducer, initialState);

  // Render the App component, which displays the current count and allows the user to increment, decrement, or input a new count
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <br />
      <input
        type="number"
        value={state.count}
        onChange={(e) => {
          // Get the current value from the input field and convert it to a number
          const value = Number(e.target.value);
          // Dispatch an action to the reducer to update the state with the new input value
          dispatch({ type: "input", payload: value });
        }}
      />
    </div>
  );
}

// Export the App component
export default App;

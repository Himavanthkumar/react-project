import { createContext } from "react"; // Import createContext from react to create a context

export const AppContext = createContext(); // Create a context named AppContext

// Define a component that will act as a provider for the context
const ContextProvider = (props) => {
  const phone = "+1 123456789"; // Define a value to be passed to the context, you can define multiple values
  const fb_icon = "Facebook";
  return (
    // Wrap the children in the context provider, passing the phone number as the value
    <AppContext.Provider value={{ phone, fb_icon }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider; // Export the ContextProvider component

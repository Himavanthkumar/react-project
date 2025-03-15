import React from "react";

const Header = () => {
  console.log("Header Rendered!!");
  return <h1>Header</h1>;
};

/**
 * Memoized version of the Header component to prevent unnecessary re-renders.
 * This optimization is particularly useful when the Header component is a child of a component that re-renders frequently.
 */
export default React.memo(Header);

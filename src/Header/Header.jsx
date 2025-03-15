import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Header = () => {
  //You must use the same variable names you have provided in the AppContext ,if you use other name it is not going to work
  const { phone, fb_icon } = useContext(AppContext);

  return (
    <>
      <div>Header</div>
      <h3>{fb_icon}</h3>
      <h3>{phone}</h3>
    </>
  );
};

export default Header;

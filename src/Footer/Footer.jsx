import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Footer = () => {
  const { phone } = useContext(AppContext);
  return (
    <>
      <div>Footer</div>
      <h3>{phone}</h3>
    </>
  );
};

export default Footer;

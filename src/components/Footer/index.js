import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const index = () => {
  return (
    <nav className="footer">
      <Link to="/">TMS System</Link>
      <Link to="/">Terms & Conditions</Link>
      <Link to="/">Disclosure</Link>
      <Link to="/">Privacy Policy</Link>
      <Link to="/">declaration</Link>
    </nav>
  );
};

export default index;

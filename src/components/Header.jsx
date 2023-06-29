import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" href="#">
          Fake-Store
        </Link>
        <div></div>
      </div>
    </nav>
  );
};

export default Header;

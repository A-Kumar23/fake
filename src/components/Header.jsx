import React from "react";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" href="#">
          Fake-Store
        </Link>
        <div>
          <FaOpencart /> {0}
        </div>
      </div>
    </nav>
  );
};

export default Header;

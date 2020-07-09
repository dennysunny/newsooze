import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Navbar = () => {
  let date = moment().format("MMMM DD, h:mmA");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <Link className="navbar-brand" to="/">
        Newsooze<span className="js"></span>  
        <p className="date">{date}</p>
      </Link>
    </nav>
    
  );
};

export default Navbar;

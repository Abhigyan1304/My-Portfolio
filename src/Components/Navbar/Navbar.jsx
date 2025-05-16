import React from "react";
import "./Navbar.css";
import TypeWritter from "../Typewritter/Typewritter";
import MyDetails from "./../../../public/Info.json";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <TypeWritter text={`${MyDetails.my_details.first_name}.`} speed={400} />
      </div>
      <div className="buttons">
        <a href="/Home" className="a-link">
          Home
        </a>
        <a href="/About" className="a-link">
          About
        </a>
        <a href="/Projects" className="a-link">
          Projects
        </a>
        <a href="/Contact" className="a-link">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;

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
        <a href="/" className="btn">
          Home
        </a>
        <a href="/About" className="btn">
          About
        </a>
        <a href="/Projects" className="btn">
          Projects
        </a>
        <a href="/Contact" className="btn">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;

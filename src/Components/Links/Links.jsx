import React from "react";
import { FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import MyDetails from "./../../../public/Info.json";
import "./Links.css";
const Links = () => {
  return (
    <div className="bottom-logos">
      <div
        className="logo-box"
        onClick={() => window.open(MyDetails.social_links.github)}
      >
        <FaGithub size={20} color="#0B77A8" />
      </div>
      <div
        className="logo-box"
        onClick={() => window.open(MyDetails.social_links.twitter)}
      >
        <FaTwitter size={20} color="#0B77A8" />
      </div>
      <div
        className="logo-box"
        onClick={() => window.open(MyDetails.social_links.linkedin)}
      >
        <FaLinkedinIn size={20} color="#0B77A8" />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Links;

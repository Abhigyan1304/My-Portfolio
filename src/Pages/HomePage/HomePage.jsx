import React from "react";
import "./HomePage.css";
import Navbar from "../../Components/NavBar/Navbar";
import Links from "../../Components/Links/Links";
import MyDetails from "./../../../public/Info.json";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="left-right-div">
        <div className="main-written-content">
          <div className="heading-text">
            <h1>{`Hi, I'm  ${MyDetails.my_details.first_name} ${MyDetails.my_details.second_name}`}</h1>
            <h2>{`I'm a ${MyDetails.role}`}</h2>

            <p className="description">{MyDetails.long_description}</p>

            <div className="button-group">
              <button className="button first">Hire me!</button>
              <button className="button">Download CV</button>
            </div>
          </div>

          <div className="links-wrapper">
            <Links />
          </div>
        </div>

        <div className="image">
          <img
            src={MyDetails.my_details.photo_path}
            alt="elon musk"
            className="image-elon"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

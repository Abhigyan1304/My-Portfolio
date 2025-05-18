import React from "react";
import Chatbot from "../../Components/ChatBot/Chatbot";
import "./About.css";

const Aboutpage = () => {
  return (
    <div className="outer">
      <div className="profile-card">
        <div className="profile-header">
          <h1>
            Know Who <span className="pink-text">I'M</span>
          </h1>
        </div>

        <div className="profile-content">
          <p>
            Hi Everyone, I am{" "}
            <span className="pink-text">Soumyajit Behera</span> from{" "}
            <span className="pink-text">Bhubaneswar, India</span>.
          </p>
          <p>I am currently employed as a software developer at Juspay.</p>
          <p>
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
          </p>
        </div>

        <div className="divider"></div>

        <div className="hobbies-section">
          <p>Apart from coding, some other activities that I love to do!</p>
          <ul className="hobbies-list">
            <li>Playing Games</li>
            <li>Writing Tech Blogs</li>
            <li>Travelling</li>
          </ul>
        </div>

        <div className="quote-section">
          <blockquote>
            "Strive to build things that make a difference!"
          </blockquote>
          <p className="quote-author">
            - <span className="pink-text">Soumyajit</span>
          </p>
        </div>

        <div className="divider"></div>

        <div className="skills-section">
          <h2>Professional Skillset</h2>
          {/* Add your skills here or as separate components */}
        </div>
      </div>
      <div className="chatbot-container">

      </div>
    </div>
  );
};

export default Aboutpage;

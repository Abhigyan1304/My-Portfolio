import React, { useState } from "react";
import "./Contact.css";
import myDetails from "./../../../public/Info.json";
import { FaPhone, FaMapPin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Reachout from "../../Components/ReactOut/Reachout";

const Contact = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  return (
    <div className="contact-container">
      <div className="heading">
        <div className="heading-text">
          {["Get", "In", "Touch"].map((word, index) => (
            <h1
              key={index}
              className={`head ${index === 2 ? "third" : ""}`}
              onMouseEnter={() => setHoveredWord(index)}
              onMouseLeave={() => setHoveredWord(null)}
            >
              {word}
              <span
                className={`underline ${hoveredWord === index ? "active" : ""}`}
              ></span>
            </h1>
          ))}
        </div>
        <p className="small-text">
          I'm open for new opportunities and collaborations. If you have a
          project that needs my help, please get in touch.
          <span className="dot">👋</span>
        </p>
      </div>

      <div className="form-my-info">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p className="contact-description">
            I'm open for new opportunities and collaborations. If you have a
            project that needs my help, please get in touch.
          </p>
          <ul className="contact-list">
            <li className="contact-item">
              <span className="contact-icon">
                <MdOutlineMailOutline />
              </span>
              <div className="contact-text">
                <p className="contact-method">Email</p>
                <p className="contact-detail">{myDetails.my_details.email}</p>
              </div>
            </li>
            <li className="contact-item active">
              <span className="contact-icon">
                <FaPhone />
              </span>
              <div className="contact-text">
                <p className="contact-method">Phone</p>
                <p className="contact-detail">{myDetails.my_details.phone}</p>
              </div>
            </li>
            <li className="contact-item">
              <span className="contact-icon">
                <FaMapPin />
              </span>
              <div className="contact-text">
                <p className="contact-method">Location</p>
                <p className="contact-detail">
                  {`${myDetails.my_details.location_city}, ${myDetails.my_details.location_country}`}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="form-card">
          {/* <div className="form-content">
            <div className="form-icon">✉️</div>
            <h3>Send Me a Message</h3>
            <p className="form-description">
              Have a question or want to work together? Fill out the form below
              and I'll get back to you as soon as possible.
            </p>
            <div className="form-placeholder">
              [Contact form will be implemented here]
            </div>
          </div> */}
            <Reachout />
        </div>
      </div>
    </div>
  );
};

export default Contact;

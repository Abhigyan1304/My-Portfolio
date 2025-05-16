import React, { useState } from "react";
import { sendEmail } from "./emailService";
import "./Reachout.css";

const Reachout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    success: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", success: false });

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        loading: false,
        message: "Please fill all required fields",
        success: false,
      });
      return;
    }

    // Send email
    const result = await sendEmail(formData);

    setStatus({
      loading: false,
      message: result.message,
      success: result.success,
    });

    // Reset form if successful
    if (result.success) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="reachout-form-container">
      <h3 className="reachout-title">Send Me a Message</h3>

      <form onSubmit={handleSubmit} className="reachout-form">
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="subject-input"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="message-input"
        ></textarea>

        <button
          type="submit"
          className="submit-button"
          disabled={status.loading}
        >
          {status.loading ? "Sending..." : "Send Message"}
          {!status.loading && <span className="checkmark">✓</span>}
        </button>

        {status.message && (
          <div
            className={`status-message ${status.success ? "success" : "error"}`}
          >
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Reachout;

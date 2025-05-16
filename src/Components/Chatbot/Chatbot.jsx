import React, { useState, useRef, useEffect } from "react";
import "./Chatbox.css";

const Chatbot = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const messagesEndRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Got it! What else would you like to know?", sender: "bot" },
        ]);
      }, 800);
      setInputValue("");
    }
  };

  return (
    <div className="chatbot-container">
      <div className="iphone-mockup">
        <div className="iphone-body">
          <div className="iphone-screen">
            {/* Smaller iPhone notch */}
            <div className="iphone-notch">
              <div className="notch-camera"></div>
              <div className="notch-speaker"></div>
            </div>

            <div className="chat-screen">
              <div className="messages-container">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message-bubble ${message.sender}`}
                  >
                    {message.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="input-container">
              <form onSubmit={handleSubmit} className="input-form">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="iMessage"
                  className="message-input"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

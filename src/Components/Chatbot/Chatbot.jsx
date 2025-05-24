import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY, PERSONAL_CONTEXT } from "./../../config.js";
import "./Chatbox.css";
import pd from "./../../../public/Info.json";
const Chatbot = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm your personal assistant. Ask me anything about you!",
      sender: "bot",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Initialize Gemini
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const scrollToBottom = () => {
    if (hasScrolled) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (messages.length > 1) {
      setHasScrolled(true);
      scrollToBottom();
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const result = await model.generateContent([
        `Here is some personal context:\n\n${JSON.stringify(
          personalData,
          null,
          2
        )}\n\nQuestion: ${inputValue}`,
      ]);

      const response = await result.response;
      const text = response.text();

      setMessages((prev) => [...prev, { text, sender: "bot" }]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble answering right now. Maybe ask me something else about you?",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  const personalData = pd;
  return (
    <div className="chatbot-container">
      <div className="iphone-mockup">
        <div className="iphone-body">
          <div className="iphone-screen">
            <div className="iphone-notch">
              <div className="notch-camera"></div>
              <div className="notch-speaker"></div>
              <div className="notch-sensor"></div>
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
                {isLoading && (
                  <div className="message-bubble bot">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="input-container">
              <form onSubmit={handleSubmit} className="input-form">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Type a message..."
                  className="message-input2"
                  disabled={isLoading}
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

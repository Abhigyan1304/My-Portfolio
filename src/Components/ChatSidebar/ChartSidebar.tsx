import React, { useState } from 'react';
import { RiRobot2Fill } from 'react-icons/ri';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import './ChatSidebar.css';
import Chatbot from '../ChatBot/Chatbot';

const ChatSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`chat-sidebar-container ${isOpen ? 'open' : ''}`}>
      {/* Luxury AI Toggle Button */}
      <button 
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="ai-button-content">
          <RiRobot2Fill className="ai-icon" />
          <span className="toggle-arrow">
            {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
          </span>
        </div>
        <div className="luxury-shine"></div>
        <div className="particles"></div>
      </button>

      {/* Chatbot Content */}
      <div className="sidebar-content">
        {isOpen && (
          <div className="chatbot-wrapper">
            <Chatbot />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatSidebar;
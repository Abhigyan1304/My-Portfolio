import React, { useState, useEffect } from "react";
import "./TypeWritter.css";

const TypeWritter = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, text, speed]);

  return (
    <span className="typewriter-text">
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypeWritter;

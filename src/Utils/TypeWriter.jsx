import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {

    if (currentIndex < text.length && startTyping) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }


  }, [currentIndex, delay, text, startTyping]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setStartTyping(true)
    }, 1000);

    return () => clearTimeout(delay)
  })

  return <span>{currentText}</span>;
};

export default Typewriter;

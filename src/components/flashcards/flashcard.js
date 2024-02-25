"use client";

import React, { useState } from "react";
import "../flashcards/flashcardStyles.css";

const Flashcard = (props) => {
  const [showBack, setShowBack] = useState(false);

  const toggleCard = () => {
    setShowBack(!showBack);
  };

  return (
    <div
      className={`flashcard ${showBack ? "back" : "front"}`}
      onClick={toggleCard}
    >
      <div className="card-content">{showBack ? props.back : props.front}</div>
    </div>
  );
};

export default Flashcard;

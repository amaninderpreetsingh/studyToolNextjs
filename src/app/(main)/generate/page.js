"use client";

import React, { useState } from "react";
import PdfToData from "./pdfToData";
import Flashcard from "./flashcard";
import "@/app/globals.css";

function FlashcardsScreen() {
  const [text, setText] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState(2);

  const handleFileSelected = (extractedText) => {
    setText(extractedText);
  };

  const getFlashcards = async () => {
    const API_KEY = "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";

    if (!loading) {
      setLoading(true);
      const APIBody = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content:
              "Generate front and back content for a set of flashcards optimal for test preparation from the information: {" +
              text +
              "}. Each flashcard should emphasize key concepts, with a question on the front and its corresponding answer on the back. Please provide the response in JSON format, where each flashcard is represented as an object with `front` and `back` as the components, like this: [{front: `question`, back: `answer`}]. Ensure you produce exactly {" +
              selectedValue +
              "} flashcard(s).",
          },
        ],
        temperature: 0,
        max_tokens: 1024,
      };

      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + API_KEY,
            },
            body: JSON.stringify(APIBody),
          }
        );

        const data = await response.json();

        // Split the flashcards data into an array of flashcards
        const flashcardsData = JSON.parse(data.choices[0].message.content);
        setFlashcards(flashcardsData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <h1 className="Heading">FLASHCARD GENERATOR</h1>
      <div className="CenterContent">
        <h2 className="CenterItem">Upload or Paste Content</h2>
        <PdfToData className="AppButton" onFileSelected={handleFileSelected} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <text className="CenterItem"> or </text>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste content here..."
            cols={50}
            rows={10}
          />
        </div>

        <h2>Select Number of Flashcards & Generate</h2>

        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ fontStyle: "italic", marginRight: "5px" }}>
            Number of Flashcards to generate: {selectedValue}
          </label>
          <input
            type="range"
            min="1"
            max="50"
            value={selectedValue}
            onChange={(e) => setSelectedValue(parseInt(e.target.value))}
          />
        </div>
        <div>
          <button
            className="AppButton"
            disabled={!text}
            onClick={getFlashcards}
          >
            Generate Flashcards
          </button>
        </div>

        {/* Display generated flashcards */}
        {!loading && flashcards && (
          <div>
            <h2 style={{ textAlign: "center" }}>Generated Flashcards</h2>
            <div>
              {flashcards.map((card, index) => {
                return (
                  <Flashcard key={index} front={card.front} back={card.back} />
                );
              })}
            </div>
          </div>
        )}
        {loading && <p>Loading flashcards...</p>}
      </div>
    </div>
  );
}

export default FlashcardsScreen;

"use client";

import React, { useState } from "react";
import PdfToData from "./pdfToData";
import Flashcard from "@/components/flashcards/flashcard";
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
      <div className="CenterContent">
        <h1 className="Heading HomeHeading">Flashcard Studio</h1>
        <div>
          <div className="card-container">
            <div class="card">
              <div class="card-details">
                <p class="text-title">Import</p>
                <p class="text-body">
                  Seamlessly import flashcards from Quizlet, with more platforms
                  coming soon.
                </p>
              </div>
              <button class="card-button">Begin Import</button>
            </div>
            <div class="card">
              <div class="card-details">
                <p class="text-title">Create</p>
                <p class="text-body">
                  Use our intuitive interface to create custom flashcards
                  easily.
                </p>
              </div>
              <button class="card-button">New Flashcards</button>
            </div>
            <div class="card">
              <div class="card-details">
                <p class="text-title">Generate</p>
                <p class="text-body">
                  Auto-generate flashcards with our AI, directly from your
                  notes.
                </p>
              </div>
              <button class="card-button">Auto-Create</button>
            </div>
          </div>
        </div>

        <h2 className="Heading2">Upload or Paste Content (Generate) </h2>

        <div className="contain2">
          <PdfToData onFileSelected={handleFileSelected}></PdfToData>
          <text> or </text>
          <div
            className="Rdiv"
            style={{ display: "flex", alignItems: "center" }}
          >
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste content here..."
              cols={50}
              rows={10}
            />
          </div>
        </div>

        <h2 className="Heading2">Select Number of Flashcards & Generate</h2>

        <div
          className="contain2"
          style={{ display: "flex", alignItems: "center", width: "100%" }}
        >
          <label
            style={{ fontStyle: "italic", marginRight: "5px", flexShrink: 0 }}
          >
            Number of Flashcards to generate: {selectedValue}
          </label>
          <input
            type="range"
            min="1"
            max="50"
            value={selectedValue}
            onChange={(e) => setSelectedValue(parseInt(e.target.value))}
            style={{ flex: "1", marginRight: "5px" }} // Stretches the slider to fill available space
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
            <h2 className="Heading2">Generated Flashcards</h2>
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

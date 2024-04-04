import React, { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew"; // Icon for generating content
import FileUploadIcon from "@mui/icons-material/FileUpload"; // Icon for uploading files
import PdfToData from "./pdfToData"; // Ensure this path is correct
import Flashcard from "./flashcard"; // Ensure this path is correct
import "@/app/globals.css"; // Ensure this path is correct

function Generator() {
  const [text, setText] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState(2);

  // Handles the text extracted from PDF files
  const handleFileSelected = (extractedText) => {
    setText(extractedText);
  };

  // Fetches flashcards from the API
  const getFlashcards = async () => {
    if (!loading) {
      setLoading(true);
      const APIBody = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Generate front and back content for a set of flashcards optimal for test preparation from the information: ${text}. Each flashcard should emphasize key concepts, with a question on the front and its corresponding answer on the back. Please provide the response in JSON format, where each flashcard is represented as an object with 'front' and 'back' as the components, like this: [{front: 'question', back: 'answer'}]. Ensure you produce exactly ${selectedValue} flashcard(s).`,
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
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
            body: JSON.stringify(APIBody),
          }
        );

        const data = await response.json();
        const flashcardsData = JSON.parse(data.choices[0].message.content);
        setFlashcards(flashcardsData);
      } catch (error) {
        console.error("Failed to fetch flashcards:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="studioDiv">
      <h2 className="Heading2">Step 1: Upload or Paste Notes</h2>
      <div className="contain2">
        {/* PdfToData component should ideally have its own button inside for selecting files */}
        <PdfToData onFileSelected={handleFileSelected} />
        <div className="Rdiv" style={{ display: "flex", alignItems: "center" }}>
          <textarea
            className="pasteTextArea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste Notes Here..."
            cols="60"
            rows="4"
          />
        </div>
      </div>

      <h2 className="Heading2">Step 2: Select Flashcard Amount</h2>
      <div className="contain2">
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
          style={{ flex: "1", marginRight: "5px" }}
        />
      </div>

      <div className="contain2">
        <button className="AppButton" disabled={!text} onClick={getFlashcards}>
          <AutorenewIcon />
          Generate Flashcards
        </button>
      </div>

      {!loading && flashcards.length > 0 && (
        <div>
          <h2 className="Heading2">Generated Flashcards</h2>
          <div>
            {flashcards.map((card, index) => (
              <Flashcard key={index} front={card.front} back={card.back} />
            ))}
          </div>
        </div>
      )}

      {loading && <p>Loading flashcards...</p>}
    </div>
  );
}

export default Generator;

import React, { useState } from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

function QuizletExtractor() {
  const [link, setLink] = useState("");
  const [flashcards, setFlashcards] = useState([]);

  const handleExtractClick = async () => {
    const response = await fetch("/api/extract-quizlet", {
      // Placeholder API endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ link }),
    });

    if (response.ok) {
      const data = await response.json();
      setFlashcards(data.flashcards);
    } else {
      console.error("Failed to fetch flashcards");
      setFlashcards([]);
    }
  };

  return (
    <div>
      <h2 className="Heading2">Import Flashcards from Quizlet</h2>
      <div className="contain2">
        <input
          className="pasteTextArea"
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Paste Quizlet link here"
        />
        <button
          className="AppButton uploadPdfButton"
          onClick={handleExtractClick}
        >
          <CloudDownloadIcon style={{ marginRight: "8px" }} />
          Extract Flashcards
        </button>
        <div>
          {flashcards.map((flashcard, index) => (
            <div key={index}>
              <strong>Flashcard {index + 1}:</strong> {flashcard.side1},{" "}
              {flashcard.side2}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizletExtractor;

// Backend (Node.js)

// const express = require('express');
// const fetch = require('node-fetch'); // or any HTTP request library
// const cheerio = require('cheerio'); // for parsing HTML

// const router = express.Router();

// router.post('/extract-quizlet', async (req, res) => {
//   const { link } = req.body;
//   try {
//     const htmlResponse = await fetch(link);
//     const html = await htmlResponse.text();
//     const $ = cheerio.load(html);
//     const flashcards = [];

//     // This is hypothetical and highly dependent on Quizlet's actual page structure
//     $('.Flashcard').each((i, elem) => {
//       const side1 = $(elem).find('.Side1').text();
//       const side2 = $(elem).find('.Side2').text();
//       flashcards.push({ side1, side2 });
//     });

//     res.json({ flashcards });
//   } catch (error) {
//     console.error('Error fetching Quizlet data:', error);
//     res.status(500).send('Error extracting flashcards');
//   }
// });

// module.exports = router;

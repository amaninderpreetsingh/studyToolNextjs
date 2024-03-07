import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"; // For adding new flashcards
import SaveIcon from "@mui/icons-material/Save"; // For the save deck button
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"; // For indicating image upload

function ManualFlashcardCreator() {
  const [flashcards, setFlashcards] = useState([
    { front: "", back: "", frontImage: "", backImage: "" },
  ]);
  const [title, setTitle] = useState("");

  // Adds a new flashcard to the list
  const handleAddFlashcard = () => {
    setFlashcards([
      ...flashcards,
      { front: "", back: "", frontImage: "", backImage: "" },
    ]);
  };

  // Updates the text for a flashcard's front or back
  const handleFlashcardChange = (index, side, value) => {
    const newFlashcards = flashcards.map((card, i) => {
      if (i === index) {
        return { ...card, [side]: value };
      }
      return card;
    });
    setFlashcards(newFlashcards);
  };

  // Handles the image change and updates the state
  const handleImageChange = (index, side, event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedFlashcards = flashcards.map((card, i) => {
        if (i === index) {
          return { ...card, [`${side}Image`]: reader.result };
        }
        return card;
      });
      setFlashcards(updatedFlashcards);
    };
    reader.readAsDataURL(file);
  };

  // Triggers the file input dialog
  const handleImageIconClick = (index, side) => {
    document.getElementById(`file-input-${index}-${side}`).click();
  };

  return (
    <div className="">
      <h2 className="Heading2">Create Your Flashcard Deck</h2>
      <div className="deckNameContainer">
        <label className="deckNameLabel">Name Your Flashcards:</label>
        <input
          className="deckNameInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title, Subject, etc..."
        />
      </div>
      {flashcards.map((card, index) => (
        <div key={index} className="flashcardEntry">
          <div className="flashcardIndex">{index + 1}.</div>{" "}
          {/* This line adds the numbering */}
          <div className="flashcardSide">
            <label className="imageUploadLabel">Flashcard Front</label>
            <textarea
              className="pasteTextArea"
              value={card.front}
              onChange={(e) =>
                handleFlashcardChange(index, "front", e.target.value)
              }
              placeholder="Front side text..."
              rows="2"
            />
            <label
              className="imageUploadLabel"
              onClick={() => handleImageIconClick(index, "front")}
            >
              <AddPhotoAlternateIcon />
              Would you like to add an image? (optional)
              <input
                type="file"
                id={`file-input-${index}-front`}
                style={{ display: "none" }}
                onChange={(e) => handleImageChange(index, "front", e)}
              />
            </label>
            {card.frontImage && (
              <img
                src={card.frontImage}
                alt="Front Side"
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
            )}
          </div>
          <div className="Rdiv flashcardSide">
            <label className="imageUploadLabel">Flashcard Back</label>
            <textarea
              className="pasteTextArea"
              value={card.back}
              onChange={(e) =>
                handleFlashcardChange(index, "back", e.target.value)
              }
              placeholder="Back side text..."
              rows="2"
            />
            <label
              className="imageUploadLabel"
              onClick={() => handleImageIconClick(index, "back")}
            >
              <AddPhotoAlternateIcon />
              Would you like to add an image? (optional)
              <input
                type="file"
                id={`file-input-${index}-back`}
                style={{ display: "none" }}
                onChange={(e) => handleImageChange(index, "back", e)}
              />
            </label>
            {card.backImage && (
              <img
                src={card.backImage}
                alt="Back Side"
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
            )}
          </div>
        </div>
      ))}
      <div className="button-container" style={{ marginTop: "20px" }}>
        <button className="AppButton" onClick={handleAddFlashcard}>
          <AddCircleOutlineIcon /> Add Another Card
        </button>
        <button
          className="AppButton"
          onClick={() => console.log({ title, flashcards })}
        >
          <SaveIcon /> Save Deck
        </button>
      </div>
    </div>
  );
}

export default ManualFlashcardCreator;

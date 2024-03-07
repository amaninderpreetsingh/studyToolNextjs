import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"; // Icon for adding images
import "@/app/globals.css";

function MyFlashCards() {
  // Temporary sample data without useState
  const flashcards = [
    {
      title: "Sample Deck",
      numOfCards: 10,
      description: "This is a sample flashcard deck.",
      imageUrl: "/image/hexGreen.png", // Replace with your default image URL
    },
    // ... more flashcard decks
  ];

  // Temporarily removing handlers since they depend on useState

  return (
    <div className="CenterContent">
      <h1 className="Heading">Flashcard Library</h1>
      <div className="card-container">
        {flashcards.length > 0 ? (
          flashcards.map((card, index) => (
            <div key={index} className="cardv2">
              <div className="card-number-of-cards">{card.numOfCards}</div>
              <h2 className="card-title">{card.title}</h2>
              <div className="card-image">
                <img className="FCimage" src={card.imageUrl} alt={card.title} />
                {/* Temporarily disabling the image upload functionality */}
                {/* <AddPhotoAlternateIcon /> */}
              </div>
              <div className="text-body">{card.description}</div>
            </div>
          ))
        ) : (
          <div className="card">
            <h2 className="text-title">Empty Deck</h2>
            <p className="text-body">No flashcards available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyFlashCards;

"use client";

import React, { useState } from "react";
import "@/app/globals.css";
import Generator from "@/components/flashcards/Generator";
import Extractor from "@/components/flashcards/Extractor";
import Creator from "@/components/flashcards/Creator";

function FlashcardsCreatingScreen() {
  // State to manage visibility of each section
  const [visibleSection, setVisibleSection] = useState("");

  const handleButtonClick = (section) => {
    setVisibleSection(section);
  };

  return (
    <>
      <div className="CenterContent">
        <h1 className="Heading">Flashcard Studio</h1>
        <div>
          <div className="card-container">
            <div className="card">
              <div className="card-details">
                <p className="text-title">Import</p>
                <p className="text-body">
                  Seamlessly import flashcards from Quizlet, with more platforms
                  coming soon.
                </p>
              </div>
              <button
                className="card-button"
                onClick={() => handleButtonClick("import")}
              >
                Begin Import
              </button>
            </div>
            <div className="card">
              <div className="card-details">
                <p className="text-title">Create</p>
                <p className="text-body">
                  Use our intuitive interface to create custom flashcards
                  easily.
                </p>
              </div>
              <button
                className="card-button"
                onClick={() => handleButtonClick("create")}
              >
                New Flashcards
              </button>
            </div>
            <div className="card">
              <div className="card-details">
                <p className="text-title">Generate</p>
                <p className="text-body">
                  Auto-generate flashcards with our AI, directly from your
                  notes.
                </p>
              </div>
              <button
                className="card-button"
                onClick={() => handleButtonClick("generate")}
              >
                Auto-Create
              </button>
            </div>
          </div>
        </div>
        {/* Conditionally rendered sections */}
        {visibleSection === "import" && (
          <section className="SectionL">
            <div className="studioDiv">
              <Extractor />
            </div>
          </section>
        )}
        {visibleSection === "create" && (
          <section className="SectionL">
            <div className="studioDiv">
              <Creator />
            </div>
          </section>
        )}
        {visibleSection === "generate" && (
          <section className="SectionL">
            <Generator />
          </section>
        )}
      </div>
    </>
  );
}

export default FlashcardsCreatingScreen;

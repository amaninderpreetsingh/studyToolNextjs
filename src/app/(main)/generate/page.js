"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import "@/app/globals.css";
import Generator from "@/components/flashcards/generator";

function flashcardsCreatingScreen() {
  return (
    <>
      <Navbar />
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
        <Generator />
      </div>
    </>
  );
}

export default flashcardsCreatingScreen;

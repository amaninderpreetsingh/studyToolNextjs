//Test Page
"use client";

import React, { useState } from "react";
import "@/app/globals.css";
import Generator from "@/components/flashcards/Generator";

function Test() {
  return (
    <>
      <div className="CenterContent">
        <h1 className="Heading">Flashcard Studio</h1>
        <Generator />
      </div>
    </>
  );
}

export default Test;

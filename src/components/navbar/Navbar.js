// Navbar.js
import React from "react";
import Link from "next/link"; // Updated import path

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

function Navbar() {
  const handleNavigation = (sectionId) => {
    // Consider using a library for smooth scrolling in React
    // document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <Link href="/">
        <a className="buttonLogo" data-text="Awesome">
          <span className="actual-text">&nbsp;FlashAI&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;FlashAI&nbsp;
          </span>
        </a>
      </Link>

      <div className="nav-container">
        <div className="nav-items">
          <a onClick={() => handleNavigation("home")}>HOME</a>
          <a onClick={() => handleNavigation("about")}>ABOUT</a>
          <a onClick={() => handleNavigation("contact")}>CONTACT</a>
        </div>
        <SignedOut>
          <SignInButton>
            <button className="buttonWave">Sign in</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <SignOutButton>
            <button className="buttonWave">Log off</button>
          </SignOutButton>
        </SignedIn>
      </div>
    </nav>
  );
}

export default Navbar;

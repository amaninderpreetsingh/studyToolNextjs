// Navbar.js
import React from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

function Navbar() {
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
          {/* Use buttons for actions and not navigation */}
          <button onClick={() => handleNavigation("home")}>HOME</button>
          <button onClick={() => handleNavigation("about")}>ABOUT</button>
          <button onClick={() => handleNavigation("contact")}>CONTACT</button>
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

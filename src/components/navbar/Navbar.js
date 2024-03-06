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
  return (
    <nav className="navbar">
      <Link href="/" passHref>
        <div className="buttonLogo" data-text="Awesome">
          <span className="actual-text">&nbsp;FlashAI&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;FlashAI&nbsp;
          </span>
        </div>
      </Link>

      <div className="nav-container">
        <div className="nav-items">
          {/* Use Link for navigation. Adjust href values as needed */}
          <Link href="/#home">HOME</Link>
          <Link href="/#about">ABOUT</Link>
          <Link href="/#contact">CONTACT</Link>
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

import "@/app/globals.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import Link from "next/link";
// Add other icons as needed

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">FlashAI</div>
        <div className="nav-container">
          <div className="nav-items">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
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
      <div className="head-text"></div>
      <section id="home" className="sectionD cta">
        <h1 className="HomeHeading">AI Generated Flashcards</h1>
        <p className="HomePara">
          Using the power of AI, start creating your personalized flashcards
          today and enhance your learning experience!
        </p>
        {/* Get Started (CTA) Button */}
        <div class="button-container">
          <Link href="/generate">
            <button class="cssbuttons-io-button">
              Get started
              <div class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </section>
      <section id="about" className="sectionL">
        <h1 className="HomeHeading">About Us</h1>
        <p className="HomePara">
          At FlashAI, we're dedicated to transforming the learning experience
          through innovative technology. Our platform leverages the latest in AI
          to personalize your study materials, making learning more efficient,
          engaging, and tailored to your needs. Join us on our mission to
          empower learners around the globe to achieve their educational goals.
        </p>
      </section>
      <section id="contact" className="sectionD">
        <h1 className="HomeHeading">Contact Us</h1>
        <p className="HomePara">
          We're here to help! For support, inquiries, or feedback, please get in
          touch with us via email at [ email] or call us at [ phone number]. Our
          team is dedicated to providing you with the assistance you need.
          Follow us on [Social Media Links] to stay updated on the latest news
          and updates.
        </p>
      </section>
    </>
  );
}

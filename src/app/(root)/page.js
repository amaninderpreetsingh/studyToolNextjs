import { UserButton } from "@clerk/nextjs";
import CarouselSlider from "../../../components/slider/app";
import "../generate/App.css";
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
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <SignedOut>
            <SignInButton>
              <button className="AppButton">Sign in</button>
            </SignInButton>
          </SignedOut>
          <SignInButton>
            <SignedOut>
              <button className="AppButton">Log off</button>
            </SignedOut>
          </SignInButton>
        </div>
      </nav>
      <div className="head-text"></div>
      <section id="home" className="sectionD cta">
        <h1 className="HomeHeading">Generate Your Flashcards</h1>
        <p className="HomePara">
          Using the power of AI, start creating your personalized flashcards
          today and enhance your learning experience!
        </p>
        <Link href={"/generate"}>
          <button className="ctaButton"> Try now! </button>
        </Link>
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

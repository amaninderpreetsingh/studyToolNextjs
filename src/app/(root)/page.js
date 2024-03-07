import "@/app/globals.css";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home" className="sectionD">
        <h1 className="HomeHeading">Revolutionize Your Learning</h1>
        <p className="HomePara">
          Welcome to FlashAI, where we're revolutionizing the way students
          study. Transform your notes into dynamic, interactive flashcards with
          the latest AI technology. Begin crafting your custom flashcards now
          and take your learning journey to new heights!
        </p>
        {/* Get Started (CTA) Button */}
        <div class="button-container">
          <Link href="/generate">
            <button class="cssbuttons-io-button">
              Create Flashcards
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
                    fill="#00A97F"
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
          We're here to help and keen to hear from you! Whether you have support
          queries, feedback, or suggestions on how we can improve FlashAI, don't
          hesitate to reach out. Email us at{" "}
          <a href="mailto:FlashAI.info@gmail.com" className="ContactLink">
            FlashAI.info@gmail.com
          </a>{" "}
          for any collaboration or inquiries. Our team is committed to providing
          you with the support you need.
        </p>
        <p className="HomePara">
          Stay updated on our latest developments and feature releases by
          following our journey on{" "}
          <a
            href="https://github.com/DilrajS/FlashAI"
            className="ContactLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </>
  );
}

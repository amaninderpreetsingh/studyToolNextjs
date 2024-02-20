"use client";

import React, { useState, useEffect } from "react";
import "./style.css";

const CarouselSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      img: "image/img5.png",
      //   author: "LUNDEV",
      //   title: "DESIGN SLIDER",
      topic: "Platform",
      description: "Cloud-based platform for manegement",
      id: "img1",
    },
    {
      img: "/image/img2.jpg",
      //   author: "LUNDEV",
      //   title: "DESIGN SLIDER",
      topic: "Infrastructure",
      description: "HRM And Inventory",
      id: "img2",
    },
    {
      img: "/image/img3.jpg",
      //   author: "LUNDEV",
      //   title: "DESIGN SLIDER",
      topic: "Software",
      description: "Software delivered on subscription basis",
      id: "img3",
    },
  ];

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setActiveIndex((current) => (current + 1) % slides.length);
  //     }, 7000); // Cycle every 7 seconds
  //     return () => clearInterval(interval);
  //   }, []);

  const navigateSlides = (direction) => {
    if (direction === "next") {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else if (direction === "prev") {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
    }
  };

  // Adjust the key property to force re-rendering the component and re-applying the animation
  return (
    <div className="carousel">
      <div className="list">
        {slides.map((slide, index) => (
          <div
            key={`${slide.id}-${activeIndex}`} // Force re-render to apply animation
            className={`item ${
              index === activeIndex ? "active fadeIn" : "inactive"
            }`} // Add 'fadeIn' class for animation
            style={{ display: index === activeIndex ? "block" : "none" }}
          >
            <img src={slide.img} alt={`${slide.title} - ${slide.topic}`} />
            <div className="content">
              <div className="author">{slide.author}</div>
              <div className="title">{slide.title}</div>
              <div className="topic">{slide.topic}</div>
              <div className="des">{slide.description}</div>
              <div className="buttons">
                <button>LEARN MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="thumbnail">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`item ${index === activeIndex ? "activeThumbnail" : ""}`} // Apply the 'activeThumbnail' class dynamically
            onClick={() => setActiveIndex(index)}
          >
            <img src={slide.img} alt={`Thumbnail for ${slide.title}`} />
            <div className="content">
              <div className="title">{slide.title}</div>
              <div className="description">
                {slide.description.substring(0, 50)}...
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div className="arrows">
        <button id="prev" onClick={() => navigateSlides("prev")}>
          &lt;
        </button>
        <button id="next" onClick={() => navigateSlides("next")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CarouselSlider;

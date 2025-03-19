import React from "react";
import "./Gallery.css";
import Line from '../Line/Line';

const images = [
  "/Gallery/gallery-1.jpg",
  "/Gallery/gallery-2.jpg",
  "/Gallery/gallery-3.jpg",
  "/Gallery/gallery-4.jpg",
  "/Gallery/gallery-5.jpg",
  "/Gallery/gallery-6.jpg",
  "/Gallery/gallery-7.jpg",
  "/Gallery/gallery-8.jpg",
];

function Gallery() {
  return (
    <>
    <section className="gallery">
      <h2 className="gallery-title">
        Check <span>Our Gallery</span>
        <p>Explore our Gallery Page to discover the vibrant moments and unique experiences that define us. From exciting events to our dedicated team, each image tells a story of creativity, passion, and innovation. Dive in and see how we bring ideas to life!</p>
      </h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </section>

<Line></Line>

    </>
  );
}

export default Gallery;

import React from "react";
import "./Gallery.css";

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
    <section className="gallery">
      <h2 className="gallery-title">
        Check <span>Our Gallery</span>
      </h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;

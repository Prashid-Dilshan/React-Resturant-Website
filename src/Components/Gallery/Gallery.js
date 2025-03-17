import React from "react";
import "./Gallery.css";

const images = [
  "https://source.unsplash.com/400x300/?restaurant,tables",
  "https://source.unsplash.com/400x300/?restaurant,bar",
  "https://source.unsplash.com/400x300/?restaurant,dining",
  "https://source.unsplash.com/400x300/?restaurant,cafe",
  "https://source.unsplash.com/400x300/?restaurant,food",
  "https://source.unsplash.com/400x300/?restaurant,dinner",
  "https://source.unsplash.com/400x300/?restaurant,party",
  "https://source.unsplash.com/400x300/?restaurant,drinks",
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

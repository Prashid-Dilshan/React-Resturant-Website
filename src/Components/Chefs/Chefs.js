import React from "react";
import "./Chefs.css";

const chefs = [
  {
    name: "Chef Aravinda Perera",
    role: "Master Chef",
    description:
      "Chef Aravinda, our Master Chef, brings over 15 years of culinary excellence to PD Restaurant. Known for his innovative techniques and passion for authentic flavors, Chef Aravinda crafts dishes that are both artistic and unforgettable. His dedication to quality ensures that every plate reflects the essence of exceptional cuisine.",
    image: "https://via.placeholder.com/150", 
  },
  {
    name: "Chef Nadeesha Fernando",
    role: "Patissier",
    description:
      "Chef Nadeesha is the creative genius behind our delectable desserts. As our skilled Patissier, she transforms simple ingredients into sweet masterpieces, blending traditional recipes with modern flair. From indulgent cakes to intricate pastries, Chef Nadeesha’s creations are a treat for both the eyes and the palate.",
    image: "https://via.placeholder.com/150", 
  },
  {
    name: "Chef Ruwan Silva",
    role: "Cook",
    description:
      "Chef Ruwan, our talented Cook, is the heart of our kitchen. With a deep understanding of Sri Lankan spices and cooking methods, he prepares comforting and flavorful dishes that celebrate local traditions. His dedication to fresh ingredients and homestyle cooking makes every meal at PD Restaurant a delightful experience.",
    image: "https://via.placeholder.com/150", 
  },
];

function Chefs() {
  return (
    <section className="chefs">
      <h1>Meet Our Chefs</h1>
      <div className="chefs-container">
        {chefs.map((chef, index) => (
          <div className="chef-card" key={index}>
            <img src={chef.image} alt={chef.name} className="chef-img" />
            <h2>{chef.name}</h2>
            <h4>{chef.role}</h4>
            <p>{chef.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Chefs;
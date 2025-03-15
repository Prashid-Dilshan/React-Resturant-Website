import React, { useState } from 'react';
import './Menu.css';

const menuData = {
  Starters: [
    {
      id: 1,
      name: "Crispy Tofu with Sweet Chili Sauce",
      description: "Extra-firm tofu, cornstarch, vegetable oil, sweet chili sauce, chopped cilantro, sesame seeds",
      price: "LKR 1600.00",
      image: "/path-to-image/tofu.jpg",
    },
    {
      id: 2,
      name: "Vietnamese Spring Rolls",
      description: "Rice paper wrappers, rice vermicelli noodles, fresh herbs, carrots, bean sprouts, shrimp, dipping sauce",
      price: "LKR 1800.00",
      image: "/path-to-image/spring-rolls.jpg",
    },
    {
      id: 3,
      name: "Papaya Salad (Som Tum)",
      description: "Green papaya, cherry tomatoes, peanuts, dried shrimp, lime juice, fish sauce, palm sugar, chili",
      price: "LKR 1400.00",
      image: "/path-to-image/papaya-salad.jpg",
    }
  ],
  Breakfast: [
    {
      id: 4,
      name: "Avocado Toast",
      description: "Toasted sourdough, smashed avocado, cherry tomatoes, and feta cheese",
      price: "LKR 1200.00",
      image: "/path-to-image/avocado-toast.jpg",
    },
    {
      id: 5,
      name: "Pancakes with Honey",
      description: "Fluffy pancakes served with honey and fresh fruits",
      price: "LKR 1300.00",
      image: "/path-to-image/pancakes.jpg",
    }
  ],
  Lunch: [
    {
      id: 6,
      name: "Grilled Chicken with Rice",
      description: "Grilled chicken breast served with steamed rice and veggies",
      price: "LKR 1800.00",
      image: "/path-to-image/grilled-chicken.jpg",
    }
  ],
  Dinner: [
    {
      id: 7,
      name: "Salmon Steak",
      description: "Grilled salmon steak with mashed potatoes and lemon butter sauce",
      price: "LKR 2500.00",
      image: "/path-to-image/salmon.jpg",
    }
  ]
};

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Starters");

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our<span> Menu</span></h1>

      <nav className="menu-nav">
        {Object.keys(menuData).map((category) => (
          <a
            key={category}
            href="#"
            className={activeCategory === category ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setActiveCategory(category);
            }}
          >
            {category}
          </a>
        ))}
      </nav>

      <div className="menu-grid">
        {menuData[activeCategory].map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-image" />
            <h3 className="menu-item-title">{item.name}</h3>
            <p className="menu-item-description">{item.description}</p>
            <p className="menu-item-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

import React, { useState } from 'react';
import './Menu.css';
import Line from '../Line/Line';

const menuData = {


  Starters: [
    {
      id: 1,
      name: "Crispy Tofu with Sweet Chili Sauce",
      description: "Extra-firm tofu, cornstarch, vegetable oil, sweet chili sauce, chopped cilantro, sesame seeds",
      price: "LKR 1600.00",
      image: "/Foods/1.png", 
    },
    {
      id: 2,
      name: "Vietnamese Spring Rolls",
      description: "Rice paper wrappers, rice vermicelli noodles, fresh herbs, carrots, bean sprouts, shrimp, dipping sauce",
      price: "LKR 1800.00",
      image: "/Foods/2.png",
    },
    {
      id: 3,
      name: "Papaya Salad (Som Tum)",
      description: "Green papaya, cherry tomatoes, peanuts, dried shrimp, lime juice, fish sauce, palm sugar, chili",
      price: "LKR 1400.00",
      image: "/Foods/3.png",
    },
    {
      id: 4,
      name: "Avocado Toast",
      description: "Toasted sourdough, smashed avocado, cherry tomatoes, and feta cheese",
      price: "LKR 1200.00",
      image: "/Foods/4.png",
    },

    {
      id: 3,
      name: "Papaya Salad (Som Tum)",
      description: "Green papaya, cherry tomatoes, peanuts, dried shrimp, lime juice, fish sauce, palm sugar, chili",
      price: "LKR 1400.00",
      image: "/Foods/6.png",
    },
    {
      id: 4,
      name: "Avocado Toast",
      description: "Toasted sourdough, smashed avocado, cherry tomatoes, and feta cheese",
      price: "LKR 1200.00",
      image: "/Foods/5.png",
    },


  ],




  Breakfast: [
    {
      id: 1,
      name: "Crispy Tofu with Sweet Chili Sauce",
      description: "Extra-firm tofu, cornstarch, vegetable oil, sweet chili sauce, chopped cilantro, sesame seeds",
      price: "LKR 1600.00",
      image: "/Foods/4.png", 
    },
    {
      id: 2,
      name: "Vietnamese Spring Rolls",
      description: "Rice paper wrappers, rice vermicelli noodles, fresh herbs, carrots, bean sprouts, shrimp, dipping sauce",
      price: "LKR 1800.00",
      image: "/Foods/3.png",
    },
    {
      id: 3,
      name: "Papaya Salad (Som Tum)",
      description: "Green papaya, cherry tomatoes, peanuts, dried shrimp, lime juice, fish sauce, palm sugar, chili",
      price: "LKR 1400.00",
      image: "/Foods/2.png",
    },
    {
      id: 4,
      name: "Avocado Toast",
      description: "Toasted sourdough, smashed avocado, cherry tomatoes, and feta cheese",
      price: "LKR 1200.00",
      image: "/Foods/1.png",
    },
    {
      id: 3,
      name: "Papaya Salad (Som Tum)",
      description: "Green papaya, cherry tomatoes, peanuts, dried shrimp, lime juice, fish sauce, palm sugar, chili",
      price: "LKR 1400.00",
      image: "/Foods/9.jpg",
    },
    {
      id: 4,
      name: "Avocado Toast",
      description: "Toasted sourdough, smashed avocado, cherry tomatoes, and feta cheese",
      price: "LKR 1200.00",
      image: "/Foods/13.jpg",
    },


  ],




  Lunch: [

    {
      id: 1,
      name: "Crispy Tofu with Sweet Chili Sauce",
      description: "Extra-firm tofu, cornstarch, vegetable oil, sweet chili sauce, chopped cilantro, sesame seeds",
      price: "LKR 1600.00",
      image: "/Foods/7.jpg", 
    },
    {
      id: 2,
      name: "Vietnamese Spring Rolls",
      description: "Rice paper wrappers, rice vermicelli noodles, fresh herbs, carrots, bean sprouts, shrimp, dipping sauce",
      price: "LKR 1800.00",
      image: "/Foods/8.jpg",
    },
    {
      id: 3,
      name: "Papaya Salad (Som Tum)",
      description: "Green papaya, cherry tomatoes, peanuts, dried shrimp, lime juice, fish sauce, palm sugar, chili",
      price: "LKR 1400.00",
      image: "/Foods/9.jpg",
    },
    {
      id: 4,
      name: "Avocado Toast",
      description: "Toasted sourdough, smashed avocado, cherry tomatoes, and feta cheese",
      price: "LKR 1200.00",
      image: "/Foods/13.jpg",
    },

 

  ],



  Dinner: [

    
    {
      id: 1,
      name: "Crispy Tofu with Sweet Chili Sauce",
      description: "Extra-firm tofu, cornstarch, vegetable oil, sweet chili sauce, chopped cilantro, sesame seeds",
      price: "LKR 1600.00",
      image: "/Foods/4.png", 
    },
    {
      id: 2,
      name: "Vietnamese Spring Rolls",
      description: "Rice paper wrappers, rice vermicelli noodles, fresh herbs, carrots, bean sprouts, shrimp, dipping sauce",
      price: "LKR 1800.00",
      image: "/Foods/3.png",
    },
    {
      id: 3,
      name: "Papaya Salad (Som Tum)",
      description: "Green papaya, cherry tomatoes, peanuts, dried shrimp, lime juice, fish sauce, palm sugar, chili",
      price: "LKR 1400.00",
      image: "/Foods/2.png",
    },
    {
      id: 4,
      name: "Avocado Toast",
      description: "Toasted sourdough, smashed avocado, cherry tomatoes, and feta cheese",
      price: "LKR 1200.00",
      image: "/Foods/1.png",
    },
 

  ]
};

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Starters");

  return (
<>

    <div className="menu-container">
      <h1 className="menu-title">Check Our<span> Menu</span></h1>

      <p className='Menu-p'>At PD Restaurant, our menu celebrates the rich flavors of Sri Lanka, offering a mix of traditional dishes and modern twists. From spicy curries and fresh seafood to delicious desserts, every dish is crafted with the finest local ingredients to provide an unforgettable dining experience.</p>

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
  
<Line></Line>
</>
  );
}

export default Menu;

import React from 'react'
import "./About.css"
import aboutphoto from "../../images/about.jpg"
import { FcPositiveDynamic } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";


function About() {
  return (
   <>
   <div className='about'>
   <h1>Learn More <span>About Us</span></h1>
   <img src={aboutphoto} alt="PD Restaurant" className='aboutimg'/>

   <p className='aboutp'>Welcome to <span>PD Restaurant</span> , where the rich culinary heritage of Sri Lanka comes alive in the heart of Colombo!
<br/><br/>
At <span>PD Restaurant</span> , we are passionate about celebrating the authentic flavors, aromas, and traditions of Sri Lankan cuisine. Our menu is a vibrant fusion of time-honored recipes, fresh local ingredients, and a touch of modern creativity.
<br/><br/>
Whether you're a local or a visitor, we invite you to experience the warmth of Sri Lankan hospitality in our welcoming and contemporary space. Located in the bustling heart of Colombo, PD Restaurant offers an ideal setting for family gatherings, casual dining, or celebrations.
<br/><br/>
Our menu is a vibrant celebration of Sri Lanka’s diverse culinary traditions, crafted with the freshest locally sourced ingredients. From spicy curries to savory seafood dishes and delectable desserts, every meal is thoughtfully prepared to bring out the essence of Sri Lankan cuisine.</p>
   </div>

   <section className="why-choose-us">
      <div className="container">
        {/* Left Section */}
        <div className="left-section">
          <h2>Why Choose PD Restaurant</h2>
          <p>
            At PD Restaurant, we pride ourselves on offering an unparalleled
            dining experience that combines exceptional flavors, warm
            hospitality, and a vibrant ambiance. Our carefully curated menu
            showcases the best of local and international cuisine, crafted with
            the freshest ingredients and a passion for excellence.
          </p>
          <p>
            Whether you're celebrating a special occasion, enjoying a meal with
            loved ones, or seeking a cozy spot to unwind, PD Restaurant delivers
            a perfect blend of comfort and sophistication. From our expertly
            prepared dishes to our attentive service, every detail is designed
            to leave you with memorable moments.
          </p>
          <p>
            Choose PD Restaurant for an experience that delights your taste buds
            and nourishes your soul!
          </p>
          <button className="learn-more">Learn More →</button>
        </div>

        {/* Right Section */}
        <div className="right-section">
          {/* Card 1 */}
          <div className="card">
            <div className="icon">
            <FcPositiveDynamic />
            </div>
            <h3>A Culinary Journey Like No Other</h3>
            <p>
              Indulge in a dining experience that takes you on a journey of
              taste and culture. Whether it’s a classic Sri Lankan dish or an
              innovative international creation, PD Restaurant promises an
              explosion of flavors that will tantalize your palate.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="icon">
            <FcPortraitMode />
            </div>
            <h3>Exceptional Service, Memorable Moments</h3>
            <p>
              Our team is dedicated to providing warm hospitality and impeccable
              service. From the moment you step in, we strive to make every
              visit special, ensuring you leave with cherished memories and a
              desire to return.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="icon">
            <FcTodoList />
            </div>
            <h3>Authentic Flavors, Unmatched Quality</h3>
            <p>
              At PD Restaurant, we bring you the perfect blend of traditional
              and contemporary cuisine. Using the freshest ingredients, our
              chefs craft dishes that capture the essence of authentic flavors
              while adding a creative touch to every plate.
            </p>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default About
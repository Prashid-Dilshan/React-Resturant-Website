import React from 'react'
import homeImage from '../../images/hero-carousel-1.jpg';
import About from '../About/About'
import "./Home.css"
import Menu from '../Menu/Menu';
import Chefs from '../Chefs/Chefs';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';

function Home() {
  return (
   <>

<div className="image-container">
      <img src={homeImage} alt="PD Restaurant" />

      <div className="image-text">
        Supper Delicious<br/> Foods in<br /> Sri Lanka!
        <p>We do not cook, we create your emotions !</p>


        <a><button className='booktablebtn'> Our Menu</button></a>
        <a ><button className='menubtn'> Book a Table </button></a>
      </div>
      
</div>


<About></About>
<Menu></Menu>
<Chefs></Chefs>
<Gallery></Gallery>
<Contact></Contact>

   </>
  )
}

export default Home
import React from 'react'
import homeImage from '../../images/hero-carousel-1.jpg';
import About from '../About/About'
import "./Home.css"

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
   </>
  )
}

export default Home
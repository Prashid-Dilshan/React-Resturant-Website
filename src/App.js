import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu'
import Chefs from './Components/Chefs/Chefs'
import Gallary from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login';
import "./App.css"

function App() {
  return (

    <Router>
      <div>

 <nav className="navbar">

  <div className='logo'>
    <h2>PD Resturant<span>.</span></h2>
  </div>

  <ul className='link'>

    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/menu">Menu</Link></li>
    <li><Link to="/chefs">Chefs</Link></li>
    <li><Link to="/gallery">Gallary</Link></li>
    <li><Link to="/contact">Contact</Link></li>  

  </ul>

  <button className='logginbtn'><Link to="/login">Loggin</Link></button>
</nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;


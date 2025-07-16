import React from 'react';
import Navbar from './Navbar/Navbar';
import ProductCarousel from './Carousel/ProductCarousel';
import CardGrid from './Card/CardGrid';
import "./App.css";

function App() {
  return (
    <>
    <div className='hero'>
      <div className='hero-left'>
        <h2>Experience the Timeless Elegance</h2>
        <p>Uncover the Essentials: Crafted for the Modern Wardrobe, our Collection Combines Sophistication and...</p>
        <p className='edge'>EDGE OVER REALITY</p>
        <div className='buttons'>
          <button className='black'>Shop Our Collection</button>
          <button className='white'>Explore the new Arrivals</button>
        </div>
        <p><b>GET UPTO 50% DISCOUNT ON YOUR FIRST ORDER*</b></p>
      </div>
      <div className='hero-right'>
        <img src='https://sem2-project-muz1.onrender.com/models/male_image.png' alt='men-hero'></img>
        <img src='https://sem2-project-muz1.onrender.com/models/female_image.png' alt='women-hero'></img>
      </div>
    </div>
    

    </>
  )

}

export default App;

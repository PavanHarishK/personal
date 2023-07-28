import React from "react";
import Product from "../Products";
import "./index.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71wAT9aWYCL._SX3000_.jpg"
          alt="banar"
        />
        <div className="home__row">
          <Product 
          id='1'
          title="Shoes"
          price={10.00}
          image="https://m.media-amazon.com/images/I/71P1toaBB2L._UX695_.jpg"
          rating={5}/>
          
          <Product 
          id='2'
          title="Books"
          price={10.99}
          image="https://m.media-amazon.com/images/I/51I6vQLJD+L._SX258_BO1,204,203,200_.jpg"
          rating={5}/>
          
        </div>
        <div className="home__row">
         {/* <Product />
          <Product />
          <Product />*/} 
        </div>
        <div className="home__row">
        {/*<Product /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;

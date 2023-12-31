import React from "react";
import "./index.css";
function Product({id,title,image,price,rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_,i)=>(<p>*</p>)) } 
        </div>
        <img
          className="product__image"
          src={image}
          alt="product_img"
        />
        <button className="product__button">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;

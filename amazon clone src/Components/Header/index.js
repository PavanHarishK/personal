import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./index.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__seachInput" type="text" />
        <SearchIcon className="header__seachIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option__one">Hello</span>
          <span className="header__option__two">Sign in</span>
        </div>

        <div className="header__option">
          <span className="header__option__one">Return</span>
          <span className="header__option__two">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__option__one">Your</span>
          <span className="header__option__two">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon className="" />
          <span className="header__option__two header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

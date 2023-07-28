import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="formValidationPage">Form Validations </Link>
        </li>
        <li>
          <Link to="calculatorPage">Calculator</Link>
        </li>
        <li>
          <Link to="contextPage">ContextAPI</Link>
        </li>
        <li>
          <Link to="fireBasePage">Fire Base </Link>
        </li>
        <li>
          <Link to="inc-decPage">Increment & Decrement</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

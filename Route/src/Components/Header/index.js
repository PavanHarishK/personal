import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <div>
        <h3>My Blog</h3>
        <nav>
          <ul className="header-blog">
            <li>
              <Link className="blog-text" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="blog-text" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="blog-text" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blogsList">BlogsList</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;

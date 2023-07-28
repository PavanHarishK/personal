// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Checkout />
    </div>
  );
}

export default App;

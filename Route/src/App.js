import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
//import BlogsList from "./Components/BlogsList";
import "./App.css";
import ApiPage from "./Components/API/ApiPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/api" element ={<ApiPage/>}/>

        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

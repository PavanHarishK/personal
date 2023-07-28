import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Componets/Header";
import FormData from "./Componets/FormValidation";

import "./App.css";
import Calculator from "./Componets/Calculator";
import ContextPage from "./Componets/ContextAPI";
import FireBase from "./Componets/FireBase";
import Increment from "./Componets/Increment&Decrement";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/formValidationPage" element={<FormData />} />
        <Route path="/calculatorPage" element={<Calculator />} />
        <Route path="/contextPage" element={<ContextPage />} />
        <Route path="/fireBasePage" element={<FireBase />} />
        <Route path="/inc-decPage" element={<Increment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

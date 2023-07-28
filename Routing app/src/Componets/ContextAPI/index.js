//fetch   https://jsonplaceholder.typicode.com/todos

//here u can see the data is fetching from the URL by using useEffect method

import React, { useState, useEffect } from "react";
import AxiosPage from "./Axios";

function ContextPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos") // arrow function
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); //[ ] dependency

  return (
    <div>
      <center>
        <h3>Fetch Method Calling</h3>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}

        <AxiosPage />
      </center>
    </div>
  );
}
export default ContextPage;

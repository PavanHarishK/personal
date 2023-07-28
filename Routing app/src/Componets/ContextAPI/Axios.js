//Axios get() method is used in this page

import React, { useState, useEffect } from "react";
import axios from "axios";

function AxiosPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <center>
        <h4>Axios Page</h4>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </center>
    </div>
  );
}

export default AxiosPage;

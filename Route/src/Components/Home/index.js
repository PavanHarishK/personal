// import { Component } from "react";
// import "./index.css";

// class Home extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Home</h1>
//         <img
//           className="image-fix"
//           src="https://cdn.onlinewebfonts.com/svg/img_8.png"
//           alt="home"
//         />
//       </div>
//     );
//   }
// }
// export default Home;

import React from 'react'
import ApiPage from '../API/ApiPage';

const Home=()=> {
  return (
    <div>

    <h1>Home</h1>
         <img
         className="image-fix"
           src="https://cdn.onlinewebfonts.com/svg/img_8.png"
           alt="home"
       />
      <ApiPage/>
    </div>
  )
}

export default Home;
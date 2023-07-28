/* eslint-disable jsx-a11y/alt-text */

import { useState } from "react";
import "./App.css";

function App() {
  const [insta, setInsta] = useState(false);
  const [facebook, setFacebook] = useState(false);

  const instaMouseClick = () => {
    setInsta(true);
    setFacebook(false);
  };
  const facebookMouseClick = () => {
    setFacebook(true);
    setInsta(false);
  };

  // const mouseOut = () => {
  //   setInsta(false);
  //   setFacebook(false);
  // };

  return (
    <div className="App">
      <div>
        <div>
          <img
            onClick={instaMouseClick}
            className="logo-data"
            src="https://www.starpng.com/public/uploads/preview/insta-logo-png-image-11577730826bdjiestbkg.png"
          />
          {insta && <h2>You Opend Insta</h2>}
        </div>

        <div>
          <img
            onClick={facebookMouseClick}
            className="logo-data"
            src="https://clipart.info/images/ccovers/1509135366facebook-symbol-png-logo.png"
          />
          {facebook && <h2>You Opend Facebook</h2>}
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';

function Profile(props) {
  
  //debugger
  return (
    <div className="container">
      <div className="row">
        <h1>Profile Details</h1>
        <p className="col-4">{props.sname}</p>
        <p className="col-4">{props.class}</p>
        <p className="col-4">{props.age}</p>
      </div>
    </div>
  );
}

export default Profile;

import { React } from "react";
import "./index.css";

const UserProfile = (props) => {
  const { userDetails, onDeleteUser } = props;
  const { imageUrl, name, role, uniqueNo } = userDetails;
  const onDelete = () => {
    onDeleteUser(uniqueNo);
    //console.log(`${onDeleteUser}`);
  };
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="img" />

      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
      <button
        type="button"
        onClick={() => onDelete(uniqueNo)}
        className="delete-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img"
        />
      </button>
    </li>
  );
};

export default UserProfile;

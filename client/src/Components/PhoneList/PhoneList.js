import React from "react";
import { Link } from "react-router-dom";
import "./PhoneList.css";

function PhoneList({ phoneData, deleteHandler }) {
  return (
    <div>
      <Link className="list-container" to={`/phones/${phoneData._id}`}>
        <div className="list-name">{phoneData.name}</div>
        <button
          className="list-button"
          onClick={() => deleteHandler(phoneData._id)}
        >
          Delete
        </button>
      </Link>
    </div>
  );
}

export default PhoneList;

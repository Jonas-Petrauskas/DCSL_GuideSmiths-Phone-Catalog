import React from "react";
import { postPhone } from "../../Services/ApiServices";
import PhoneForm from "../PhoneForm/PhoneForm";
import "./AddPhone.css";

function AddPhone() {
  async function addPhone(newPhone) {
    await postPhone(newPhone);
  }
  return (
    <div>
      <header className="phoneForm-header">
        <h2>Add Phone</h2>
      </header>
      <PhoneForm addPhone={addPhone} />
    </div>
  );
}

export default AddPhone;

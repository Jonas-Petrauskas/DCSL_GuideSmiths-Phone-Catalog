import React, { useState } from "react";
import { useHistory } from "react-router";
import "./PhoneForm.css";

function PhoneForm({ addPhone }) {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);
  const [imageFileName, setImageFileName] = useState("");
  const [screen, setScreen] = useState("");
  const [processor, setProcessor] = useState("");
  const [ram, setRam] = useState(0);

  // FileReader reads binary data and encodes it as base64 data ULR
  const converToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (err) => {
        reject(err);
      };
    });
  };
  // target file to be uploaded and it's async converted to base64
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await converToBase64(file);
    // using encode data to update state
    setImageFileName(base64);
  };

  const history = useHistory();

  async function submitAndNavigate(e) {
    e.preventDefault();
    if (
      name !== "" &&
      manufacturer !== "" &&
      description !== "" &&
      color !== "" &&
      price !== 0 &&
      imageFileName !== "" &&
      screen !== "" &&
      processor !== "" &&
      ram !== 0
    ) {
      await addPhone({
        name,
        manufacturer,
        description,
        color,
        price,
        imageFileName,
        screen,
        processor,
        ram,
      });
      setName("");
      setManufacturer("");
      setDescription("");
      setColor("");
      setPrice(0);
      setImageFileName(imageFileName);
      setScreen("");
      setProcessor("");
      setRam(0);
      history.push("/");
    }
  }
  return (
    <div className="form-container">
      <form onSubmit={submitAndNavigate}>
        <div className="form-name">
          <p>Name</p>
          <input
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
          />
        </div>
        <div className="form-manufacturer">
          <p>Manufacturer</p>
          <input
            required
            onChange={(e) => {
              setManufacturer(e.target.value);
            }}
            value={manufacturer}
            type="text"
          />
        </div>
        <div className="form-description">
          <p>Description</p>
          <input
            required
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            type="text"
          />
        </div>
        <div className="form-color">
          <p>Color</p>
          <input
            required
            onChange={(e) => {
              setColor(e.target.value);
            }}
            value={color}
            type="text"
          />
        </div>
        <div className="form-price">
          <p>Price</p>
          <input
            required
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
            type="number"
          />
        </div>
        <div className="form-imageFileName">
          <p>ImageFileName</p>
          <input
            required
            type="file"
            label="Image"
            name="myFile"
            accept=".jpeg, .png, .jpg"
            onChange={(e) => handleFileUpload(e)}
          />
        </div>
        <div className="form-screen">
          <p>Screen</p>
          <input
            required
            onChange={(e) => {
              setScreen(e.target.value);
            }}
            value={screen}
            type="text"
          />
        </div>
        <div className="form-processor">
          <p>Processor</p>
          <input
            required
            onChange={(e) => {
              setProcessor(e.target.value);
            }}
            value={processor}
            type="text"
          />
        </div>
        <div className="form-ram">
          <p>Ram</p>
          <input
            required
            onChange={(e) => {
              setRam(e.target.value);
            }}
            value={ram}
            type="number"
          />
        </div>

        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default PhoneForm;

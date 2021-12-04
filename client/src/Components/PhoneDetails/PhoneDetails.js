import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPhones } from "../../Services/ApiServices";
import "./PhoneDetails.css";

function PhoneDetails() {
  const [selectedPhone, setSelectedPhone] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchById() {
      try {
        const data = await getPhones();
        setIsLoading(false);
        data.forEach((event) => {
          if (event._id === id) setSelectedPhone(event);
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchById();
  }, [id]);

  return (
    <div className="details-container">
      <header className="details-header">
        <h2>Phone Details</h2>
      </header>
      {isLoading && <div>Loading...</div>}
      <div className="details">
        <ul>
          <li>Name:</li>
          <li>{selectedPhone.name}</li>
        </ul>
        <ul>
          <li>Manufacturer:</li>
          <li>{selectedPhone.manufacturer}</li>
        </ul>
        <ul>
          <li>Description:</li>
          <li>{selectedPhone.description}</li>
        </ul>
        <ul>
          <li>Color:</li>
          <li>{selectedPhone.color}</li>
        </ul>
        <ul>
          <li>$ Price:</li>
          <li>{selectedPhone.price}</li>
        </ul>
        <ul>
          <li>Screen:</li>
          <li>{selectedPhone.screen}</li>
        </ul>
        <ul>
          <li>Processor:</li>
          <li>{selectedPhone.processor}</li>
        </ul>
        <ul>
          <li>Ram:</li>
          <li>{selectedPhone.ram}</li>
        </ul>
        <div className="image-container">
          <img src={selectedPhone.imageFileName} alt="file not found" />
        </div>
      </div>
    </div>
  );
}

export default PhoneDetails;
